export interface ExperienceP {
    title: string
    company: string
    location: string
    start: Date
    finish: Date | string
    description: string[]
    current: boolean
}

export const experiences: ExperienceP[] = [
    {
        title: "QA Tester Co-op",
        company: "360 PI",
        location: "Ottawa, Ontario",
        start: new Date("2015-09-01"),
        finish: new Date("2016-04-16"),
        description: [
            "Used Jenkins to run automated tests on software builds to identify bugs and issues before release.",
            "Collaborated with developers to report bugs and verify fixes, ensuring high-quality software delivery.",
            "Participated in daily stand-up meetings to discuss testing progress and challenges.",
        ],
        current: false
    },
    {
        title: "Java Developer",
        company: "Health Canada",
        location: "Ottawa, Ontario",
        start: new Date("2022-02-09"),
        finish: new Date("2022-07-29"),
        description: [
            "Developed and maintained web application using spring too suite, Tomcat Server, Oracle SQL database, and other technologies.",
            "Collaborated across teams including designers, product managers, and other developers",
            "Participated in code reviews and contributed to improving coding standards and best practices within the team.",
        ],
        current: false
    },
    {
        title: "FullStack Developer",
        company: "Health Canada",
        location: "Ottawa, Ontario",
        start: new Date("2022-08-01"),
        finish: new Date("2023-12-15"),
        description: [
            "Developed React application frontend using Typescript, Chakra UI, React-Router, amongst other smaller web technologies.",
            "Created backend RESTful APIs using litestar framework in Python, interfacing with an SQL database.",
            "Created CI/CD pipeline for automated testing and deployment using GitHub Actions.",
            "Used Nginx as a web server proxy to serve the React frontend and route API requests to the backend server.",
            "Fast API used to create additional backend services for handling authentication and data processing.",
            "Created Docker containers for both frontend and backend applications to ensure consistent deployment across different environments.",
            "Participated in Agile sprints and contributed to sprint planning, stand-ups, and retrospectives."
        ],
        current: false
    },
    {
        title: "Accessibility Specialist",
        company: "Health Canada",
        location: "Ottawa, Ontario",
        start: new Date("2024-01-02"),
        finish: new Date("2025-01-18"),
        description: [
            "Conducted accessibility audits of web applications to identify and address accessibility issues, ensuring compliance with WCAG 2.2 standards.",
            "Collaborated with developers and designers to implement accessibility best practices and improve the overall user experience for individuals with disabilities.",
            "Provided training to team members who lacked the technical knowledge of web-fundamentals to help them understand accessibility requirements and how to implement them effectively.",
        ],
        current: false
    },
    {
        title: "Legacy Java Application Maintainer",
        company: "Health Canada",
        location: "Ottawa, Ontario",
        start: new Date("2025-02-01"),
        finish: "Present",
        description: [
            "Worked on maintaining legacy Java application software used internally by Health Canada employees.",
            "Fixed bugs and added minor features to improve functionality and user experience.",
            "Collaborated with cross-functional teams to ensure smooth operation and address any issues that arose.",
        ],
        current: true
    }
]