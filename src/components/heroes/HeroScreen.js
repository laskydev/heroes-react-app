import React, {useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom'
import {getHeroesById} from "../../selectors/getHeroById";

export const HeroScreen = ({history}) => {

    const {heroId} = useParams()
    const hero = useMemo(() => getHeroesById(heroId), [heroId]);

    const handleReturn = (e) => {

        if(history.length <= 2){
            history.push('/')
        }

        e.preventDefault();
        history.goBack();
    }

    if (!hero[0]) {
        return <Redirect to={'/'}/>
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero[0]

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} className={'img-thumbnail animate__animated animate__fadeInLeft'} alt={superhero}/>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    onClick={handleReturn}
                    className="btn btn-outline-info">Return
                </button>
            </div>
        </div>
    );
};