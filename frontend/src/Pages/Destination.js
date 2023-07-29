import React from "react";
import { useParams } from "react-router-dom";

// const Destination = () => {
//   // Use useParams to get the dynamic parameter from the URL
//   const { destinationId } = useParams();

//   // In a real application, you would fetch the destination details from an API
//   // For this example, we'll use a static data object
//   const destinations = [
//     {
//       id: "1",
//       name: "Paris",
//       description:
//         "Paris, the capital of France, is renowned for its beautiful architecture, world-class museums, and iconic landmarks like the Eiffel Tower and Notre-Dame Cathedral.",
//       image: "frontend/src/images/pexels-andrei-tanase-1271619.jpg",
//     },
//     {
//       id: "2",
//       name: "Bali",
//       description:
//         "Bali, Indonesia, is known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
//       image: "frontend/src/images/pexels-gabriela-palai-590029.jpg",
//     },
//     // Add more destination objects as needed
//   ];

//   // Find the destination object with the matching ID
//   const destination = destinations.find(
//     (dest) => dest.id === destinationId
//   );

//   // If the destination is not found, you can show a "not found" message or redirect
//   if (!destination) {
//     return <p>Destination not found</p>;
//   }

//   // Otherwise, render the destination details
//   return (
//     <div>
//       <h1>{destination.name}</h1>
//       <img src={destination.image} alt={destination.name} />
//       <p>{destination.description}</p>
//     </div>
//   );
// };

// export default Destination  ;
const Destination = () => {
    return(
        <div>Destination</div>
    )
}

export default Destination;
