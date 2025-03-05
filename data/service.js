import sgImgS1 from '../public/images/service-single/web/img-1.jpg'
import sgImgS2 from '../public/images/service-single/web/img-2.jpg'
import sgImgS3 from '../public/images/service-single/web/img-3.jpg'

import brImgS1 from '../public/images/service-single/app/img-1.jpg'
import brImgS2 from '../public/images/service-single/app/img-2.jpg'
import brImgS3 from '../public/images/service-single/app/img-3.jpg'

import uxImgS1 from '../public/images/service-single/brand/img-1.jpg'
import uxImgS2 from '../public/images/service-single/brand/img-2.jpg'
import uxImgS3 from '../public/images/service-single/brand/img-3.jpg'

import dvImgS1 from '../public/images/service-single/market/img-1.jpg'
import dvImgS2 from '../public/images/service-single/market/img-2.jpg'
import dvImgS3 from '../public/images/service-single/market/img-3.jpg'



const Services = [
    {
        Id: '1',
        sImgS:sgImgS1,
        sTitle: 'Web Development',
        description:'Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.',
        description2:'I build fast, scalable, and SEO-friendly web applications using Next.js, perfect for business sites, SaaS platforms, and dashboards.',
        des2:"I specialize in modern web applications using Next.js, a powerful React framework for fast, scalable, and SEO-friendly websites. Whether it's a business site, SaaS platform, or an interactive dashboard, I build solutions that deliver exceptional performance and user experience.",
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        approach:"We focus on performance, scalability, and user experience, building web applications that are fast, secure, and SEO-optimized. Our Next.js expertise allows us to create dynamic, high-performing websites and applications tailored to business needs.",
        capability:[
            "Server-side rendering (SSR) & Static site generation (SSG)",
            "Scalable, optimized web applications",
            "API-driven development for seamless integrations"
        ],
        process: [
            "Discovery & Planning – Understanding project goals and requirements",
            "UI/UX Design – Crafting an intuitive and user-friendly interface",
            "Development – Implementing robust, scalable solutions using Next.js",
            "Testing & Optimization – Ensuring performance, security, and responsiveness",
            "Deployment & Maintenance – Launching and continuously improving the application"
        ],
        icon:'flaticon-vector',
        projects:'213',
        ssImg1:sgImgS2,
        ssImg2:sgImgS3,
    },
    {
        Id: '2',
        sImgS:brImgS1,
        sTitle: 'Mobile App Development',
        description:'Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.',
        description2:'I develop high-performance, cross-platform mobile apps for iOS and Android using a single codebase.',
        des2:'Cross-platform development is crucial for reaching a wider audience efficiently. Using Flutter and React Native, I create responsive, high-performance mobile apps that work seamlessly on both iOS and Android, all from a single codebase.',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        approach:"We create cross-platform mobile applications that deliver seamless experiences across devices. Using Flutter and React Native, we build high-performance, scalable apps that work across iOS and Android while maintaining a native feel.",
        capability:[
            "Cross-platform app development (iOS & Android)",
            "Scalable, optimized mobile applications",
            "API integration for enhanced functionality"
        ],
        process:[
            "Concept & Strategy – Defining the app’s purpose and core features",
            "UI/UX Design – Crafting an engaging and intuitive mobile experience",
            "Development – Building scalable mobile applications using Flutter & React Native",
            "Testing & Refinement – Ensuring stability, performance, and security",
            "Deployment & Support – Launching on App Stores & providing updates"
        ],
        icon:'flaticon-smartphone',
        projects:'102',
        ssImg1:brImgS2,
        ssImg2:brImgS3,
    },
    {
        Id: '3',
        sImgS:uxImgS1,
        sTitle: 'UI/UX Design',
        description:'Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.',
        description2:' I create intuitive, user-friendly designs with Figma, focusing on prototyping, wireframing, and seamless design-to-development handoff.',
        des2:'A great product starts with a great user experience. Using Figma, I craft intuitive and visually appealing designs that enhance usability and engagement. I focus on prototyping, wireframing, and design systems to ensure a smooth transition from concept to development.',
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        approach:"We focus on user-centered design to create interfaces that are intuitive, visually appealing, and highly functional. Using Figma, we collaborate in real-time to prototype, iterate, and deliver designs that elevate user experiences.",
        capability: [
            "UI/UX design & prototyping",
            "Wireframing and design systems",
            "User research & usability testing"
        ],
        process:[
            "Research & Analysis – Understanding user behavior and design trends",
            "Wireframing & Prototyping – Structuring the user flow and interactions",
            "High-Fidelity Design – Creating visually compelling UI elements",
            "User Testing & Feedback – Refining designs for an optimal experience",
            "Handoff to Development – Ensuring smooth integration with engineering teams"
        ],
        icon:'flaticon-palette',
        projects:'60',
        ssImg1:uxImgS2,
        ssImg2:uxImgS3,
    },
    {
        Id: '4',
        sImgS:dvImgS1,
        sTitle: 'Project Management',
        description:'Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.',
        description2:'I streamline project workflows, optimize team collaboration, and ensure on-time delivery using agile and structured methodologies.',
        des2:"Successful projects require efficient collaboration and organization. I use tools like Jira, Trello, Asana, and Notion to manage workflows, track progress, and ensure projects are delivered on time and within scope. Whether it's agile development or structured project execution, I optimize the process for maximum efficiency.",
        des3:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities',
        approach:"We ensure efficient project execution, keeping tasks organized, deadlines met, and workflows optimized. By using Jira, Trello, Asana, and Notion, we streamline collaboration, track progress, and manage tasks effectively.",
        capability:[
            "Agile and Scrum-based workflow management",
            "Task tracking, sprint planning & team collaboration",
            "Documentation and knowledge management"
        ],
        process: [
            "Project Scoping – Defining deliverables, timelines, and goals",
            "Task Breakdown – Structuring workflows and assigning responsibilities",
            "Agile Execution – Iterative development with sprint cycles",
            "Progress Tracking – Using tools like Jira & Trello to monitor tasks",
            "Delivery & Retrospective – Evaluating project success and continuous improvement"
        ],
        icon:'flaticon-bar-chart',
        projects:'230',
        ssImg1:dvImgS2,
        ssImg2:dvImgS3,
    }
]    

export default Services;