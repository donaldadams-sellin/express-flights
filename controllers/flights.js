const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        //sort flights by departure date
        flights.sort(function (flight1, flight2) {
            if (flight1.departs < flight2.departs) return -1;
            if (flight1.departs > flight2.departs) return 1;
            return 0;
        })
        res.render('flights/index', {
            flights
        })
    })
};

function newFlight(req, res) {
    //create flight to get default date
    const newFlight = new Flight();
    //set default date equal to a variable
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}

function create(req, res) {
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights')
    })
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.sort(function(d1, d2){
            if( d1.arrival < d2.arrival) return -1;
            if( d1.arrival > d2.arrival) return 1;
            return 0; 
        })
        res.render('flights/show', {
            flight
        })
    })
}