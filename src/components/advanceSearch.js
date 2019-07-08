import React from 'react';

//-----CSS
import '../Styles/AdvanceSearch.css';

export default ()=>{
    return (
        <div className='searcha container'>
            <div className="search-advance container">
            
                <div className="">
                    <div className="xl">Advanced search:</div>
                    <div className="t xs">For more personalised options</div>
                </div>

            <div>
                <form method="get" action="https://www.viagogo.com/secure/search" novalidate="novalidate">
                    <input type="hidden" name="q" value="Elton John" />
                    <input id="advancedSearch" type="submit" value="Click Here" className="btn btn_color"/>
                </form>
            </div>

            </div>
        </div>
    )
}