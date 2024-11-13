import image from '../assets/images/image.jpg';

function Home() {
    return (
        <section className="home">
            <img src={image} alt="" />
            <p className='big'>Bonjour,  je suis <strong>Marion Barthoux</strong> développeuse web fullstack</p>
        </section>
    );
}

export default Home;