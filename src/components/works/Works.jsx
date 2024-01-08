import { useRef } from "react";
import "./works.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "shopping site with ReactJS & API ",
    img: "/shopping.PNG",
    desc: "The project is a modern and interactive e-commerce shopping site built using React.js, API integration, and local storage. It offers users a seamless and engaging online shopping experience with a range of features designed to enhance usability and functionality.",
    demo:"https://shoppinghm.netlify.app/",
    repo:"https://github.com/Hafed112/shopping/tree/main",
  },
  {
    id: 2,
    title: "ReactJS & Material-UI dashboard",
    img: "/dashboard.PNG",
    desc: "Creating a dashboard with React.js and Material-UI involves building a user interface that displays important data and insights in a visually appealing and organized manner.",
    demo:"https://adminhm.netlify.app",
    repo:"https://github.com/Hafed112/Admin_Dashboard",
  },
  {
    id: 3,
    title: "Node JS, ExpressJS, MongoDB AND JWT authentification App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Building a shopping app with Node.js, JWT authentication, Express.js middleware, and MongoDB involves creating a backend server that handles user authentication, product management, and order processing.",
    repo:"https://github.com/Hafed112/api-",
  },
  {
    id: 4,
    title: "TypeScript Pomodoro Clock",
    img: "/click.PNG",
    desc: "Building a TypeScript Pomodoro Clock project! This web application is built using TypeScript, providing users with a Pomodoro timer to help manage work and break sessions efficiently. The app features a user-friendly interface, customizable session lengths, and a visually appealing design to enhance your productivity.",
    demo:"https://mellow-manatee-5a1146.netlify.app/",
    repo:"https://github.com/Hafed112/build_25_5_clock",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="projects">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
              <a href={item.demo} target="_blank" rel="noopener noreferrer" 
              className={`${!item.demo ?'disabled-link' :''}`}>See Demo</a>
              <a href={item.repo} target="_blank" rel="noopener noreferrer">Repo</a>            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const ref = useRef();

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;