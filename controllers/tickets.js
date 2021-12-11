const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports= {
    new: newTicket,
    create
}

function newTicket (req, res){
res.render('tickets/new',{ flightId: req.params.id})
}

function create (req, res){
    req.body.flight = req.params.id;
    const ticket = new Ticket(req.body);

    ticket.save(function(err){
        if (err) console.log(err)
        console.log(ticket);
        res.redirect(`/flights/${req.params.id}`)
    })
    
}