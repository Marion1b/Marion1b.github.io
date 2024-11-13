import React, { useState } from 'react';

function LearnMore({project, stacks}){
    const [hide, setHide]=useState(true);

    function handleClick(){
        if(hide === true){
            setHide(false);
        }else{
            setHide(true);
        }
    }

    return(
        <>
            <p className='titleProjects' onClick={handleClick}>{project.name}</p>
            <div className={'projects-project-more-' + hide}>
                <a href={project.link} target="_blank" rel="noreferrer"><img src={project.minia} alt="" className='projects-project-minia'/></a>
                <p>{project.descr}</p>
                <div className='projects-project-stack-container'>
                    {stacks && Object.keys(stacks).map((key)=>{
                        const stack = stacks[key];
                        if(project.stack.includes(key)){
                            return(
                                <article key={key} className='projects-project-stack'>
                                    <img src={stack.icon} alt=""/>
                                    <p>{stack.name}</p>
                                </article>
                            )
                        }
                        return null
                    })}
                </div>
            </div>
        </>
    )
}   

export default LearnMore;