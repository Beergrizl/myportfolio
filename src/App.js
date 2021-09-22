import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Progects from "./progects/projects";
import JobOffer from "./job offer/jobOffer";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Progects/>
            <JobOffer/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
