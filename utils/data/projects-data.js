import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Crypto App',
        description: "I have design and develop a crypto app using crypto free api you can see  crypto coin all time high all time low graph .",
        tools: ['Axios', 'Chakra ui', 'Crypto API' ],
        role: 'Frontend Developer',
        code: 'https://github.com/aman1455/Crypto-app',
        demo: 'https://crypto-app-aman.netlify.app/coin/bitcoin',
        image: crefin,
    },
    {
        id: 2,
        name: 'Food Delivery App',
        description: 'I have designed and developed a full-stack web application for a food delivery platform. I built the UI using React, TypeScript, TailwindCSS, and React Slick. The app supports multiple languages and currencies. I developed the REST API using Node.js, Express, MongoDB, and integrated it with Nodemailer for transactional emails. The application also includes a custom-built admin panel for managing users, orders, and menu items.',
        tools: ['React', 'Tailwind CSS', "javaScript", "MongoDB", "Node.js", "Express"],
        role: 'Full Stack Developer',
        code: 'https://github.com/aman1455/Food-Karo.git',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Budget Tracker App',
        description: 'I have designed and developed a full-stack web application for a personal budget tracking platform. I built the UI using React, TypeScript, TailwindCSS, and Chart.js for data visualization. The app supports multiple currencies and offers intuitive dashboards for tracking income, expenses, and savings goals. I developed the REST API using Node.js, Express, and MongoDB, with authentication and secure data handling. The application also includes a dedicated admin panel for managing user data and monitoring financial activity.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: 'https://github.com/aman1455/Budget_tracker.git',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },