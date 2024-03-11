const Flight = require('../model/flight');
const Ticket = require('../model/ticket')

module.exports = {
    new: newTicket,
    create,
}

async function newTicket(request,respond) {
    console.log('this is req.params.id = ', request.params.id)
    const flightId = request.params.id;
  respond.render('flights/ticket', {title: 'New ticket', flightId: flightId})
} 

async function create(request, respond) {

console.log('this is reqparamsId =', request.params.id, 'this is reqBody =', request.body);
const flight = request.body.flight;

try{
    await Ticket.create(request.body);
} catch (err) {
console.log(err);
}
respond.render('flights/index', { title: 'Flight Details'});

};