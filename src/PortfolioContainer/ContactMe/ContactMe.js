import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import axios from "axios";
import { toast } from "react-toastify";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
 

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let data = {
  //       name,
  //       email,
  //       message,
  //     };
  //     setBool(true);
  //     const res = await axios.post(`/contact`, data);
  //     if (name.length === 0 || email.length === 0 || message.length === 0) {
  //       setBanner(res.data.msg);
  //       toast.error(res.data.msg);
  //       setBool(false);
  //     } else if (res.status === 200) {
  //       setBanner(res.data.msg);
  //       toast.success(res.data.msg);
  //       setBool(false);

  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const submitForm = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xeqwnakb', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
    // setBool(false);
    if(res.ok){
      setName("");
      setEmail("");
      setMessage("");      
      alert("Thank you for reaching out!")
      // setBool(true);
    }else{
      // setBool(false);
      alert("Something went wrong please check your info")
    }
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation sequence={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href='https://www.linkedin.com/in/lauren-waknin/' target="_blank" rel="noreferrer">
              <i className='fa fa-linkedin'></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}