import React from 'react';
import EltonJohnEvents from '../API/EltonJohnEvent.js';
import AdvanceSearch from './advanceSearch';
//-------CSS
import '../Styles/Search.css';

function Search(){

    return (
        <div className="search container">
            <div className=" search-location container">
                <p className="tpt">Search by location</p>
                    <select id="searchInEvent" tabindex="-1" className="select2-hidden-accessible" aria-hidden="true">
                        <option value="all" selected="selected">All cities</option>
                        {
                        EltonJohnEvents.Items.map((event)=>{
                            return <option value="all" selected="selected">{event.VenueCity}</option>
                        })
                        }
                    </select>
            </div>
                <AdvanceSearch />
            <div>
                
            </div>
    </div>
    )
}

export default Search;