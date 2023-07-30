import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const ItineraryPage = () => {

  const [items, setItems] = useState([]);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [date, setDate] = useState('');

  const handleAddItem = () => {
    if (selectedCity && date) {
      const newItem = {
        id: new Date().getTime(),
        name: selectedCity,
        date: date,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setSelectedCity('');
      setDate('');
      setIsCityModalOpen(false);
    }
  };

  const openCityModal = () => {
    setIsCityModalOpen(true);
  };

  const closeCityModal = () => {
    setIsCityModalOpen(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    closeCityModal();
  };

  const [ data , setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/v1/city`)
      .then((res) => {
        setData(res.data.cities)
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(data);
  }, []);

  return (
    <div className="container mx-auto py-28 ">
      <h1 className="text-6xl font-bold mb-4">Itinerary Planner</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column - Items */}
        <div className='bg-gray-200 rounded-full px-10'>
          <h2 className="text-xl font-bold mb-2">Itinerary Items</h2>
          {items.length === 0 ? (
            <p>No items added to the itinerary yet.</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id} className="mb-2">
                  <span className="font-semibold">{item.name}</span> - {item.date}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Column - Form */}
        <div>
          <h2 className="text-xl font-bold mb-2">Add New Item</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={openCityModal}
          >
            Select City
          </button>
          <Modal
            isOpen={isCityModalOpen}
            onRequestClose={closeCityModal}
            contentLabel="City Selector"
            className="modal"
            overlayClassName="overlay"
          >
            <h2 className="text-xl font-bold mb-4">Select City</h2>
            <div className="flex flex-wrap">
                {
                  data.map((city) => {
              <button
                className="bg-gray-200 px-3 py-2 rounded m-2"
                onClick={() => handleCitySelect('New York')}
              >
                {city.name}
              </button>
                  })
                }
              
              
              {/* Add more city buttons as needed */}
            </div>
          </Modal>
          {selectedCity && (
            <div className="mt-4">
              <p className="font-semibold">Selected City: {selectedCity}</p>
              <input
                type="text"
                placeholder="Date"
                className="border border-gray-300 rounded px-3 py-2 w-full mt-2 focus:outline-none focus:border-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={handleAddItem}
              >
                Add Itinerary
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;
