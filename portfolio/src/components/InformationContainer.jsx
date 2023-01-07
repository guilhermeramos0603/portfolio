import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Phone</h3>
                <p>+55 (41) 99742-9193</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>guilherme.silvano@hotmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='phone-icon' />
            <div>
                <h3>Localization</h3>
                <p>Curitiba-PR</p>
            </div>
        </div>
    </section>
}

export default InformationContainer