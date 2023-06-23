import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompanyNews = () => {
  const newsData = [
    {
      title: 'New Product Launch',
      description: 'We are excited to announce the launch of our new product!',
      imageUrl: '',
      date: 'June 20, 2023',
    },
    {
      title: 'Company Expansion',
      description: 'We are expanding our operations to serve more customers.',
      imageUrl: 'https://pixabay.com/link/?ua=cd3%3Dimage%26cd7%3Den%253Acarousel%253AIND%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3D&sp=%2524%3Dadvertisement_clicked%26action%3Dnavigate%26ad_partner%3Dgetty%26ad_content%3Dapi_ad%26ad_type%3D%26media_type%3Dimage%26media_id%3D&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fcarousel-of-horses-in-festive-days-gm1381494380-442999888%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_image_sponsored%26utm_content%3Dhttps%253A%252F%252Fpixabay.com%252Fimages%252Fsearch%252Fcarousel%252F%26utm_term%3Dcarousel&hash=9a9e771e4ee29570b9cbb244c7eb5d125b0e3627&=',
      date: 'June 18, 2023',
    },
    // Add more news items as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container ">

   
    <div className="bg-#4b5563-100 p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Recent News</h2>
      <Slider {...settings}>
        {newsData.map((newsItem, index) => (
          <div key={index} className="px-4">
            <div className="bg-green-300 rounded-lg shadow-lg">
              <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-auto mb-2 rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{newsItem.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{newsItem.date}</p>
                <p className="text-gray-800">{newsItem.description}</p>
              </div>
            </div>
          </div>

        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CompanyNews;