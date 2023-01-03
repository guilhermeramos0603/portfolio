import { DiJsBadge, DiNodejsSmall, DiReact, DiMysql } from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql /> }
]

function TechnologiesContainer() {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technologies-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technologies-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus doloribus suscipit, officia </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer