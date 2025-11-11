"use client";

import React, { useState , useRef , useEffect} from "react";
import {
  LuPhoneCall,
  LuMail,
  LuMapPin,
  LuSend,
  LuUser,
  LuInfo,
  LuPen,
  LuChevronDown,
} from "react-icons/lu";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const dropdownRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    "Web Development",
    "App Development",
    "Software Development",
    "Digital Marketing",
    "Others",
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();
  let newErrors = {};
  if (!formData.name) newErrors.name = "Name is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.phone) newErrors.phone = "Phone is required";
  if (!formData.message) newErrors.message = "Message is required";
  setErrors(newErrors);

  if (Object.keys(newErrors).length !== 0) return;

  try {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      
    }
  } catch (error) {
    console.log("Error:", error);
  }
};


  useEffect(() => {
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <div id="HomeContact">
      <div className="container">
        <div className="HomeContactHead">
          <h2>Contact Us</h2>
        </div>
        <div className="HomeContactMain">
          <div className="HomeContactLeft">
            <div className="HomeContactTitle">
              <p>
                Have questions?
                <br /> Get in touch!
              </p>
            </div>
            <div className="HomeContactAdressBox">
              <div className="AdressBox">
                <div className="Iconbox">
                  <LuMapPin />
                </div>
                <div className="TextBox">
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3062.378061272568!2d76.37095207503427!3d10.230265989887211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEzJzQ5LjAiTiA3NsKwMjInMjQuNyJF!5e1!3m2!1sen!2sin!4v1762859513771!5m2!1sen!2sin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    First Floor Vijo Tower Karukutty, Erankulam, Kochi, India
                  </a>
                </div>
              </div>
              <div className="AdressBox">
                <div className="Iconbox">
                  <LuPhoneCall />
                </div>
                <div className="TextBox">
                  <a href="tel:+917012725965">+91 7012725965</a>
                </div>
              </div>
              <div className="AdressBox">
                <div className="Iconbox">
                  <LuMail />
                </div>
                <div className="TextBox">
                  <a href="mailto:varixialbs@gmail.com">varixialbs@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="HomeContactRight">
            <div className="ContactForm">
              <form onSubmit={handleSubmit}>
                <div className={`ContactField ${errors.name ? "error" : ""}`}>
                  <LuUser className="fieldIcon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="errorText">{errors.name}</span>
                  )}
                </div>
                <div className={`ContactField ${errors.email ? "error" : ""}`}>
                  <LuMail className="fieldIcon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="errorText">{errors.email}</span>
                  )}
                </div>
                <div className={`ContactField ${errors.phone ? "error" : ""}`}>
                  <LuPhoneCall className="fieldIcon" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="errorText">{errors.phone}</span>
                  )}
                </div>
                <div className="ContactField selectField">
                  <div
                   ref={dropdownRef}
                    className={`customSelect ${isDropdownOpen ? "open" : ""}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <div className="selectedOption">
                      {formData.subject || "Select a Service"}
                    </div>
                    <LuChevronDown className="selectArrow" />
                    {isDropdownOpen && (
                      <ul className="dropdownMenu">
                        {servicesList.map((service, i) => (
                          <li
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setFormData({ ...formData, subject: service });
                              setIsDropdownOpen(false);
                            }}
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                ;
                <div className="ContactField textareaField">
                  <LuPen className="fieldIcon" />
                  <textarea
                    name="message"
                    placeholder="How can we help you? Feel free to get in touch!"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="ContactBtn">
                  <button type="submit">
                    <LuSend />
                    <p>Get in Touch</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="ContactMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3062.378061272568!2d76.37095207503427!3d10.230265989887211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEzJzQ5LjAiTiA3NsKwMjInMjQuNyJF!5e1!3m2!1sen!2sin!4v1762859513771!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeContact;
