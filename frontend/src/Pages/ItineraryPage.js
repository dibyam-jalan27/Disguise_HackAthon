import React, { useState } from 'react';
import Modal from 'react-modal';

const ItineraryPage = () => {
  const [items, setItems] = useState([]);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDays, setSelectedDays] = useState('');
  const daysList = [1, 2, 3, 4, 5, 6, 7]; // Number of days list

  const handleAddItem = () => {
    if (selectedCity && selectedDays) {
      const newItem = {
        id: new Date().getTime(),
        name: selectedCity,
        days: selectedDays,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setSelectedCity('');
      setSelectedDays('');
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

  const handleDaysSelect = (days) => {
    setSelectedDays(days);
  };

  return (
    <div className="container mx-auto py-12 w-full h-screen ">
      <h1 className="text-3xl font-bold mb-4">Itinerary Planner</h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Items */}
        <div>
          <h2 className="text-xl font-bold mb-4">Itinerary Items</h2>
          {items.length === 0 ? (
            <p>No items added to the itinerary yet.</p>
          ) : (
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="flex items-center">
                  <span className="font-semibold mr-2">{item.name}</span>
                  <span>- {item.days} days</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Column - Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">Add New Item</h2>
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
            <div className="flex flex-wrap justify-center">
              <button
                className="bg-gray-200 px-3 py-2 rounded m-2"
                onClick={() => handleCitySelect('New York')}
              >
                New York
              </button>
              <button
                className="bg-gray-200 px-3 py-2 rounded m-2"
                onClick={() => handleCitySelect('London')}
              >
                London
              </button>
              <button
                className="bg-gray-200 px-3 py-2 rounded m-2"
                onClick={() => handleCitySelect('Paris')}
              >
                Paris
              </button>
              {/* Add more city buttons as needed */}
            </div>
          </Modal>
          {selectedCity && (
            <div className="mt-4">
              <p className="font-semibold">Selected City: {selectedCity}</p>
              <div className="mt-2">
                <p className="font-semibold mb-1">Select Number of Days:</p>
                <div className="flex flex-wrap">
                  {daysList.map((days) => (
                    <button
                      key={days}
                      className={`px-3 py-2 rounded m-1 ${
                        selectedDays === days ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                      }`}
                      onClick={() => handleDaysSelect(days)}
                    >
                      {days} days
                    </button>
                  ))}
                </div>
              </div>
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
