import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import JobOffer from "./job offer/jobOffer";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";
import Projects from "./progects/projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<JobOffer/>*/}
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
