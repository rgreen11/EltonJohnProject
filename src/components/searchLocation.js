import React from 'react';
import EltonJohnEvents from '../API/EltonJohnEvent.js';
import AdvanceSearch from './advanceSearch';
//-------CSS
import '../Styles/Search.css';




class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="search container">
                <div className=" search-location container">
                    <p className="tpt">Search by location</p>
                    <select id="searchInEvent" tabindex="-1" className="select2-hidden-accessible" aria-hidden="true" onChange={(event) => { this.props.updateLocation(event) }}>
                        <option selected="selected" >All cities</option>
                        {
                            EltonJohnEvents.Items.map((event) => {
                                return <option selected="selected">{event.VenueCity}</option>
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
}

export default Search;