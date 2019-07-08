import React from 'react';
import Header from '../components/header';
import Views from '../components/views';
import List from '../components/list';
//----------------CSS
import '../Styles/TicketEvent.css';
import SearchLocation from '../components/searchLocation';

class TicketEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }


    render(){
        return (<>
        <div className='header_page'>
            <Header />
        </div>

        <div className='views'>
            <Views />
        </div>

        <div>
            <SearchLocation />
        </div>
        <div>
            <List />
        </div>
            </>
        );
    }
    
}

export default TicketEvent;