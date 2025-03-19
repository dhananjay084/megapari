import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button ,Table,Card,Accordion} from "react-bootstrap";
import cricketImage from "./assets/banner-image.webp";
import aboutImage from './assets/main-1.webp';
import StartImage from './assets/megapari-registration.webp';
import Logo from './assets/logo-sm.webp'
import { FaFacebook, FaTwitter, FaInstagram, FaVk } from "react-icons/fa";  
import './App.css';

function CustomNavbar() {
  const FAQs = [
    {
      question: "Is Megapari Legal to play in India?",
      answer: "Yes, Megapari is legal in India. You don’t have to worry, because Megapari is a reliable and safe bookmaker.",
    },
    {
      question: "Is Megapari accepting deposits in rupees?",
      answer: "Yes, Indian users can deposit funds in Indian Rupees. At the same time, there is no commission, and the minimum deposit is INR 75.",
    },
    {
      question: "Can I register multiple accounts in Megapari?",
      answer: "No, it is prohibited by the rules of the Megapari betting company. One person can only have one account. Otherwise, your account will be blocked and a ban on creating a new one will be placed.",
    },
    {
      question: "When was Megapari Launched?",
      answer: "The Megapari betting company started its activities in 2019.",
    },
  ];
  const handleClick = () => {
    window.location.href = "https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration"; 
  };

  
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="fw-bold text-white">
          MEGA<span className="text-primary">:</span>
          <span className="text-danger">PARI</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Link href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white">Registration</Nav.Link>
            <Nav.Link href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white">Megapari App</Nav.Link>
            <Nav.Link href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white">Bonuses</Nav.Link>
            <Nav.Link href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white">Support</Nav.Link>
            <Nav.Link href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white">Promo Code</Nav.Link>
            <Nav.Link href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white">Casino</Nav.Link>
          </Nav>

          {/* Buttons */}
          <div className="d-flex gap-2">
              <Button variant="primary" className="fw-bold" onClick={handleClick}>SIGN UP</Button>
              <Button variant="danger" className="fw-bold" onClick={handleClick}>DOWNLOAD APP</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="banner-section text-white py-5">
    <Container>
      <Row className="align-items-center">
        {/* Left Content */}
        <Col lg={6} className="text-start">
          <h1 className="fw-bold">
            Megapari <span className="highlight">India</span> – Official Website for <br />
            Betting and Online Casino
          </h1>
          <p className="mt-3">
            <strong>Megapari</strong> is one of the major bookmakers and a new one for sports betting players in India. 
            We offer our users an extensive selection of bets on sports and other events, best odds, and betting lines, 
            as well as online casinos with the live section. 
            <strong> Start betting on Megapari now and get up to 30,000 INR bonus on your first deposit!</strong>
          </p>
          <p>
            Use promo code <strong>BESTBONUS</strong> and get +30% to the main bonus on your first deposit. Summary is 130% up to 39,000 INR first deposit bonus.
          </p>
          <Button variant="primary" className="fw-bold px-4 py-2" onClick={handleClick}>
            START BETTING
          </Button>
        </Col>

        {/* Right Image */}
        <Col lg={6} className="text-center">
          <img onClick={handleClick} src={cricketImage} alt="Cricket Player" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </div>
  <div className="general-info-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Text Content */}
          <Col lg={6} className="text-start">
            <h2 className="fw-bold">Megapari India Betting Company General Information</h2>
            <p className="mt-3">
              <strong>Megapari</strong> betting site is a young and progressive company, which started its work in 2019. In just a few years, more than 400,000 people have become players, while their number continues to grow rapidly. Megapari is operated by a Cypriot company Zavbin Ltd and operates under a license issued in Curacao.
            </p>
            <p className="fw-bold">
              Megapari India users are allowed to bet in prematch and live, place bets in the sweepstakes, and play in various types of casino games.
            </p>
            <p>
              The Megapari India website has more than twenty versions in different languages. According to the company’s data, the site is used by more than 400 thousand visitors. 
              <a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="read-more"> Read More.</a>
            </p>
            <Button className="join-btn mt-3 mb-2" onClick={handleClick}>JOIN US</Button>
          </Col>

          {/* Right Image */}
          <Col lg={6} className="text-center">
            <div className="image-container">
              <img onClick={handleClick} src={aboutImage} alt="About Megapari" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className="py-4">
      <div className="table-responsive">
        <Table bordered className="company-table">
          <tbody>
            <tr>
              <td><strong>Brand Name</strong></td>
              <td>Megapari</td>
            </tr>
            <tr>
              <td><strong>Year Founded</strong></td>
              <td>2019</td>
            </tr>
            <tr>
              <td><strong>License</strong></td>
              <td>Curacao</td>
            </tr>
            <tr>
              <td><strong>Services</strong></td>
              <td>Sports Betting, Live Betting, Casino, Live Casino.</td>
            </tr>
            <tr>
              <td><strong>Software</strong></td>
              <td>Android, iOS, Mobile Website</td>
            </tr>
            <tr>
              <td><strong>Languages</strong></td>
              <td>English, Hindi, Bengali, etc.</td>
            </tr>
            <tr>
              <td><strong>Min. Deposit</strong></td>
              <td>₹75</td>
            </tr>
            <tr>
              <td><strong>Max. Deposit</strong></td>
              <td>₹17,000</td>
            </tr>
            <tr>
              <td><strong>Welcome Bonuses</strong></td>
              <td>100% up to 30,000 INR (130% up to 39,000 INR using promo code)</td>
            </tr>
            <tr>
              <td><strong>Support Email</strong></td>
              <td><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="email-link">support@megapari.com</a></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
    <Container className="registration-container py-5">
      <Row className="align-items-center">
        {/* Left Side - Image Section */}
        <Col md={5} className="text-center">
          <Card className="registration-card">
            <img
            onClick={handleClick}
              src={StartImage} // Replace with actual image
              alt="Registration Form"
              className="img-fluid"
            />
          </Card>
        </Col>

        {/* Right Side - Registration Steps */}
        <Col md={7}>
          <h2 className="registration-heading">Registration at Megapari in 6 steps</h2>
          <p>
            To fully use all the functions of Megapari, you need to go through a simple
            registration process. It won’t take you a lot of time.
          </p>

          <ol className="registration-steps">
            <li>First, click the “Register” button in the upper right corner.</li>
            <li>You will be prompted to register very quickly by phone or email.</li>
            <li>Before you start entering your details, you should decide on a bonus option.</li>
            <li>Select your country and city from the list.</li>
            <li>
              Enter your desired currency, email, name, and phone number. Finally, set a
              password and accept the terms.
            </li>
            <li>
              After entering the security code, you will receive an email containing an
              activation link.
            </li>
          </ol>

          {/* Age Restriction Notice */}
          <div className="age-restriction">
            <p>You must be at least 18 years old to start betting on Megapari.</p>
          </div>

          {/* Register Button */}
          <Button className="register-button" onClick={handleClick}>REGISTER NOW</Button>
        </Col>
      </Row>
    </Container>
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">Megapari FAQ</h2>
      <Accordion>
        {FAQs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between">
          {/* Left Section */}
          <Col md={4}>
            <img
            onClick={handleClick}
              src={Logo} // Replace with your logo path
              alt="MegaPari Logo"
              className="mb-3"
              width="200"
            />
            <p>Copyright © 2019 - 2022</p>
            <p>«Megaparibet.in»</p>
            <p>All rights reserved.</p>
            <p>Licensed by Curacao.</p>
          </Col>

          {/* Middle Section */}
          <Col md={4} className="text-center">
            <h5>Main Information</h5>
            <ul className="list-unstyled">
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">Terms and Conditions</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">Responsible Gaming</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">Anti Fraud</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">License</a></li>
            </ul>
          </Col>

          {/* Right Section */}
          <Col md={4} className="text-center">
            <h5>For help with addiction</h5>
            <ul className="list-unstyled">
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">Gambling Therapy</a></li>
              <li><a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white text-decoration-none">BeGambleAware</a></li>
            </ul>
            {/* Social Icons */}
            <div className="mt-3">
              <a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="https://refpaiozdg.top/L?tag=d_4197859m_62059c_&site=4197859&ad=62059&r=registration" className="text-white"><FaVk size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll to Top Button */}
      <div className="scroll-to-top">
        <button  onClick={handleClick} className="btn btn-light rounded-circle">
          ↑
        </button>
      </div>
    </footer>
  </>
  );
}

export default CustomNavbar;
