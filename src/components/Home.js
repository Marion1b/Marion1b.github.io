import image from '../assets/images/home-illu.svg';

function Home() {
    return (
        <section className="home">
            <img src={image} alt="" />
            <p className='big'>Bonjour,  je suis Marion Barthoux <br /> 
            <strong>
                <span className="home-key">d</span>
                <span className="home-key">é</span>
                <span className="home-key">v</span>
                <span className="home-key">e</span>
                <span className="home-key">l</span>
                <span className="home-key">o</span>
                <span className="home-key">p</span>
                <span className="home-key">p</span>
                <span className="home-key">e</span>
                <span className="home-key">u</span>
                <span className="home-key">s</span>
                <span className="home-key">e</span>&nbsp;
                <span className="home-key">w</span>
                <span className="home-key">e</span>
                <span className="home-key">b</span>&nbsp;
                <span className="home-key">f</span>
                <span className="home-key">u</span>
                <span className="home-key">l</span>
                <span className="home-key">l</span>
                <span className="home-key">s</span>
                <span className="home-key">t</span>
                <span className="home-key">a</span>
                <span className="home-key">c</span>
                <span className="home-key">k</span>

            </strong></p>
        </section>
    );
}

export default Home;