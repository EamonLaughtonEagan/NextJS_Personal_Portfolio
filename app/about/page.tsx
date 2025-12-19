import { Code, Database, Github, Heart, Lightbulb, Linkedin, Map, MapIcon, MapPin, Rocket, User } from "lucide-react"
import Image from "next/image"
import Card from "../components/Card"
import { AnimatedHeader } from "../components/AnimatedHeader"
import calculateYearsOfExperience from "../utils/calculatYearsOfExperience"
import { experiences } from "@/constants/experience/experience.properties"

export default function About() {

    const aboutInfo = [
        {
            icon: <User className="w-6 h-6" />,
            label: "Who I Am",
            value: "Full-Stack Developer & Software Engineer",
            description: "Passionate about creating functional and creative web applications with modern technologies.",
            color: "text-blue-400"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Ottawa, Ontario",
            description: "Based in Canada's capital, available for remote and local opportunities.",
            color: "text-green-400"
        },
        {
            icon: <Code className="w-6 h-6" />,
            label: "Expertise",
            value: "JavaScript, TypeScript, Tailwind CSS, Redux Toolkit, React & Next.js",
            description: "Experienced in building scalable applications with modern frameworks and tools.",
            color: "text-purple-400"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            label: "Philosophy",
            value: "Client-Focused Development",
            description: "I work closely with clients to bring their ideas to life in a timely and efficient manner.",
            color: "text-yellow-400"
        }
    ]

    const qualities = [
        {
            icon: <Rocket className="w-5 h-5" />,
            text: "Quick learner and adaptable to new technologies"
        },
        {
            icon: <Heart className="w-5 h-5" />,
            text: "Passionate about clean, maintainable code"
        },
        {
            icon: <Code className="w-5 h-5" />,
            text: "Experienced in frontend development, UI/UX design principles"
        },
        {
            icon: <Database className="w-5 h-5" />,
            text: "Experienced in backend development as well as database management"
        }
    ]
    
    return (
        <div className="p-5">
            <AnimatedHeader fullText="About Me" />

            {/* Profile Card */}
            <Card className="mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Profile Image */}
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shrink-0">
                        <Image
                            src="/profile.jpg" 
                            alt="Profile picture"
                            fill
                            className="object-cover select-none"
                            priority
                        />
                    </div>
                    
                    {/* Profile Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-foreground mb-2">Eamon Laughton-Eagan</h2>
                        <p className="text-xl text-blue-400 mb-4">Software Developer</p>
                        <p className="text-foreground leading-relaxed mb-4">
                            Hi! I'm a passionate software developer with over {calculateYearsOfExperience({ experiences })} years of experience in creating 
                            innovative web applications. I specialize in modern JavaScript frameworks and love 
                            turning complex problems into simple, beautiful, and intuitive designs.
                        </p>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((info, index) => (
                    <Card key={index} className="group">
                        <div className="flex items-start gap-4">
                            <div className={`${info.color} group-hover:scale-110 transition-transform duration-300 mt-1`}>
                                {info.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-foreground/60 text-sm mb-1">{info.label}</h3>
                                <p className="text-foreground text-lg font-medium mb-2">
                                    {info.value}
                                </p>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    {info.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Sets Me Apart</h2>
                <div className="space-y-4">
                    {qualities.map((quality, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="text-blue-400">
                                {quality.icon}
                            </div>
                            <p className="text-foreground/60">{quality.text}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}