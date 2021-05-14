import React from 'react';
import {Navbar} from "../components/ui/Navbar";
import {Route, Switch, Redirect} from "react-router-dom";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {HeroScreen} from "../components/heroes/HeroScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {SearchScreen} from "../components/search/SearchScreen";

export const DashboardRoutes = ({history}) => {
    return (
        <>
            <Navbar
                history={history}
            />
            <div className={'container mt-2'}>
                <Switch>
                    <Route exact path={'/marvel'} component={MarvelScreen}/>
                    <Route exact path={'/hero/:heroId'} component={HeroScreen}/>
                    <Route exact path={'/dc'} component={DcScreen}/>
                    <Route exact path={'/search'} component={SearchScreen}/>

                    <Redirect to={'/marvel'}/>
                </Switch>
            </div>
        </>
    );
};