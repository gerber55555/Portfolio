const person = {
    firstName: 'Christian',
    lastName:  'Gerber',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Senior Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Fort_Wayne',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/gerber55555',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/christian-gerber-111152164/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Christian Gerber <b/><b/> Full Stack Software Engineer</>,
    subline: <>I'm Christian, a Senior Software Engineer at General Dynamics Mission Systems, where I bring Android and Angular applications to life.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Christian is an Experienced Senior Software Engineer skilled in TypeScript, Angular, Java, and Python. Proven
        track record in enhancing code quality, advocating Agile methodologies, and fostering
        teamwork. Currently contributing to General Dynamics Mission Systems with a focus on
        innovative solutions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'General Dynamics Mission Systems',
                companyImage: '/images/general_dynamics_logo.jpg',
                timeframe: 'NOV 2020 - Present',
                role: 'Senior Software Engineer',
                achievements: [
                    <>Demonstrated complete ownership over a multi-module command and control system, overseeing cross-functional teams to achieve program goals for a customer event, ensuring high-impact results and customer satisfaction.</>,
                    <>Fostered collaboration across multiple teams, contributing to UX discussions, and developing practical lab testing tools such as startup scripts and message logs.</>,
                    <>Championed mentorship by actively supporting new team members, including coaching and guiding a new intern to productivity, fostering a positive and productive team culture.</>,
                    <>Recognized for consistently taking on challenging projects, driving solutions to complex design questions, and demonstrating a proactive approach in supporting system design integrity.</>

                ],
                images: []
            },
            {
                company: 'Do it Best Corp',
                timeframe: 'MAY 2020 - NOV 2020',
                companyImage: '/images/do-it-best-logo-hammer.jpg',
                role: 'Software Engineer',
                achievements: [
                    <>Supported the modernization effort of warehouse management system, stream processing data from SQL databases to support real time updates.</>
                ],
                images: [ ]
            },
            {
                company: 'Vocera Communications',
                companyImage: '/images/vocera.jpg',
                timeframe: 'MAY 2019 - DEC 2019',
                role: 'Contract Platform Quality Ensurance Engineer/Intern',
                achievements: [
                    <>Developed automated test software using the Gherkin framework and Python to verify the integrity of the Vocera Platform </>,
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Illinois',
                universityImage: '/images/illinois.png',
                degree:'M.S. Computer Science',
                timeframe: 'AUG 2021 - MAY 2023',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Purdue University Fort Wayne',
                universityImage: '/images/purdue_university_fort_wayne_logo.jpg',
                degree:'B.S. Computer Science',
                timeframe: 'AUG 2017 - MAY 2020',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Angular',
                description: <>Supported development on multiple Angular web projects using TS. Including a mission planning tool using a Cesium map and an Intelligence and Electronic Warfare Tactical Proficency Trainer</>,
                images: [
                    {
                        src: '/images/GeoSuite-Enemy-Movement_UAV-Screenshot.jpg',
                        alt: 'Geosuite',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/GeoSuite-Situational-Awareness-Screenshot.jpg',
                        alt: 'Geosuite',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Android',
                description: <>Designed and developed a Command and Control Android application with serial device interfacing, SQL database management, and intuitive user interfaces, enabling seamless data storage and retrieval for complex system operations.</>,
                images: [
                    {
                        src: '/images/4k-training-atak.jpg',
                        alt: 'Atak',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'Java',
                description: <>Proficient in Java development, including building Android applications and implementing Kafka stream processing for efficient, real-time data handling and integration.</>,
                images: []
            },
            {
                title: 'Python',
                description: <>Skilled in Python development, with experience in writing test scripts to ensure software reliability and a foundational knowledge of machine learning concepts for data analysis and predictive modeling.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: []
}

export { person, social, newsletter, home, about, blog, work, gallery };