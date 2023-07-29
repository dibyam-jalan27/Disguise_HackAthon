import React from 'react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <img className="w-32 h-32 rounded-full mx-auto mb-4" src={image} alt={name} />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', image: 'john-doe.jpg' },
    // Add more team members as needed
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className=" flex-col container mx-auto px-4 items-center">
        <div className=" flex font-extrabold text-5xl mb-6 mx-auto items-center justify-center">About Us</div>
        <div className="text-gray-600 mb-6 text-2xl ">
        Welcome to TravelPlanner, your ultimate destination for personalized travel experiences. At TravelPlanner, we are passionate about travel and believe that every journey is an opportunity for exploration and adventure
        </div>
        <div className='my-4'>
        <h1 className="text-gray-600 mb-6 text-xl bg-yellow-500/[0.1]" >Tailored Travel Itineraries:</h1>
        <div>Whether you're a seasoned globetrotter or a first-time explorer, we are here to assist you in creating unforgettable memories and crafting unique travel itineraries tailored to your interests and preferences.</div>
        </div>
        <div className='my-4'>
        <h1 className="text-gray-600 mb-6 text-xl bg-yellow-500/[0.1]" >A Traveler's Community:</h1>
        <div>
        TravelPlanner is more than just a travel agency; it's a community of passionate travelers who share a love for exploration and discovery. Join us on this journey as we uncover the hidden gems of the world and embark on unforgettable adventures together.
        </div>
        </div>
        <div className='my-4'>
        <h1 className="text-gray-600 mb-6 text-xl bg-yellow-500/[0.1]" >A Journey of Discovery:</h1>
        <div>With TravelPlanner, you can leave the stress of planning behind and focus on immersing yourself in the beauty of the world. We believe that every trip is an opportunity for personal growth, cultural understanding, and connecting with the world's diverse landscapes and people.

        </div>
        </div>
        <div className='my-4'>
        <h1 className="text-gray-600 mb-6 text-xl bg-yellow-500/[0.1]" >Your Dream, Our Priority:</h1>
        <div>
        Whether you dream of relaxing on a tropical beach, exploring ancient ruins, or wandering through bustling city streets, TravelPlanner is here to make your travel dreams a reality. Let's create your next extraordinary travel experience, and let the world be your playground. Happy travels!
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
