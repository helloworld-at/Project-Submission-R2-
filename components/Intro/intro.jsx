import React from "react";
import './intro.css';
import me from '../../assets/me.jpg';
import btnimg from '../../assets/btn-img.png';


const Intro = () => {
    return (
        <section class="intro" id="Home">
            <img src={me} alt="Profile" className="me"/>
            <div className="content">
            <div className="hello"><h2>Hello!</h2></div>
            <p>I am<span className="name"> Amna</span> a Web developer.</p>
            <div className="para">I am an enthusiastic coder who specializes in Website designing and developing.</div>
            <button className="btn"><img src={btnimg} alt="button image"/>Hire me</button>
            </div>
      </section>
      
    );
}

export default Intro;