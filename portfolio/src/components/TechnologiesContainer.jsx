import { DiJsBadge, DiNodejsSmall, DiReact, DiDatabase } from "react-icons/di"
import { SiTypescript, SiExpress } from "react-icons/si"

import "../styles/components/technologiescontainer.sass"

const technologies = [
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages, I've been working with Javascript for over two years, it's my current specialty" },
    { id: "ts", name: "TypeScript", icon: <SiTypescript />, description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. I've used it both in front end with react MVC model and for building API's, it is undeniable that typing helps a lot in code quality, Typescript is a evolution of Javascript" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications." },
    { id: "ex", name: "Express.js", icon: <DiNodejsSmall />, description: "Express is a Node.js web application framework. I've had contact with other node.js frameworks, but the one I have the most experience with is Express. I build highly scalable API's, and their flexibility and strength to me a great." },
    { id: "react", name: "React", icon: <DiReact />, description: "I've worked with web applications using React.js and mobile with React Native. React.js framework is an open-source JavaScript framework and library developed by Facebook and React Native is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android." },
    { id: "database", name: "Databases", icon: <DiDatabase />, description: "Database is an organized collection of data stored and accessed electronically. During my journey, I worked with various databases, relational, non-relational, cache. Here goes some examples: MySQL, PostgreSQL, MongoDB, Redis" }
]

function TechnologiesContainer() {
    return <section className="technologies-container">
        <h2>Technologies</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technologies-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technologies-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer