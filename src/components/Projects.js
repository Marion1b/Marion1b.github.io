import React, { useEffect, useState } from 'react';
import LearnMore from './LearnMore';

function Projects(){
    const [projects, setProjects] = useState(null);
    const [stacks, setStacks] = useState(null);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [loadingStacks, setLoadingStacks] = useState(true);
    const [errorProjects, setErrorProjects] = useState(null);
    const[errorStacks, setErrorStacks] = useState(null);

    useEffect(() =>{
        fetch('./data/projects.json')
        .then(response=>{
            if(!response.ok){
                throw new Error('Erreur HTTP ! statut : ' + response.status);
            }
            return response.json();
        })
        .then(projects =>{
            setProjects(projects);
            setLoadingProjects(false);
        })
        .catch(error => {
            setErrorProjects(error);
            setLoadingProjects(false);
        });
    }, []);

    useEffect(() =>{
        fetch('./data/stack.json')
        .then(response=>{
            if(!response.ok){
                throw new Error('Erreur HTTP ! statut : ' + response.status);
            }
            return response.json();
        })
        .then(stacks =>{
            setStacks(stacks);
            setLoadingStacks(false);
        })
        .catch(error => {
            setErrorStacks(error);
            setLoadingStacks(false);
        });
    }, []);

    if(loadingProjects) return <p>Chargement...</p>;
    if(errorProjects)return <p>Erreur : {errorProjects.message}</p>;
    if(loadingStacks) return <p>Chargement...</p>;
    if(errorStacks) return <p>Erreur : {errorProjects.message}</p>

    return(
        <section className='projects' id="projects">
            <h2>Mes projets</h2>
            <div className='projects-container'>
                {projects && Object.keys(projects).map((key)=>{
                    const project = projects[key];
                    return(
                        <article key={key} className='projects-project'>
                            <LearnMore project={project} stacks={stacks} />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;