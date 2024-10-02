import React from 'react';
import './Style.css';

const Search = ({open}) => {
    return (
        <div className={`${open? 'opened' : ''}`}>
            <div className="search_body">
               <form action="">
                 <input type="text" placeholder='search' />
                 <button>Search</button>
               </form>
            </div>
        </div>
    );
};

export default Search;