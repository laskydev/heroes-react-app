import React, {useMemo} from 'react';
import queryString from 'query-string'
import {useLocation} from 'react-router-dom'
import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {getHeroesByName} from "../../selectors/getHeroesByName";

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = (queryString.parse(location.search))


    const [formValues, handleInputChange] = useForm({inputSearch: q});

    const {inputSearch} = formValues

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${inputSearch}`)
        // reset()
    }


    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);


    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className={'row'}>
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            placeholder={'Find your hero'}
                            name={'inputSearch'}
                            className={'form-control'}
                            onChange={handleInputChange}
                            autoComplete={'off'}
                            value={inputSearch}

                        />
                        <button
                            type={'submit'}
                            className={'btn m-1 block btn-outline-primary'}
                        >Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results:</h4>
                    <hr/>

                    {q === ''
                    && <div className="alert alert-info">
                        Search a Hero
                    </div>
                    }

                    {(q !== '' && heroesFiltered.length===0)
                    && <div className="alert alert-danger">
                        No existe ningún heroe con ese nombre:
                        "{q}"
                    </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};