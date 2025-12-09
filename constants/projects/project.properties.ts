export interface ProjectP {
  id: number
  title: string
  description: string
  languages: string[]
  frameworks: string[]
  completed: boolean
  startDate: Date
  githubUrl?: string
  liveUrl?: string
}

const projects: ProjectP[] = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "A personal portfolio website built using Next.js to showcase work experience, projects, and skills.",
    languages: ["TypeScript", "HTML", "CSS"],
    frameworks: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    completed: true,
    startDate: new Date("2025-12-03"),
    githubUrl: "https://github.com/EamonLaughtonEagan/NextJS_Personal_Portfolio",
    liveUrl: "https://next-js-personal-portfolio-umber.vercel.app/home"
  },
  {
    id: 2,
    title: "Exercise Tracker Mobile App",
    description: "A mobile application initially developed for personal use, built for Android primarily that helps users track their workouts, set fitness goals, and monitor progress over time.",
    languages: ["Typescript", "HTML", "CSS"],
    frameworks: ["React Native", "Expo", "Appwrite API", "Tamagui", "Redux Toolkit"],
    completed: false,
    startDate: new Date("2025-06-04"),
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "An e-commerce designed as a proof of concpet for a client to act as their virtual storefront, allowing customers to browse products, add items to their cart, and complete purchases online.",
    languages: ["Typescript", "HTML", "CSS"],
    frameworks: ["Next.js", "React", "Node.js", "Tailwind CSS", "vite"],
    completed: false,
    startDate: new Date("2025-01-15"),
  },
  {
    id: 4,
    title: "Sorting Algorithm Visualizer",
    description: "A web application that visually demonstrates various sorting algorithms, allowing users to see how different algorithms sort data in real-time.",
    languages: ["TypeScript", "HTML", "CSS"],
    frameworks: ["React", "D3.js", "Three.js", "Tailwind CSS", "Vite", "Framer Motion"],
    completed: true,
    startDate: new Date("2025-03-07"),
    githubUrl: "https://github.com/EamonLaughtonEagan/Sorting_Algorithm_Visualiser",
    liveUrl: "https://sorting-algorithm-visualiser-plum.vercel.app/"
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "A personal portfolio website built using React to showcase work experience, projects, and skills.",
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS", "React Router", "Nginx"],
    completed: true,
    startDate: new Date("2023-12-17"),
    githubUrl: "https://github.com/EamonLaughtonEagan/3D_Portfolio",
    liveUrl: "https://eamonlaughtoneagan.xyz/"
  },
  {
    id: 6,
    title: "Accessibility Checker Chrome Extension",
    description: "A Chrome extension that helps users identify and fix accessibility issues on web pages, by referencing WCAG guildines using AXE core dev tools library, feeding the result to an openAI API to provide suggestions on how to fix the issues.",
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["Chrome Extensions API", "Vanilla JS", "AXE Core", "OpenAI API", "Vite", "React"],
    completed: true,
    startDate: new Date("2024-11-13"),
    githubUrl: "https://github.com/EamonLaughtonEagan/a11y_app"
  }
]

export default projects