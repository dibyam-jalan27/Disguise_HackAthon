const City = require('../Models/cityModel'); // Import the City model

async function generateItinerary(days,cityId) {
  if (days === 0 ) {
    return [];
  }
  console.log(cityId)
  const city = await City.findById(cityId);
  if (!city) {
    throw new Error('No cities found in the database.');
  }

  const itinerary = [];

  for (let i = 1; i <= days; i++) {
    const dailyItinerary = {};

      const numDestinations = city.destination.length;
      const randomDestinationIndex = Math.floor(Math.random() * numDestinations);
      const randomDestination = city.destination[randomDestinationIndex];

      dailyItinerary[city.name] = {
        city: city.name,
        destination: randomDestination.name,
        rating: randomDestination.rating,
        images: randomDestination.images,
        lat: randomDestination.lat,
        lng: randomDestination.lng,
      };

    itinerary.push({
      day: `Day ${i}`,
      destinations: Object.values(dailyItinerary),
    });
  }

  return itinerary;
}

module.exports = generateItinerary;
