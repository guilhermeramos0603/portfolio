import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import avatar from "../img/Guilherme.jpg"

import '../styles/components/sidebar.sass'

const sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={avatar} alt="Guilherme Ramos" />
            <p className="title">Full-Stack Developer</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/10RqZaFQq8AfW2DIpxnb6AJMX6VdwD6Om/view?usp=sharing" target="_blank" className="btn">Access my curriculum</a>
        </aside>
    )
}

export default sidebar