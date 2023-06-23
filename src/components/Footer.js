import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>123 Street, City</p>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
