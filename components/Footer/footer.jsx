import React from 'react';
import './footer.css';
import gmail from '../../assets/gmail.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'


const Footer = () => {
    return (
        <footer className='footerstyle'>
            <p>Reach out to me via</p>
            <div className='linkstyle'>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer">
                    <div className='gmaillink'><img src={gmail} /></div>
                </a>
                <a href="https://www.linkedin.com/in/amna-tariq-29133523b/" target="_blank" rel="noopener noreferrer">
                    <div className="linkedinlink"><img  src={linkedin}/> </div>
                </a>
                <a href="https://github.com/helloworld-at" target="_blank" rel="noopener noreferrer">
                    <div className="githublink"><img src={github}/></div>
                </a>
            </div>
        </footer>
    );
};


export default Footer;