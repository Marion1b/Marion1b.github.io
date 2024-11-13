import React, { useEffect, useState } from 'react';
import Button from './Button';

function Stack(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch('./data/stack.json')
        .then(response=>{
            if(!response.ok){
                throw new Error('Erreur HTTP ! statut : ' + response.status);
            }
            return response.json();
        })
        .then(data =>{
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    if(loading) return <p>Chargement...</p>;
    if(error)return <p>Erreur : {error.message}</p>;

    return(
        <section className='stack'>
            <h2>Stack</h2>
            <article className='stack-block'>
            <p className='bold'>Bonne maîtrise</p>
            <div className='stack-container'>
                {data && Object.keys(data).map((key)=>{
                    const stack = data[key];
                    if(stack.mastery === "1"){
                        return(
                                <article key={key}>
                                    <img src={stack.icon} alt=""/>
                                    <p>{stack.name}</p>
                                </article>
                        )
                    }
                    return null;
                })}
            </div>
            </article>
            <article className='stack-block'>
                <p className='bold'>Maîtrise moyenne</p>
                <div className='stack-container'>
                    {data && Object.keys(data).map((key)=>{
                        const stack = data[key];
                        if(stack.mastery === "2"){
                            return(
                                <article key={key}>
                                    <img src={stack.icon} alt=""/>
                                    <p>{stack.name}</p>
                                </article>
                            )
                        }
                    return null;
                    })}
                </div>
            </article>
            <article className='stack-block'>
                <p className='bold'>Connaissances des bases</p>
                <div className='stack-container'>
                    {data && Object.keys(data).map((key)=>{
                        const stack = data[key];
                        if(stack.mastery === "3"){
                            return(
                                <article key={key}>
                                    <img src={stack.icon} alt=""/>
                                    <p>{stack.name}</p>
                                </article>
                            )
                        }
                    return null;
                    })}
                </div>
            </article>
            <Button texte="Télécharger mon CV" />
        </section>
    )
}

export default Stack;