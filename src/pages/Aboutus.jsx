import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Welcome to our home service app! We bring professional plumbing, cleaning, electrical, painting, and salon services right to your doorstep in Vaddeswaram. Our mission is to make home maintenance easy and stress-free by connecting you with trusted, skilled professionals. Whether you need a quick repair, a fresh coat of paint, or a salon service at home, we're here to help with a friendly smile.
      </p>

      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission & Values</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our mission is to serve the Vaddeswaram community by providing high-quality, reliable home services with just a few taps on our app. We value trust, transparency, and convenience in everything we do. You can count on us to deliver timely service, clear communication, and respect for your home.
        </p>
      </section>

      <section className="bg-blue-500 text-white py-8 px-4 my-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          We envision a world where home care is effortless. Our vision is to be the go-to service app in Vaddeswaram, making quality home repair and beauty services accessible to everyone. We strive to bring a smile and comfort to every home by offering reliable, friendly, and professional assistance whenever you need it.
        </p>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
          We offer a wide range of services to meet all your home care needs in Vaddeswaram.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Plumbing Services</h3>
            <p className="mt-2 text-gray-700">From leaky faucets to pipe installations, our expert plumbers handle it all quickly and efficiently.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Cleaning Services</h3>
            <p className="mt-2 text-gray-700">Keep your home sparkling clean with our professional cleaning team, equipped for deep cleans and regular upkeep.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-yellow-100 hover:bg-yellow-200 transition-colors">
            <h3 className="text-xl font-bold">Electrical Services</h3>
            <p className="mt-2 text-gray-700">Our skilled electricians can solve wiring issues, install new fixtures, and ensure your home is safe and well-lit.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors">
            <h3 className="text-xl font-bold">Painting Services</h3>
            <p className="mt-2 text-gray-700">Transform your space with our professional painting services, whether it's a fresh coat of paint or a complete interior makeover.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-pink-100 hover:bg-pink-200 transition-colors">
            <h3 className="text-xl font-bold">Salon Services</h3>
            <p className="mt-2 text-gray-700">Enjoy salon treatments in the comfort of your home, from haircuts to styling and personal grooming services.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
