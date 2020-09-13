import React, { Component, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router'
import axios from 'axios'
import About from '../Component/About'
import Movie from '../Component/Movie'
import Login from '../Component/Login/Login'
import Home from '../Component/Home'
import {MovieProvider} from './MovieContext'

class Index extends Component {

    render() {
        return (
            <>
            <div>
                <Switch>
                    <Route exact path="/">
                        {/* <section >
                            <h1 className="center">Daftar Film Film Terbaik</h1>
                            <div id="article-list">
                                <div className="article">
                                    <a href=""><h3>Featured Post</h3></a>
                                    <p>
                                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                                    </p>
                                </div>
                            </div>
                        </section> */}
                        <MovieProvider>
                        <Home />
                        </MovieProvider>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/movie">
                        <Movie />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
            </>
        )
    }
}

export default Index;