import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleBookNow = () => {
    navigate("/services");
  };

  const services = [
    {
      name: "Plumbing",
      image: "/images/Images/plumbing1.jpg",
      description: "Leak repairs, fittings & installations",
      tags: "plumbing pipe leak tap repair",
    },
    {
      name: "Home Cleaning",
      image: "/images/Images/cleaning1.jpg",
      description: "Deep cleaning for kitchen, bathroom, full home",
      tags: "cleaning dust sanitization home",
    },
    {
      name: "Electrical",
      image: "/images/Images/elecrtronic.jpg",
      description: "Fan, light, inverter installations & repairs",
      tags: "electrician wiring light fan repair",
    },
    {
      name: "Painting",
      image: "/images/Images/painting.jpg",
      description: "Interior & exterior painting, touch-ups",
      tags: "painting wall color home decor",
    },
    {
      name: "Salon at Home",
      image: "/images/Images/salon.jpg",
      description: "Haircuts, grooming, beauty services",
      tags: "salon haircut grooming beauty home",
    },
  ];

  const filteredServices = services.filter((service) =>
    (service.name + " " + service.description + " " + service.tags)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* 🔧 Header Banner */}
      <section className="hero-banner">
        <div className="hero-left">
          <h1>Book Home Services</h1>
          <p>Get professional help right at your doorstep</p>
          <div className="search-box">
            <select>
              <option>Vaddeswaram, Andhra Pradesh</option>
              <option>Vijayawada</option>
              <option>Guntur</option>
            </select>
            <input
              type="text"
              placeholder="Search for service"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="hero-right">
        <img src="/home-service.jpg" alt="Home Services" />
          <button onClick={handleBookNow}>Book Now</button>
        </div>
      </section>

      {/* 🛠️ Categories */}
      <section className="categories">
        <div className="category-card">
          <h3>PLUMBING</h3>
          <p>Leak Repairs & Installations</p>
          <span>Quick Service</span>
        </div>
        <div className="category-card">
          <h3>CLEANING</h3>
          <p>Full Home Deep Clean</p>
          <span>Safe & Hygienic</span>
        </div>
        <div className="category-card">
          <h3>ELECTRICAL</h3>
          <p>Reliable & Skilled Electricians</p>
          <span>Same-day Service</span>
        </div>
        <div className="category-card">
          <h3>SALON</h3>
          <p>Beauty Services at Home</p>
          <span>For Men & Women</span>
        </div>
      </section>

      {/* 🧰 Service Grid */}
      <section className="restaurant-section">
        <h2>Available Services</h2>
        <div className="restaurant-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div className="restaurant-card" key={index}>
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))
          ) : (
            <p>No matching services found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
