import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";


const Resume = (props) => {
  /* STATES */  
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {/* {props.fromDate && props.toDate ? ( */}
          {props.toDate ? (

            <div className="heading-date">
              {/* {props.fromDate + "-" + props.toDate} */}
              {props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-link">
          <a href='props.link'>{props.link ? props.link : ""}</a>
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //programming skills 
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 60 },
    { skill: "Redux", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "PostgreSQL", ratingPercentage: 90 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Riding Buddies App",
    //   duration: { fromDate: "12/2022", toDate: "01/2023" },
      link: "https://riding-buddy-main.onrender.com",
      description:
        "An appliaction that allows motorcycle users to connect with each other in order to ride together.",
      subHeading: "Technologies Used: Leaflet API, JavaScript, React JS, JWT, MUI",
    },
    {
      title: "Budget Management App ",
    //   duration: { fromDate: "11/2022", toDate: "12/2022" },
      link: "https://budget-app-kzi6.onrender.com",
      description:
        "An application that allows the user to manage their monthly budget.",
      subHeading:
        "Technologies Used:  JasvaScript, React JS,  Express Js, Node Js, Bootstrap",
    },
    {
      title: "Drawing App ",
    //   duration: { fromDate: "10/2022", toDate: "11/2022" },
      link: "https://github.com/LaurenWaknin/Drawing-App",
      description:
        "Drawing Application with various tools.",
      subHeading:
        "Technologies Used: JavaScript, HTML, CSS, P5.js",
    },
    {
      title: "Collect Coins Game ",
    //   duration: { fromDate: "10/2022", toDate: "11/2022" },
      link: "https://github.com/LaurenWaknin/Coin-game",
      description:
        "Game where the goal is to collect as many coins possible without plumeting into canyons.",
      subHeading:
        "Technologies Used: JavaScript, HTML, CSS, P5.js",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Developers Institute"}
        subHeading={"Full Stack Web Development, JavaScript program"}
        // fromDate={"2022"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Goldsmiths, University of London"}
        subHeading={"BSc Computer Science"}
        // fromDate={"2020"}
        toDate={"Ongoing"}
      />
      <ResumeHeading
        heading={"Automotive Mechanics "}
        subHeading={"West Island Career Center"}
        // fromDate={"2014"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        {/* <ResumeHeading
          heading={"Developers Institute"}
          subHeading={"TEACHER ASSISTANT"}
          // fromDate={"2023"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a Teacher Assistant 
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Leading programming exercises and working directly with students to help guide them through a rigorous, transformational journey.
          </span>
          <br />
          <span className="resume-description-text">
            Managing student pairings and groupings and providing guidance to team projects.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            I prepare and make meetups for Developers Institute.
          </span>
          <br />
        </div> */}
        
        <ResumeHeading
          heading={"Developers Institute"}
          subHeading={"TEACHER ASSISTANT"}
          // fromDate={"2023"}
          toDate={"Present"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            Currently working as a Teacher Assistant 
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Leading programming exercises and working directly with students to help guide them through a rigorous and transformational journey.
          </span>
          <br />
          <span className="resume-description-text">
            - Managing student pairings and groupings and providing guidance to team projects.{" "}
          </span>
          <br />
          {/* <span className="resume-description-text">
            I prepare and make meetups for Developers Institute.
          </span>
          <br /> */}
        </div><br/>
        <ResumeHeading
          heading={"Philip Morris Ltd"}
          subHeading={"EXTERNAL AFFAIRS EXECUTIVE"}
          // fromDate={"2023"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Managed grant requests; assisted in managing
            corporate affairs and communications budget.
          </span>
        </div>
        {/* <div className="experience-description"> */}
          {/* <span className="resume-description-text">
            Procurement: Created purchase requisitions; coordinated with vendors;
            validated invoices; managed account payable.
          </span>
          <br /> */}
          <span className="resume-description-text">
            - Organized events; scheduled event halls; coordinated with staff
            to optimize availability; dealt with unexpected issues.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Contributed to corporate communication campaigns.
          </span>
          <br />
        {/* </div> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          link={projectsDetails.link}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        //   fromDate={projectsDetails.duration.fromDate}
        //   toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, I also love to teach people what I know simply because I enjoy sharing."
      />
      <ResumeHeading
        heading="Brazilian Jiu-Jitsu"
        description="I love the discipline that BJJ instills upon me, not to mention it keeps me healthy and fit."
      />
      <ResumeHeading
        heading="Motorcycles"
        description="Riding a motorcycle creates a sense of excitement, while also bringing about an air of calm to the activity. It is an experience that I enjoy solo, but also one that I enjoy with other motorcycle riders."
      />
      <ResumeHeading
        heading="Photography"
        description="Photographs help us share our memories with others. One of my favorite weekend pastimes, is taking a hike with my dog Buddy and capturing spontaneous photos of him. Check out the Instagram icon below. (He is a mini influencer 🐶) "      
      />
      <a style={{color: '#ff5823'}} href='https://www.instagram.com/budbud_the_prince/'>
        <i className='fa fa-instagram'></i>
      </a> 
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="bullet logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;