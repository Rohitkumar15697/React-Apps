import React from 'react';
import './title.css';

const PageTitle = (props) => {
    return (
        <div className='tc'>
            <h1 className='f1'>{props.title}</h1>
        </div>
    )
}
export default PageTitle;