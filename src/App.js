import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Note from './pages/note'
import Nav from './layouts/nav'
import Footer from './layouts/footer'
import About from './pages/about'
import Project from './pages/project'
import ProjectView from './pages/project-view'
import Gallery from './pages/gallery'
import Contact from './pages/contact'

// note
import GitNote from './pages/note/gitNote'
import ExpressNote from './pages/note/expressNote'
import VimNote from './pages/note/vimNote'
import FirstNote from './pages/note/firstNote'
import SystemnoteNote from './pages/note/systemnoteNote'
import WeekNote from './pages/note/weekNote'

// const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
// const Project = () => <h1>Project</h1>

class App extends Component {
  
  render() {

    return (
      <main className="my-app">

        <Nav/>

        <div id="container" className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Post} />
            <Route path="/note/git" component={GitNote} />
            <Route path="/note/express" component={ExpressNote} />
            <Route path="/note/vim" component={VimNote} />
            <Route path="/note/first" component={FirstNote} />
            <Route path="/note/systemnote" component={SystemnoteNote} />
            <Route path="/note/week/1" component={WeekNote} />
            <Route path="/note" component={Note} />
            <Route exact path="/project" component={Project} />
            <Route path="/project/:id" component={ProjectView} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
           
            <Route pate="/:id"> 404 </Route>
          </Switch>
        </div>

        <Footer/>
      </main>
    )
  } 
}

export default App;
