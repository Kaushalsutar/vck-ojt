import React from "react";
import Header from "../components/Header/Header";

const CoursePage = () => {
  return (
    <div className="course-page">
      <Header />

      <main className="main-section">
        <div className="info-box">
          {/* Campus Video */}
          <div className="video-container">
            <h1>Campus Tour Video</h1>
            <p>Take a virtual tour of our campus and explore the vibrant environment of Vivekanand College.</p>
            <video src="/Videos/college-tour.mp4" type="video/mp4" width="100%" height="auto" controls>
              Your browser does not support the video tag.
            </video>
          </div>

          <hr />

          {/* Courses Section */}
          <h1 className="section-title">Our Courses</h1>
          <p className="subtitle">Explore the diverse programs offered at Vivekanand College.</p>

          {/* Courses */}
          <div className="courses-container">
            <div className="course-category">
              <h2>Arts Faculty (B.A.)</h2>
              <ul>
                <li>English, Marathi, Hindi</li>
                <li>History, Geography, Sociology</li>
                <li>Political Science, Economics</li>
                <li>Home Science</li>
              </ul>
            </div>

            <div className="course-category">
              <h2>Commerce Faculty</h2>
              <ul>
                <li>B.Com (General & Honours)</li>
                <li>M.Com (Advanced Accountancy, Costing, Business Admin)</li>
                <li>BBA (Bachelor of Business Administration)</li>
                <li>BCA (Bachelor of Computer Applications)</li>
              </ul>
            </div>

            <div className="course-category">
              <h2>Science Faculty</h2>
              <ul>
                <li>B.Sc. (Computer Science, Microbiology, Biotech, Zoology, Botany)</li>
                <li>B.Sc. (Physics, Chemistry, Mathematics, Statistics, Electronics)</li>
                <li>B.Sc. (Environmental Science)</li>
                <li>M.Sc. (Physics, Organic Chemistry, Microbiology, Computer Science, Statistics)</li>
              </ul>
            </div>

            <div className="course-category">
              <h2>Postgraduate Programs</h2>
              <ul>
                <li>M.A. (History, Geography)</li>
                <li>M.Com (Advanced & Cost Accounting)</li>
                <li>M.Sc. (Physics, Organic Chemistry, Microbiology, etc.)</li>
                <li>MCA (Master of Computer Applications)</li>
                <li>MBA (Master of Business Administration)</li>
                <li>M.Lib. (Library & Information Science)</li>
              </ul>
            </div>

            <div className="course-category">
              <h2>Vocational & B.Voc Programs</h2>
              <ul>
                <li>B.Voc. in Foundry Technology</li>
                <li>B.Voc. in Graphic Design & Animation</li>
                <li>B.Voc. in Photography & Videography</li>
                <li>Diploma / Advanced Diploma in respective streams</li>
              </ul>
            </div>

            <div className="course-category">
              <h2>Diplomas & Certificate Courses</h2>
              <ul>
                <li>Diploma in Foundry Technology</li>
                <li>PG Diploma in Translation (Hindi)</li>
                <li>PG Diploma in Geoinformatics</li>
                <li>Mass Communication</li>
                <li>Applied Biotechnology</li>
                <li>Foreign Language Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
