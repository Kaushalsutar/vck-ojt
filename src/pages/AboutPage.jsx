import React from 'react';
import Header from '../components/Header/Header';
import './Aboutpage.css'; // Import CSS here

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="about-container">

        {/* Div For Creating Flex Items */}
        <div id="aboutcontent">

          <section>
            <h2>About Vivekanand College Kolhapur</h2>
            <p>
              Established with the noble aim of providing quality education rooted in Indian values, Vivekanand College stands as a beacon of learning, discipline, and holistic development. Inspired by the teachings of Swami Vivekananda, our institution is committed to nurturing students into responsible citizens and enlightened individuals.
            </p>
          </section><hr/>

          <section>
            <h3>🌱 Our Growth</h3>
            <p>
              VCK College began its journey in a modest setting with a small but dedicated group of educators and a few enthusiastic students. Over the decades, it has evolved into a premier institution in the region. Today, we boast a vibrant campus with thousands of students across various streams—Science, Commerce, Arts, and Professional Courses.
            </p>
            <p>
              Through continuous academic excellence, a strong focus on research, and industry collaborations, the college has grown both in reputation and infrastructure. From a handful of classrooms to a fully-fledged academic hub, our journey reflects the power of vision, perseverance, and community support.
            </p>
          </section><hr />

          <section>
            <h3>🏢 Campus Facilities</h3>
            <p>
              Our sprawling campus includes high-tech science and computer laboratories, a fully digitized and resource-rich library, smart classrooms, auditoriums, seminar halls, and eco-friendly infrastructure. Recreational facilities such as a gymnasium, sports grounds, canteen, and student lounges add to a holistic learning environment.
            </p>
          </section><hr />

          <section>
            <h3>🎓 Experienced Faculty</h3>
            <p>
              Our faculty comprises a diverse group of scholars, experienced educators, and industry professionals. They not only deliver academic content but also mentor students, guide research projects, and engage in curriculum development to keep up with global standards.
            </p>
          </section><hr />

          <section>
            <h3>🤝 Dedicated Staff</h3>
            <p>
              Supporting the academic framework is a team of diligent non-teaching staff who ensure smooth day-to-day operations. From administration to technical support, their commitment is vital to creating a seamless experience for students and faculty alike.
            </p>
          </section><hr />

          <section>
            <h3>🎯 Mission & Vision</h3>
            <p>
              <strong>Mission:</strong> To empower students through value-based education and holistic development, preparing them to contribute meaningfully to society.<br />
              <strong>Vision:</strong> To become a center of academic excellence recognized globally for innovation, inclusiveness, and impact.
            </p>
          </section><hr />

          <section>
            <h3>🏆 Achievements</h3>
            <p>
              Over the years, VCK College has earned several accolades, including NAAC accreditation, university top ranks, inter-collegiate competition victories, and recognition in research and innovation. Our alumni have gone on to excel in diverse fields, making us proud across academic, corporate, and public service domains.
            </p>
          </section><hr />

        </div>
        {/* Div For Creating Flex Items */}

      </div>
    </>
  );
};

export default AboutPage;
