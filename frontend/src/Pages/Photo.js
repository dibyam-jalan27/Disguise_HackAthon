// Photo.js
import React, { useState } from 'react';
import axios from 'axios';
import "./temp.css"

const Photo = () => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('description', description);
    formData.append('date', date);

    try {
      await axios.post('/api/v1/upload_image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('image uploaded successfully');
      setDescription('');
      setDate('');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  return (
    <div className='DIV'>

      <h2>Upload image Photo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Select Photo:</label>
          <input type="file" id="photo" name="photo" onChange={handleFileChange} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Photo;
