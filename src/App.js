import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Speakers from './components/speakers';
import ContactForm from './components/contactForm';
import Footer from './components/footer';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Header/>
        <Speakers/>
        <ContactForm/>
        <Footer/>
      </React.Fragment>
     );
  }
}
 
export default App;
