import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <input type='search' onChange={searchChange} className="pa3 bg-lightest-blue" placeholder="Search Robots..."/>
    )
}
export default SearchBox