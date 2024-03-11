const Flight = require('../model/flight');

module.exports = {
    create,
}

async function create(request, respond) {
    const flight = await Flight.findById(request.params.id)

    flight.destinations.push(request.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    respond.redirect(`/flights/${flight._id}`);
}