
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  oracle,
  bosch,
  greyThink,
  java,
  cplus,
  ojet,
  knockout,
  selenium,
  jenkins,
  kafka,
  tictactoe,
  actionrecog,
  webScraper,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer Engineer",
    icon: creator,
  },
  {
    title: "Data Structure and Algorithm",
    icon: creator
  }, 
  {
    title: "System Design",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name:"Java",
    icon: java,
  },
  { name:"C++",
    icon: cplus
    },
    { name:"Apache Kafka",
    icon: kafka
    },
    { name:"Selenium",
    icon: selenium
    },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name:"ojet",
    icon: ojet,
  },
  {
    name:"selenium",
    icon: selenium,
  },
  {
    name: "jenkins",
    icon: jenkins
  },
  {
    name:"knockout",
    icon: knockout,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Grey Think Labs, New Delhi India",
    icon: greyThink,
    iconBg: "#E6DEDD",
    date: "Mar 2019 - Apr 2019",
    points: [
      "Added AMP pages to the website,removed generator tag ,increased the server response by 3%.",
      "Fixed the bugs on website like new24 using Wordpress"
    ],
  },
  {
    title: "SOFTWARE DEVELOPMENT INTERN",
    company_name: "ROBERT BOSCH BUSINESS AND ENGINEERING SOLUTIONS",
    icon: bosch,
    iconBg: "#383E56",
    date: "Jan 2020 - May 2020",
    points: [
      "Worked on Software Defined Network(SDN) for enabling automatic configuration of network devices using Netconf and Yang.",
      "Involved in the R&D for the concept for using  SDN in the Juniper switches"
    ],
  },
  {
    title: "MEMBER OF TECHNICAL STAFF(IC2)",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Present",
    points: [
      "Developing and maintaining web applications using OJET, knockout.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "DM-Kafka: Contributed in developing Notification component Dm-Kafka in BRM for billing and charging events.",
      "BRM RSM : Developed rest-api for BRM Rest Service Mananger Rest ends. Contributed in adopting TMF Forum Standard Requirements for the REST Api.",
      "Billingcare: Contribute in enhancing the BRM UI for customer creation and billing. Tech : Java, Javascript, OJET, Knockout.js",
      "Test Automation and Jenkins: Created the multinode pipeline for the team for triggering personal build and automated the test scenario using Selenium java"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was clubbed in with Shubham on a critical project with a tight deadline. I was surprised by the maturity and technical abilities he showed despite being a relative newbie in the industry. He was also quick to grasp many challenging aspects of the project. He would be an asset to any team.",
    name: "Abil George",
    designation: "Principle Engineer at Oracle",
    company: "Oracle",
    image: oracle,
  }
];

const projects = [
  {
    name: "Tic Tac Toe",
    description:
      "Web-based classic fun game which runs on web and make the player play the tictactoe and announces the winner on the go, made using react state hooks and deployed on AWS EC2 instance using Docker.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "create-react-app",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "green-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/Bunny3/TicTacToe",
  },
  {
    name: "Action Recognition in Sport",
    description:
      "Developed program for action recognition of the player in Tennis from video.Used Deep Learning for the project. Achieved accuracy of 75.8%.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      }
    ],
    image: actionrecog,
    source_code_link: "#",
  },
  {
    name: "SCIBASE",
    description:
      "The project was tracking the lifeline of the researcher of various journal along with their citations details. My part in this project was scraping data from the various journal of IEEE using python.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "WebScraping",
        color: "green-text-gradient",
      }
    ],
    image: webScraper,
    source_code_link: "https://github.com/Bunny3/Web-Scraping",
  },
];

export { services, technologies, experiences, testimonials, projects };