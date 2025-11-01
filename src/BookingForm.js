import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.date) newErrors.date = "Select a date";
    if (!formData.time) newErrors.time = "Select a time";
    if (formData.guests < 1) newErrors.guests = "At least 1 guest required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Table booked successfully!");
      console.log("Booking details:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Your Table at Little Lemon 🍋</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-label="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          aria-label="Date"
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </label>

      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          aria-label="Time"
        />
        {errors.time && <p className="error">{errors.time}</p>}
      </label>

      <label>
        Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          aria-label="Number of guests"
        />
        {errors.guests && <p className="error">{errors.guests}</p>}
      </label>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
