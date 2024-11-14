import React, { useState } from 'react';
import MentionsModal from "./MentionsModal";

function Footer(){
    const [hide, setHide]=useState(true);

    function handleClick(){
        if(hide === true){
            setHide(false);
        }else{
            setHide(true);
        }
    }

    return(
        <footer>
            <MentionsModal hide = {hide.toString()}/>
            <p onClick={handleClick} className='mentions-link'>Mentions légales</p>
            <p>© Marion Barthoux</p>
        </footer>
    )
}

export default Footer;