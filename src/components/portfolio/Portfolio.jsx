import React from "react";
import "./Portfolio.css";
import COT from "../../assets/cot.png";
import BrainGym from "../../assets/brainGym.png";
import Go from "../../assets/gov.png";
import BLOG from "../../assets/blogapp.png";
import MedApp from "../../assets/medapp.mp4";
import quiz from "../../assets/quiz.png";

const data = [
  {
    id: 1,
    image: quiz,
    video: false,
    title: "MERNQuiz",
    description:
      "Welcome to MERNQuiz, the ultimate platform for testing your knowledge and skills in the MERN stack. Our quizzes cover everything from MongoDB, Express, React, and Node.js to help you improve your understanding of this popular web development technology stack. With MERNQuiz, you can test yourself with a range of questions and scenarios to see how well you know the MERN stack. Our platform is perfect for beginners and experts alike who want to test their knowledge and learn new things about this technology stack. Join our community of learners and become a MERN stack pro today!",
    code: "https://github.com/wafabenmiloud/quiz",
    demo: "https://quiz-three-ruby.vercel.app",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
  },
  {
    id: 2,
    image: BrainGym,
    title: "CourseBridge",
    description:
      "CourseBridge is a platform designed to bridge the gap between students and the latest courses and industry news. With CourseBridge, you can explore a vast library of courses, connect with industry experts, and stay up-to-date with the latest trends and developments.",
    code: "https://github.com/wafabenmiloud/brainGym",
    demo: "https://brain-gym.vercel.app/",
    skills: ["HTML", "CSS", "React JS"],
    video: false,
  },
  {
    id: 3,
    image: Go,
    title: "Govact",
    description:
      "Hammam Lif Connect is a community-driven platform that aims to connect the residents of Hammam Lif with their local municipality. Our mission is to provide a space where residents can voice their concerns, ideas, and feedback about the town, and work together with the municipality to create positive change. Whether you're a long-time resident or a newcomer to the area, Hammam Lif Connect welcomes everyone to join the conversation and help shape the future of our town.",
    code: "https://github.com/wafabenmiloud/Govact",
    demo: "https://govact.vercel.app/",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
    video: false,
  },
  {
    id: 4,
    image: BLOG,
    video: false,
    title: "CodeQuery",
    description:
      "CodeQuery is a platform where programmers from all around the world can come together to share and solve programming challenges, ask and answer questions, and collaborate on projects. Our platform is designed to be a one-stop-shop for programmers of all levels, from beginners to experts, to connect with one another and learn new skills. Whether you're looking to improve your coding abilities, find solutions to difficult problems, or simply connect with like-minded individuals, CodeQuery has everything you need to take your programming skills to the next level. So come join us and become a part of the CodeQuery community today!",
    code: "https://github.com/wafabenmiloud/blogApp",
    demo: "https://blog-app-nu-seven.vercel.app/",
    skills: ["HTML", "CSS", "React JS", "Node JS", "MongoDB"],
  },
  {
    id: 5,
    image: MedApp,
    video: true,
    title: "HealthBook.",
    description:
      "HealthBook is a comprehensive appointment booking platform that connects patients with their preferred doctors. With HealthBook, you can easily book appointments with your doctors and manage your healthcare needs. Whether you need a routine check-up or a specialist consultation, HealthBook makes it easy to find the right doctor and schedule an appointment that works for you. With its user-friendly interface, HealthBook simplifies the booking process, saves you time, and ensures that you receive the best healthcare services available. Join HealthBook today and take control of your healthcare journey.",
    code: "https://github.com/wafabenmiloud/medapp",
    demo: "",
    skills: ["Flutter", "Node JS", "MongoDB"],
  },
  {
    id: 6,
    image: COT,
    title: "IoT Innovate",
    description:
      "Welcome to IoT Innovate, the collaborative hub for IoT developers around the world. Our platform is designed to bring together the best minds in IoT development to collaborate, innovate, and create cutting-edge IoT solutions that solve real-world problems. Whether you're a seasoned IoT developer or just starting out, IoT Innovate is the go-to destination for networking, collaborating, and building the next generation of IoT solutions. Join our community today and be a part of the IoT revolution!",
    code: "https://github.com/wafabenmiloud/cot",
    demo: "https://cot.vercel.app/",
    skills: ["HTML", "CSS"],
    video: false,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="portfolio__container">
        {data.map(
          ({ id, image, title, description, code, demo, skills, video }) => {
            return (
              <div key={id} className="card">
                <div className="img">
                  {!video ? (
                    <img src={image} />
                  ) : (
                    <video controls>
                      <source src={image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="title__content">
                  <h3>{title}</h3>
                  <hr className="divider" />
                </div>
                <p className="desc__content">{description}</p>
                <div>
                  <ul className="tags">
                    {skills.map((skill, index) => {
                      return (
                        <li className="tag" key={index}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <ul className="content">
                  <a href={code} className="btn" target="_blank">
                    Code Source
                  </a>
                  <a href={demo} className="btn" target="_blank">
                    Live Demo
                  </a>
                </ul>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
