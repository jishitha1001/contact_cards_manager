
import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newContact = {
      ...formData,
      id: crypto.randomUUID()
    };

    onAddContact(newContact);

    setFormData({
      fullName: "",
      jobTitle: "",
      company: "",
      phone: "",
      email: "",
      bio: "",
      avatar: ""
    });
  }

  return (
    <section className="form-container">
      <div className="form-heading">
        <span className="section-tag">NEW CONNECTION</span>
        <h2>Add a Contact</h2>
        <p>Enter the details to save a new contact.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              placeholder="e.g. Software Developer"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Avatar Image URL</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group bio-group">
          <label htmlFor="bio">Short Bio</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Write a short description..."
            value={formData.bio}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="add-button">
          + Add Contact
        </button>

      </form>
    </section>
  );
}

export default ContactForm;
