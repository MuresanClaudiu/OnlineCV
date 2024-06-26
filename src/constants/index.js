import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind, 
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pitechIcon,
  linux,
  kubernetes,
  bootstrap,
  mysql,
  postgresql,
  symfony,
  php,
  sqlite,
  flask,
  fastapi,
  django,
  postman,
  python,
  c,
  cpp,
  bash,
  aws,
  gcp,
  votify,
  buyNsell,
  inch,
  cisco,
  ic3,
  fitness,
  dream,
  admindashboard,
  hackerrank,
  awsccp,
  gcpdg,
  pythoncert,
  awsball,
  az900,
  microsoft

} from "../assets";

export const about = "I'm a Junior PHP Developer and a final-year Computer Science student at the Technical University in Cluj Napoca. I'm all about learning new stuff, whether it's tech-related or in the world of science. Technology is my jam, and I'm super excited about it!"
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
    title: "Backend",
    icon: backend,
  },
  // {
  //   title: "DevOps",
  //   icon: web,
  // },
  {
    title: "Frontend",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "symfony",
    icon: symfony,
  },
];

const experiences = [
  {
    title: "Mid Entry PHP Developer",
    company_name: "Pitech Plus",
    icon: pitechIcon,
    iconBg: "#00bfa4",
    date: "April 2024 - present",
    points: [
      "Focusing on Cypress integration and automation test writing.",
      "Gained expertise in message queue systems, particularly RabbitMQ and Azure Service Bus.",
      "Acquired practical skills in managing and deploying applications with Kubernetes.",
    ],
  },
  {
    title: "Junior PHP Developer",
    company_name: "Pitech Plus",
    icon: pitechIcon,
    iconBg: "#00bfa4",
    date: "Oct 2022 - April 2024",
    points: [
      "Worked with Docker to containerize applications, improving portability and scalability.",
      "Utilized ElasticSearch for log management, monitoring, and visualization of application data.",
      "Adopted exclusively to Linux OS (Ubuntu) for day-to-day tasks",
      "Developed new features for projects",
      "Wrote formal tests to ensure code quality.",
    ],
  },
  {
    title: "PHP Developer Intern",
    company_name: "Pitech Plus",
    icon: pitechIcon,
    iconBg: "#00bfa4",
    date: "July 2022 - Oct 2022",
    points: [
      "Built a strong foundation on the fundamentals of OOP, SQL & Symfony",
      "Improved on efficient methods of developing a web application",
      "Insights on industry Standards for web development",
      "Developed a local hotel management project using Symfony and Twig",
    ],
  }
];

const certifications = [
  {
    name:
      "Cisco Networking Academy",
    image: cisco,
    icon: cisco,
  },
  {
    name:
      "Digital Literacy Certification – Certiport",
    image: ic3,
    icon: ic3,
  },
];

const projects = [
  {
    name: "Automotive",
    description:
      "Car brand availability, check ​personalisation, options ​progress saving ​financial plans​.The solution is scalable for 33 different markets with multiple car brands​.",
    tags: [
      {
        name: "backend",
        color: "blue-text-gradient",
      },
      {
        name: "devops",
        color: "green-text-gradient",
      },
      {
        name: "kubernates",
        color: "pink-text-gradient",
      },
    ],
    image: inch,
  },
  {
    name: "Fitness Application",
    description:
      "The application started as a fitness app where you could scan the barcode of any food item using your camera, and all the nutritional details would be saved in your account along with customized meal plans tailored to your preferences.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "heroku",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
  },
  {
    name: "Dream App",
    description:
      "The app tracked the user's sleep hours, stress levels, and daily happiness input, providing insightful charts and statistics monthly or weekly.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "twig",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: dream,
  },
];

export { services, technologies, experiences, certifications, projects };