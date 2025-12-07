import { Mail, Phone, Linkedin, Github } from "lucide-react";
import Card from "../components/Card";
import { AnimatedHeader } from "../components/AnimatedHeader";

export default function Contact() {
    
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "eamonlaughtoneagan@gmail.com",
            href: "mailto:eamonlaughtoneagan@gmail.com",
            color: "text-blue-400"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+1 (613) 882-4480",
            href: "tel:+16138824480",
            color: "text-green-400"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: "Eamon Laughton-Eagan",
            href: "https://www.linkedin.com/in/eamon-laughton-eagan-85339913b/",
            color: "text-blue-500"
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            value: "EamonLaughtonEagan",
            href: "https://github.com/EamonLaughtonEagan",
            color: "text-purple-400"
        }
    ];

    return (
        <div className="p-5">
            <AnimatedHeader fullText="Get in Touch" />
            <p className="text-xl text-gray-400 mb-12">
                Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, creative ideas, or other opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                    <Card key={index} className="group cursor-pointer">
                        <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-4"
                        >
                            <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                                {contact.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-gray-400 text-sm mb-1">{contact.label}</h3>
                                <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors">
                                    {contact.value}
                                </p>
                            </div>
                        </a>
                    </Card>
                ))}
            </div>

            <Card className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Let's Collaborate!</h2>
                <p className="text-gray-300 leading-relaxed">
                    Whether you have need of a developer for your next big project, want to brainstorm innovative ideas, or simply wish to connect and share knowledge, I'm here to help. Don't hesitate to reach out. I look forward to hearing from you!
                </p>
            </Card>
        </div>
    );
}