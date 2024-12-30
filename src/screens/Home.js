import React from "react";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Fade } from "react-awesome-reveal";


function Home() {
    const boxes = [
        { id: 1, text: "Draw Chemical Compounds" },
        { id: 2, text: "Insert Them" },
        { id: 3, text: "Generate Transformations" },
      ];
      const steps = [
        {
          id: 1,
          text: "Draw the starting chemical compound and ending chemical compound",
          icon: "fas fa-pencil-alt", // Icon for drawing
        },
        {
          id: 2,
          text: "Insert drown starting chemical compound and ending chemical compound into the application",
          icon: "fas fa-upload", // Icon for inserting/uploading
        },
        {
          id: 3,
          text: "Generate Transformation",
          icon: "fas fa-sync-alt", // Icon for generating transformations
        },
        {
          id: 4,
          text: "Download it as any format",
          icon: "fas fa-download", // Icon for downloading
        },
      ];
    
  return (
  <div>
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
        <li><a href="#home">Home</a></li>
    <li><a href="#about-us">About Us</a></li>
    <li><a href="#how-to-use">How to use</a></li>
    <li><a href="#contact">Contacts</a></li>
    

        </ul>
        <button className="login-button"><b>Login</b></button>


      </nav>
      
      {/* Fixed Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1 className="title">Chem 
          <b style={{ color: "black" }}>IQ</b>
          </h1>
          <p className="subtitle">Where the <b style={{ color: "black" }}>Oraganic chemistry </b>meets The <b style={{ color: "black" }}>AI</b></p>
          <button className="signup-button"><b>Sign Up</b></button>
        </div>

        {/* Buttons */}
        
      </div>
      </div>

      <div id="about-us" className="why-us-section">
  <h1>About <b style={{ color: "black" }}>Us </b></h1>
  <h5>
    ChemIQ is a cutting-edge Generative AI application designed to revolutionize organic chemistry. 
    It empowers users to effortlessly generate detailed and accurate organic chemistry transformations as visual images by simply providing the starting and ending chemical compounds.
    <br />
    This innovative tool eliminates the need for manual drawing or complex software, making the process faster, more accessible, and highly efficient.
    By leveraging advanced AI algorithms, ChemIQ ensures precision and consistency in generating chemical reaction pathways,
    bridging the gap between theoretical chemistry and practical visualization.
  </h5>

  {/* Mission and Vision Section */}
  <div className="mission-vision">
    <div className="mission">
      <h3>Mission</h3>
      <p>
        Our mission is to simplify the complexities of organic chemistry by providing 
        innovative AI-driven solutions that enhance learning, research, and practical application. 
        We aim to make chemistry accessible and intuitive for professionals and students alike.
      </p>
    </div>
    <div className="divider"></div>
    <div className="vision">
      <h3>Vision</h3>
      <p>
        Our vision is to be the global leader in AI-assisted chemical research, empowering 
        breakthroughs in science and technology. We envision a world where advanced tools like ChemIQ bridge the gap 
        between theoretical knowledge and real-world problem-solving.
      </p>
    </div>
  </div>

  {/* Existing Bulb Container */}
  <div className="bulb-container">
    {boxes.map((box) => (
      <div key={box.id} className="bulb">
        <p>{box.text}</p>
      </div>
    ))}
  </div>
</div>


<div id="how-to-use" className="how-to-use-section">
      <h1>
        How to <b style={{ color: "black" }}>Use</b>
      </h1>
      <h5>ChemIQ is designed with user-friendliness in mind, making it accessible and easy to use for everyone, 
        regardless of their expertise in chemistry. We provide an intuitive drawing tool that allows users to create chemical compound structures effortlessly. With this tool, users can accurately represent their chemical compounds without the need for advanced software or technical skills. The drawing interface is simple, interactive, and optimized for both beginners and experts, enabling seamless creation of chemical diagrams. Whether you're a student, researcher, or professional, 
        ChemIQ empowers you to visualize and work with chemical structures quickly and efficiently.
      </h5>
      <div className="steps-container">
        {steps.map((step, index) => (
          <Fade key={step.id} delay={index * 500}> {/* Delays each step's animation */}
            <div className="step">
              <i className={step.icon}></i>
              <p>{step.text}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>

    
    </div>
  );
}

export default Home;
