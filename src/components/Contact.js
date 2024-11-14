import github from "../assets/images/github-logo.svg";
import codingGame from "../assets/images/coding-game-logo.svg";
import linkedIn from "../assets/images/linkedin-logo.png"

function Contact(){
    return(
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <section className="contact-container">
                <p className="bold">Mail</p>
                <p><a href="mailto:marion.barthoux@gmail.com">marion.barthoux@gmail.com</a></p>
            </section>
            <section className="contact-container">
            <p className="bold">Mes résesaux :</p>
                <div className="contact-links-container">
                    <article>
                        <a href="https://github.com/Marion1b" target="_blank" rel="noreferrer">
                            <img src={github} alt="logo de github"/>
                            <p>Github</p>
                        </a>
                    </article>
                    <article>
                        <a href="https://www.linkedin.com/in/marion-barthoux-38a1b8215/" target="_blank" rel="noreferrer">
                            <img src={linkedIn} alt="logo de linkedIn"/>
                            <p>LinkedIn</p>
                        </a>
                    </article>
                    <article>
                        <a href="https://www.codingame.com/profile/369d3c282909e67857cf316214f4e4449605455" target="_blank" rel="noreferrer">
                            <img src={codingGame} alt="logo de coding game"/>
                            <p>Coding Game</p>
                        </a>
                    </article>
                </div>
            </section>
        </section>
    )   
}

export default Contact;