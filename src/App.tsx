import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Earth from "./Components/Earth";
import Jupiter from "./Components/Jupiter";
import Mars from "./Components/Mars";
import Mercury from "./Components/Mercury";
import Neptune from "./Components/Neptune";
import Saturn from "./Components/Saturn";
import Uranus from "./Components/Uranus";
import Venus from "./Components/Venus";
import burger from "./assets/icon-hamburger.svg";
import { useState } from "react";
import venus1 from './assets/planet-venus.svg';
import mercury1 from "./assets/planet-mercury.svg";
import earth1 from "./assets/planet-earth.svg";
import mars1 from "./assets/planet-mars.svg";
import jupiter1 from "./assets/planet-jupiter.svg";
import uranus1 from "./assets/planet-uranus.svg";
import neptune1 from "./assets/planet-neptune.svg";
import saturn1 from "./assets/planet-saturn.svg";
import direction from "./assets/icon-chevron.svg";








function App() {
  const [isburger, setIsburger] = useState<any>(false);
  const [page, setPage] = useState(1);

  return (
    <>
    
      <header>
        <h1>
          <Link to="/Mercury"> THE PLANETS </Link>
        </h1>
        <img
          onClick={() => {
            setIsburger(!isburger);
          }}
          className="hamburger"
          src={burger}
        />
        <nav>
          <ul>
            <li>
              <Link to="/Mercury" onClick={() =>{
                setPage(1)
              }} className={page === 1 ? 'activated' : ''}> Mercury</Link>
            </li>
            <li>
              <Link to="/Venus" onClick={() =>{
                setPage(2)
              }}  className={page === 2 ? 'activated' : ''}> Venus</Link>
            </li>
            <li>
              <Link to="/Earth" onClick={() =>{
                setPage(3)
              }} className={page === 3 ? 'activated' : ''}> Earth</Link>
            </li>
            <li>
              <Link to="/Mars" onClick={() =>{
                setPage(4)
              }}  className={page === 4 ? 'activated' : ''}> Mars</Link>
            </li>
            <li>
              <Link to="/Jupiter" onClick={() =>{
                setPage(5)
              }}  className={page === 5 ? 'activated' : ''}> Jupiter</Link>
            </li>
            <li>
              <Link to="/Saturn" onClick={() =>{
                setPage(6)
              }}  className={page === 6 ? 'activated' : ''}> Saturn</Link>
            </li>
            <li>
              <Link to="/Uranus"  onClick={() =>{
                setPage(7)
              }} className={page === 7 ? 'activated' : ''}> Uranus</Link>
            </li>
            <li>
              <Link to="/Neptune"  onClick={() =>{
                setPage(8)
              }} className={page === 8 ? 'activated' : ''}> Neptune</Link>
            </li>
          </ul>
        </nav>
      </header>
      {isburger ? (
        <div className="burgershow">
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(1)
              }} className={page === 1 ? 'activated' : ''} to="/Mercury"><div className="positioner"><img src={mercury1}/> Mercury </div> <img className="directioner" src={direction}/> </Link>
            </li>
          </div>
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(2)
              }} className={page === 2 ? 'activated' : ''} to="/Venus"><div className="positioner"><img src={venus1}/> Venus </div><img className="directioner" src={direction}/> </Link>
            </li>
          </div>
          <div className="burdiv">
            {" "}
            <li>
              <Link onClick={() =>{
                setPage(3)
              }} className={page === 3 ? 'activated' : ''} to="/Earth"><div className="positioner"><img src={earth1}/> Earth </div> <img className="directioner" src={direction}/></Link>
            </li>
          </div >
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(4)
              }} className={page === 4 ? 'activated' : ''} to="/Mars"><div className="positioner"><img src={mars1}/> Mars </div> <img className="directioner" src={direction}/></Link>
            </li>
          </div>
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(5)
              }} className={page === 5 ? 'activated' : ''} to="/Jupiter"><div className="positioner"><img src={jupiter1}/> Jupiter </div> <img className="directioner" src={direction}/></Link>
            </li>
          </div>
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(6)
              }} className={page === 6 ? 'activated' : ''} to="/Saturn"><div className="positioner"><img src={saturn1}/> Saturn </div> <img className="directioner" src={direction}/></Link>
            </li>
          </div>
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(7)
              }} className={page === 7 ? 'activated' : ''} to="/Uranus"> <div className="positioner"><img src={uranus1}/> Uranus </div><img className="directioner" src={direction}/></Link>
            </li>
          </div>
          <div className="burdiv">
            <li>
              <Link onClick={() =>{
                setPage(8)
              }} className={page === 8 ? 'activated' : ''} to="/Neptune"> <div className="positioner"><img src={neptune1}/> Neptune </div><img className="directioner" src={direction}/> </Link>
            </li>
          </div>
        </div >
      ) : null}
      <div className="App">
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="/Mercury" element={<Mercury />} />
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/Mars" element={<Mars />} />
          <Route path="/Jupiter" element={<Jupiter />} />
          <Route path="/Saturn" element={<Saturn />} />
          <Route path="/Uranus" element={<Uranus />} />
          <Route path="/Neptune" element={<Neptune />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
