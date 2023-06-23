import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const socialData = [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/example',
      icon: <FaFacebook size={32} />,
    },
    {
      platform: 'Twitter',
      link: 'https://www.twitter.com/example',
      icon: <FaTwitter size={32} />,
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/example',
      icon: <FaInstagram size={32} />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/company/example',
      icon: <FaLinkedin size={32} />,
    },
    // Add more social links as needed
  ];

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      {/* Content of the SocialLinks component */}
    <div className="flex justify-center items-center space-x-4">
      {socialData.map((socialItem, index) => (
        <a key={index} href={socialItem.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
          {socialItem.icon}
        </a>
      ))}
    </div>
    </div>
  );
};

export default SocialLinks;
