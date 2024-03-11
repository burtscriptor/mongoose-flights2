const Flight = require('../model/flight');
const Ticket = require('../model/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};


async function index(request, respond) {
  
    const flights = await Flight.find({});
    respond.render('flights/index', { title: 'All flights', flights }); 
    
}

async function show(request, respond) {
  console.log('show trigggerred ', request.params.id);
  const flight = await Flight.findById(request.params.id);
    const ticket = await Ticket.find({flight: flight._id});
      respond.render('flights/show', { title: 'Flight Details', flight, ticket });
        console.log('this is flight =', flight);
          console.log('this is ticket =', ticket);
};



function newFlight(request, respond) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    respond.render('flights/new', { title: 'Add Flight', errorMsg: '' });
  };

  async function create(request, respond) {
  console.log(request.body);
  for (let key in request.body) { // Remove empty properties so that defaults will be applied
    if (request.body[key] === '') delete request.body[key];
  }
  try {
    await Flight.create(request.body);
    respond.redirect('/flights'); // Always redirect after CRUDing data
  } catch (err) { // Typically some sort of validation error
    
    console.log(err);
    respond.render('flights/new', { errorMsg: err.message });
  }
}