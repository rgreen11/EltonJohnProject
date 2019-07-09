import React from 'react';
import EltonJohnEvents from '../API/EltonJohnEvent';
import moment from 'moment';
//--------CSS
import '../Styles/list.css';



export default ({location}) => {

    if(location){
        return (
            <div className='list rowww container'>
                <div className='date_time '>
                <div className='eventTime'>
                    <time className='dateTime'>
                    {moment(location.Date).format('dddd')}, { moment(location.Date).format('MMMM Do YYYY')}
                    <p>{moment(location.DateVal).format('LT')}</p>
                    </time>
                    <p>{location.IsSellingFast ? <p className='selling'>Selling Fast</p>: ''}</p>
                    </div>
                </div>
    
                <div className='location'>
                    <div className='eventLocation' >
                    <p>{location.EventName}</p>
                    <p>{location.VenueName}, {location.VenueCity}</p>
                    <button className='btn b'>See Details</button>
                    </div>
                </div>
            </div>
    
        )
    } 

    return (
        <div className='list rowww container'>
            <div className='date_time '>
                
                {
                   EltonJohnEvents.Items.map((event)=>{

                       return (<div className='eventTime'>
                           <time className='dateTime'>
                          {moment(event.Date).format('dddd')}, { moment(event.Date).format('MMMM Do YYYY')}
                          <p>{moment(event.DateVal).format('LT')}</p>
                           </time>
                           <p>{event.IsSellingFast ? <p className='selling'>Selling Fast</p>: ''}</p>
                           </div>
                       )
                   })
                }
            </div>

            <div className='location'>
                {EltonJohnEvents.Items.map((event)=>{
                  return (<div className='eventLocation' >
                        <p>{event.EventName}</p>
                        <p>{event.VenueName}, {event.VenueCity}</p>
                        <button className='btn b'>See Details</button>
                        </div>
                  ) 
                })}
                
            </div>
        </div>

    )
}