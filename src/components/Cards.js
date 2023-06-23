import React from 'react';

const Cards = () => {
  const Data = [
    {
      title: 'Frontend Developer',
      location: 'New York, NY',
      company: 'Example Company',
      description: 'We are seeking a talented frontend developer to join our team...',
    },
    {
      title: 'Backend Developer',
      location: 'San Francisco, CA',
      company: 'Example Company',
      description: 'We are looking for an experienced backend developer to work on...',
    },
    // Add more job cards as needed
  ];

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Data.map((jobItem, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold">{jobItem.title}</h3>
          <p className="text-gray-600 mb-2">{jobItem.location}</p>
          <p className="text-gray-800 mb-4">{jobItem.company}</p>
          <p className="text-gray-700">{jobItem.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
