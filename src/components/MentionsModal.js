function MentionsModal({hide}){
    
    return(
        <section className={'mentions-legales mentions-legales-' + hide}>
            <h2>MENTIONS LÉGALES</h2>
            <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateur-ice-s du site marion1b l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

            <p className='bold'>Edition du site </p>

            <p>Le présent site, accessible à l’URL https://marion1b.github.io, il est édité par : <br />

            Marion Barthoux, résidant 35000 Rennes, de nationalité Française, née le 26/10/1999. </p>

            <p className='bold'>Hébergement</p>

            <p>Le Site est hébergé par la société github, situé San Francisco, Californie, Etats-Unis.</p>

            <p className='bold'>Directrice de publication </p>

            <p>La Directrice de la publication du Site est Marion Barthoux.</p>

            <p className='bold'>Nous contacter </p>
                <ul>
                    <li>Par email : <a href="mailto:marion.barthoux@gmail.com">marion.barthoux@gmail.com</a></li>
                    <li>Par courrier : 35000 Rennes</li>
                </ul>

            <p>Génération des mentions légales par Legalstart.</p>
        </section>
    )
}   

export default MentionsModal;