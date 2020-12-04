import { React } from 'react';

export const ChannelMenu = (
    <nav className="channel__various-group">
        <h3 className="channel__various-title">Выбери тематику</h3>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Наука</span>
        </a>
        <a href="#" className="channel__various-item active"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Криминал</span>
        </a>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Свеженькое</span>
        </a>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Мимими</span>
        </a>
        <a href="#" className="channel__various-item"> 
            <img className="channel__various-avatar"/>
            <span className="channel__various-text">Искусство</span>
        </a>
    </nav>
);
    
export default ChannelMenu;
