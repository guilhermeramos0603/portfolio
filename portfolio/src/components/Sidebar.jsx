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
            <a href="" className="btn">Download curriculo</a>
        </aside>
    )
}

export default sidebar