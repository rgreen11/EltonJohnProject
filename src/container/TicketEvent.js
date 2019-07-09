import React from 'react';
import Header from '../components/header';
import Views from '../components/views';
import List from '../components/list';
import EltonJohnEvents from '../API/EltonJohnEvent';
//----------------CSS
import '../Styles/TicketEvent.css';
import SearchLocation from '../components/searchLocation';

class TicketEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            location:''
        }
    }

    updateLocation = (event) => {
        let location = event.target.value
        console.log(location)
        EltonJohnEvents.Items.forEach((event)=>{
            if( event.VenueCity === location){
                this.setState({ location: event })
            } else if(event.VenueCity === 'All cities'){
                this.setState({ location: 'All cities' })
            }
        })
        

    }


    render(){
    let {location} = this.state;
        return (<>
        <div className='header_page'>
            <Header />
        </div>

        <div className='views'>
            <Views />
        </div>

        <div>
            <SearchLocation updateLocation={this.updateLocation}/>
        </div>
        <div>
            <List location={location}/>
        </div>
            </>
        );
    }
    
}

export default TicketEvent;