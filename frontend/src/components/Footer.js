import React from 'react';

const Footer = () => {
  return (
    <div className=" bg-gray-800 text-white">
      <div className="container mx-auto py-8 grid md:grid-cols-4 gap-8">
        {/* Categories */}
        <div className="md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">About Us</h1>
          <span className="block mb-1">Press</span>
          <span className="block mb-1">Resources and </span>
          <span className="block mb-1">Investor Relations</span>
          <span className="block mb-1">Trust & Society</span>
          <span className="block">Join</span>
        </div>

        {/* Links */}
        <div className="md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">Links</h1>
          <span className="block mb-1">FAQ</span>
          <span className="block mb-1">Pages</span>
          <span className="block mb-1">Store</span>
          <span className="block mb-1">Compare</span>
          <span className="block">Cookies</span>
        </div>

        {/* About */}
        <div className="md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">About</h1>
          <p className="text-sm">
          Embark on unforgettable journeys with our travel planner site. Discover new destinations, experience diverse cultures, and create lasting memories. Start your adventure today!
          </p>
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">Contact</h1>
          <p className="text-sm">
          Have any questions or need assistance? Contact our friendly team for personalized travel advice and support. We're here to make your travel dreams a reality.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto text-center text-sm">
          <span className="block mb-2">SHOPNOW</span>
          <span className="block text-xs">
            &copy; {new Date().getFullYear()} . All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
