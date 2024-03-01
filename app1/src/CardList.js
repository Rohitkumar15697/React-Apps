import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {
    const cardsArray = robots.map((robo) =>{
        return ( 
            <Card 
                key={robo.id} 
                id={robo.id} 
                name={robo.name} 
                email={robo.email} 
            />
        )
    });
    return (
        <div>
            { cardsArray }
        </div>
    );
}
export default CardList;