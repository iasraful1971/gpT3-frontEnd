import './App.css';
import './components/Article/Article';
import './components/Brand/Brand';
import Brand from './components/Brand/Brand';
import './components/Cta/Cta';
import Cta from './components/Cta/Cta';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import { Blog, Features, Footer, Header, Possibility, WhatGA } from './containers';
function App() {
  return (
    <div className="App">
         <div className="gradient__bg">
            <Navbar></Navbar>
            <Header></Header>
         </div>
         <Brand></Brand>
            <WhatGA></WhatGA>
            <Features></Features>
            <Possibility></Possibility>
            <Cta></Cta>
            <Blog></Blog>
            <Footer></Footer>
    </div>
  );
}

export default App;
