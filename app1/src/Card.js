import React from "react";

const Card = ({ name, email, id}) => {
    return (
            <div className='bg-light-green grow dib ma2 shadow-5 br3'>
                <img src={`https://robohash.org/${name}`} alt={id}/>
                <div className="tc">
                    <h3> {name} </h3>
                    <p> {email} </p>
                </div>
            </div>
    ); 
}

export default Card;