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
    startDate: new Date("2025-12-03")
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
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "A personal portfolio website built using React to showcase work experience, projects, and skills.",
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "Vite", "EmailJS", "React Router"],
    completed: true,
    startDate: new Date("2023-12-17"),
  }
]

export default projects