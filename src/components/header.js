import React from 'react';
import Logo from './logo';

function Header (){

    return (
        <>
            <div className='header_container dusty-grass-gradient'>

                <div className='nav_holder'>
                    
                    <button className='button1'><Logo /></button>
                    <button className='button2'>Concert Tickets</button>
                    <button className='button3'>Sports Tickets</button>
                    <button className='button4'>Theater Tickets</button>
                    <button className='button5'>Festival Tickets</button>
                </div>

                <div className='text_container'>
                    <h3 className='name'>Elton John Tickets</h3>  
                </div>

                <div className="bottom_link container">
                    <a href="/" className='ordered_text'>Home</a>
                    <a href="/Concert-Tickets" className='ordered_text'>Concert Tickets</a>
                    <a href="/Concert-Tickets/Rock-and-Pop" className='ordered_text'>Rock and Pop</a>
                    <span>Elton John</span>
                </div>

                <div className='img_container'>
                    <img className="img img-thumbnail" src='https://cdn.viagogo.net/img/cat/4508/1/37.jpg' alt='#'/>
                </div>

                   <div className="circle float-sm-left ">
                    <div className="circle-text float-xl-left">
                        <div className="top_bottom_line caps ">
                            <span className="top_text ">tickets</span>
                            <span className="bottom_text">On Sale Today</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header;