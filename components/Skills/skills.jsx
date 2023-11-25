import React from 'react';
import './skills.css';
import problemsolving from '../../assets/problem-solving.png'
import content from '../../assets/writing.png'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import c from '../../assets/letter-c.png'




const Skills = () => {
    return (
      <section className='skills'id='Skills'>
        <div className='title'><h1>About Me</h1></div>
        <div className='htmlcss'><h3>I am proficient in HTML and CSS and have showcased my ability by various projects. With a passion of writing and storytelling I also am skilled in expressing ideas through words.</h3></div>
        <div className="box1">
            <h1>Programming Languages</h1>
            <img src={html} className='html' alt=''></img>
            <img src={css} className='css'></img>
            <img src={c} className='c'></img>
        </div>
        <div className="box2">
            <h2>Problem Solving</h2>
            <img src={problemsolving} className='problemsolving' alt=''></img>
            <div className="htmltext">
                <p></p>
            </div>
        </div>
        <div className="box3">
            <h2>Content Writing</h2>
            <img src={content} className='writing' alt=''></img>
            <div className="writing-disc">
                <p></p>
            </div>
        </div>
      </section>
      
    )

}

export default Skills;