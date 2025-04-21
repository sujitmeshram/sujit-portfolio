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
  jade,
  fendahl, 
  nashtech,
  coursehero,
  gfg
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Freelance Developer",
    icon: mobile,
  },
  {
    title: "Specialed Full Stack Engineer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "GeeksforGeeks",
    icon: gfg,
    iconBg: "#383E56",
    date: "Oct 2020 – May 2021",
    points: [
      "Authored technical articles on programming and computer science topics, reaching over 100,000+ readers across the platform.",
      "Revised and enhanced existing articles by adding in-depth technical explanations, code snippets, and updated examples, resulting in increased page views and improved user engagement.",
    ],
  },
  {
    title: "Programming Tutor",
    company_name: "CourseHero",
    icon: coursehero,
    iconBg: "#E6DEDD",
    date: "May 2021 – Sept 2022",
    points: [
      "Provided one-on-one and group tutoring to 100+ students in programming and helping them to improve their academic performance and conceptual understanding.",
      "Maintained an 88% helpfulness rating from students resulted consistently recognized as a top-rated tutor on the platform.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Fendahl Technology",
    icon: fendahl,
    iconBg: "#383E56",
    date: "Dec 2021 – June 2022",
    points: [
      "Developed scalable and secure WCF web services to extract and manage data as per business requirements of the project.",
      "Tech Used: .NET, C#, WCF Services, ASP.NET Core MVC, Entity Framework, SQL Server, LINQ.",
    ],
  },
  {
    title: "Associate Analyst",
    company_name: "Jade Global",
    icon: jade,
    iconBg: "#E6DEDD",
    date: "Sept 2022 – April 2023",
    points: [
      "Project: BIP report Generation tool\n • Developed a BIP report automation tool that reduced report generation time by 90% through the implementation of a dynamic preselection value feature.\n• Improved operational efficiency and reduced manual effort, leading to estimated annual savings of $2 million for the organization.\n• Tech Used: C#, JavaScript, Python, .NET Core Web APIs, Angular, Entity Framework Core, SQL Server, Oracle APEX"]},
  {
    title: "Software Consultant",
    company_name: "NashTech, Inc.",
    icon: nashtech,
    iconBg: "#E6DEDD",
    date: "Nov 2023 – Feb 2025",
    points: [
      "Client: DCT (Duck Creek Technologies), Boston\n • Description: Data solutions oriented project to interact with Cloud based providers (Azure, Snowflake) by business operations via .NET, Angular and gRPC to perform ETL using Microsoft Fabrics Pipeline and generate consolidated report on PowerBI.\n• Tech Used: C#, Python, .NET Core Web APIs, Angular, Entity Framework Core, SQL Server, Azure, gRPC, MS Fabric, Data Factory, Git, JIRA, Agile (Scrum)"]}
  ,
  {
    title: "Senior Programmer",
    company_name: "Kumaran Systems",
    icon: nashtech,
    iconBg: "#E6DEDD",
    date: "March 2025 – Present",
    points: [
      "Client: Canadian Imperial Bank of Commerce (CIBC), Canada\n • Description: Worked on enterprise-level software solutions for Canadian Imperial Bank of Commerce (CIBC) in the banking and financial sector. Contributing to the design, development, and support of secure and scalable applications aligned with industry standards and compliance requirements.\n• Tech Used: .NET Core Web API, Angular, Oracle SQL, MS Fabric, Azure Data Factory, Git, Agile (Scrum)"]}
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
