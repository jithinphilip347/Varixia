"use client";

import React, { useState } from "react";
import {
  LuPhoneCall,
  LuMail,
  LuMapPin,
  LuSend,
  LuUser,
  LuInfo,
  LuPen,
} from "react-icons/lu";
// import MapEmbed from "./MapEmbed";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
    }
  };

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
            <div className="HomeContactDec">
              <p>
              We specialize in Web Development, Software Development, <br />
              and Digital Marketing — building brands for the modern web.
              </p>
            </div>
            <div className="HomeContactAdressBox">
          <div className="AdressBox">
            <div className="Iconbox">
              <LuMapPin />
            </div>
            <div className="TextBox">
              <a
                href="https://www.google.com/maps/search/First+Floor+Vijo+Tower+Karukutty,+Erankulam,+Kochi,+India/@10.1000543,76.177041,45026m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
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
                  {errors.name && <span className="errorText">{errors.name}</span>}
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
                  {errors.email && <span className="errorText">{errors.email}</span>}
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
                  {errors.phone && <span className="errorText">{errors.phone}</span>}
                </div>

                <div className="ContactField">
                  <LuInfo className="fieldIcon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.245655245865!2d54.37655467535857!3d24.476943878181537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e671d78753635%3A0x69fbce3421eedcf8!2sKalavardhini%20Arts%20Center%20L.L.C!5e0!3m2!1sen!2sin!4v1758427273722!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* <MapEmbed /> */}
    </div>
  );
};

export default HomeContact;
