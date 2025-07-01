import React from "react";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <h2>Contact Vivekanand College, Kolhapur</h2>
        <p>
          Whether you're a prospective student, parent, alumni, or guest — we're here to assist you. Below are the details to help you connect with us effectively.
        </p>

        <hr />
        <section>
          <h3>📍 Campus Address</h3>
          <p>
            Vivekanand College of Technology & Management<br />
            123 Knowledge Avenue,<br />
            Karvir, Kolhapur,<br />
            Maharashtra, India – 416003
          </p>
        </section>

        <hr />
        <section>
          <h3>📧 Email & 📞 Phone</h3>
          <ul>
            <li><strong>General Inquiries:</strong> info@vckcollege.edu</li>
            <li ><strong>Admissions:</strong> admission@vckcollege.edu</li>
            <li><strong>Office Contact:</strong> +91 98765 43210</li>
            <li><strong>Student Support:</strong> +91 91234 56789 (Mon–Fri, 9:30 AM – 5:30 PM)</li>
          </ul>
        </section>

        <hr />
        <section>
          <h3>⏰ Office Hours</h3>
          <p>
            <strong>Monday to Friday:</strong> 9:00 AM – 5:00 PM<br />
            <strong>Saturday:</strong> 9:00 AM – 1:00 PM<br />
            
          </p>
        </section>

        <hr />
        <section>
          <h3>🌐 Official Website & Social Media</h3>
          <ul>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://vivekanandcollege.ac.in/" target="_blank" rel="noreferrer">
                www.vivekanandcollege.ac.in
              </a>
            </li>
            {/* Optionally add social links later */}
            {/* <li><strong>Facebook:</strong> <a href="#">@vckcollege</a></li> */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;