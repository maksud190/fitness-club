import React from 'react';
import image from '../../images/maksud.jpg';
import AddBreak from '../Add-break/AddBreak';
import ExerciseDetail from '../Exercise-details/ExerciseDetail';
import './MyInfo.css';


const MyInfo = () => {
    return (
        <div className='for-sticky'>
            <div className='info-container'>
                <img src={image} alt="" />
                <div>
                    <p><small>Maksudur Rahaman</small></p>
                </div>
            </div>
            <div className='my-container'>
            <div className='physical-health'>
                <div>
                    <p>56 KG</p>
                </div>   
                <div>
                    <p>5.5 fit</p>
                </div>   
                <div>
                    <p>21 Years</p>
                </div>   
            </div>
                <p className='bmi'>BMI: 19</p>
            </div>
            
            <div>
                <AddBreak></AddBreak>
            </div>
            <div>
                <ExerciseDetail></ExerciseDetail>
            </div>
        </div>
        
    );
};

export default MyInfo;