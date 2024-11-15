import image from '../assets/images/home-illu.svg';

function Home() {
    return (
        <section className="home">
            <img src={image} alt="" />
            <p className='big'>Bonjour,  je suis <strong>Marion Barthoux</strong> <br /> 
            développeuse web fullstack</p>
        </section>
    );
}

export default Home;