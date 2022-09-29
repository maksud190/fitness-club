import React from 'react';
import './Card.css';

const Card = (props) => {

    const {image, name, detail, timeRequired} = props.activity;

//    const {handleAddToExercise} = props;


    return (
        <div className='card-view'>
            <div>
                <img src={image} alt="" />
                <h4>Name: {name}</h4>
                <p><small>Benefits: {detail}</small></p>
                <p>Time Required: {timeRequired} min</p>
            </div>
            <button onClick={() => props.handleAddToExercise(props.activity)} className='btn-add'>Add to List</button>
        </div>
    );
};

export default Card;