import React from 'react';

const VerticalCardContainer = () => {
  const cardData = [
    {
      image: 'path/to/image1.jpg',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Card 2',
      description: 'Nulla ac ante vitae erat rutrum pretium ac at mauris.',
    },
    {
      image: 'path/to/image3.jpg',
      title: 'Card 3',
      description: 'Fusce finibus arcu nibh, vel aliquam metus auctor in.',
    },
  ];

  return (
    <div className='flex justify-center items-center space-x-4 mt-4'>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardData.map((cardItem, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 flex">
          <div className="w-16 h-16 mr-4">
            <img src={cardItem.image} alt={cardItem.title} className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{cardItem.title}</h3>
            <p className="text-gray-700">{cardItem.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default VerticalCardContainer;
