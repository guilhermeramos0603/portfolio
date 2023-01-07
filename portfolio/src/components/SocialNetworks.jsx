import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/guilherme-silvano-ramos/' },
    { name: 'medium', icon: <BsMedium />, link: 'https://medium.com/@guilherme.silvano' },
    { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/guilhermesramoss/' }
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
}

export default SocialNetworks