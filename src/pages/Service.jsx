import { useState } from "react";
import { FaStar, FaTools, FaTags } from "react-icons/fa";  // Added FaTags import
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Service.css";



const categories = [
  { label: "Plumbing", type: "Repair" },
  { label: "Electrical", type: "Repair" },
  { label: "Cleaning", type: "Maintenance" },
  { label: "Pest Control", type: "Maintenance" },
  { label: "Salon", type: "Maintenance" },
  { label: "Painting", type: "Renovation" },
];
const imageFiles = {
  "Plumbing": [
    "/images/Images/plumbing1.jpg",
    "/images/Images/plumbing2.jpg",
    "/images/Images/plumbing3.jpg",
    "/images/Images/plumbing4.jpg",
    "/images/Images/plumbing5.jpg",
  ],
  "Electrical": [
    "/images/Images/elecrtronic.jpg",
    "/images/Images/elecrtronic1.jpg",
    "/images/Images/elecrtronic2.jpg",
    "/images/Images/elecrtronic3.jpg",
    "/images/Images/elecrtronic4.jpg",
  ],
  "Cleaning": [
    "/images/Images/cleaning1.jpg",
    "/images/Images/cleaning2.jpg",
    "/images/Images/cleaning3.jpg",
    "/images/Images/cleaning4.jpg",
    "/images/Images/cleaning5.jpg",
  ],
  "PestControl": [
    "/images/Images/pestcontrol.jpg",
    "/images/Images/pestcontrol1.jpg",
    "/images/Images/pestcontrol2.jpg",
    "/images/Images/pestcontrol3.jpg",
  ],
  "Salon": [
    "/images/Images/salon.jpg",
    "/images/Images/salon1.jpg",
    "/images/Images/salon2.jpg",
    "/images/Images/salon3.jpg",
    "/images/Images/salon4.jpg",
  ],
  "Painting": [
    "/images/Images/painting.jpg",
    "/images/Images/painting1.jpg",
    "/images/Images/painting2.jpg",
    "/images/Images/painting3.jpg",
  ],
};


const serviceItems = [];
let id = 1;

categories.forEach((cat) => {
  const key = cat.label.replace(/\s/g, "");
  const images = imageFiles[key] || [];
  for (let i = 1; i <= 15; i++) {
    serviceItems.push({
      id: id++,
      name: `${cat.label} Service ${i}`,
      price: Math.floor(Math.random() * 1000) + 200,
      img: images[(i - 1) % images.length] || "/images/default.jpg",
      type: cat.type,
      category: cat.label,  // Updated to match category label
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      tags: i % 3 === 0 ? ["popular", "recommended"] : i % 2 === 0 ? ["recommended"] : [],
      reviews: Math.floor(Math.random() * 200) + 20,
    });
  }
});

function Service() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [visibleItems, setVisibleItems] = useState(12);

  const filteredItems = serviceItems
    .filter(
      (item) =>
        (filterType === "All" || item.type === filterType) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

 const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${item.name} added to cart!`);
  }; 
  return (
    <div className="menu-container">
      <ToastContainer position="top-right" autoClose={2000} />

      <aside className="menu-sidebar">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={`#${cat.label.replace(/\s/g, "-")}`}
            className="menu-sidebar-link"
          >
            {cat.label}
          </a>
        ))}
      </aside>

      <div className="menu-main">
        <header className="menu-header">
          <h1>Home Services</h1>
          <div className="menu-controls">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search"
            />
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="menu-sort"
            >
              <option value="none">Sort</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </header>

        <div className="menu-filters">
          {["All", "Service"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                checked={filterType === type}
                onChange={() => setFilterType(type)}
              />{" "}
              {type}
            </label>
          ))}
        </div>

        {categories.map((cat) => {
          const catItems = filteredItems.filter(
            (i) => i.category === cat.label && i.type === cat.type
          );
          if (!catItems.length)
            return <p key={cat.label}>No items found for {cat.label}</p>;

          return (
            <section
              id={cat.label.replace(/\s/g, "-")}
              key={cat.label}
              className="menu-section"
            >
              <h2>{cat.label}</h2>
              <div className="menu-grid">
                {catItems.slice(0, visibleItems).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="menu-item"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="menu-item-img"
                      loading="lazy"
                    />
                    <h3>{item.name}</h3>
                    <div className="menu-item-rating">
                      {Array.from({ length: Math.round(item.rating) }).map(
                        (_, i) => (
                          <FaStar key={i} />
                        )
                      )}
                      <span>({item.reviews})</span>
                    </div>
                    <p className="menu-item-price">₹{item.price.toFixed(2)}</p>
                    <div className="menu-item-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>
                          <FaTags /> {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="menu-add-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Book Now
                    </button>
                  </motion.div>
                ))}
              </div>
              {catItems.length > visibleItems && (
                <div className="menu-loadmore">
                  <button onClick={() => setVisibleItems((prev) => prev + 8)}>
                    Load More
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
