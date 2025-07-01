import React, { useState } from "react";
import Header from "../components/Header/Header";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Admission Submitted\n
Name: ${formData.name}
Email: ${formData.email}
DOB: ${formData.dob}
Mobile: ${formData.mobile}`);
  };

  return (
    <div className="admission-page">
      <Header />
      <div className="form-container">
        <h2>Admission Information</h2>
        <p>
          Vivekanand College Kolhapur offers a wide range of UG, PG, and vocational programs. Admissions are primarily merit-based. Some PG and professional courses may require entrance exams.
        </p>

        <h3>📌 Eligibility Criteria:</h3>
        <ul>
          <li><strong>UG Programs:</strong> Passed 10+2 from a recognized board (Science/Commerce/Arts depending on the course).</li>
          <li><strong>PG Programs:</strong> Relevant Bachelor’s degree from a recognized university.</li>
          <li><strong>B.Voc / Diplomas:</strong> 10+2 pass in any stream or ITI equivalent.</li>
        </ul>

        <h3>📝 Admission Process:</h3>
        <ol>
          <li>Fill the online admission form.</li>
          <li>Upload required documents (10th, 12th marksheets, ID proof, etc.).</li>
          <li>Pay application fee (if applicable).</li>
          <li>Wait for merit list and further instructions.</li>
        </ol>

        <hr />

        <h2>Student Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="dob">Date of Birth:</label>
          <input
            id="dob"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <label htmlFor="mobile">Mobile No.:</label>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
