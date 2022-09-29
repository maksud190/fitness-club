import React from 'react';
import image from '../../images/maksud.jpg';
import AddBreak from '../Add-break/AddBreak';
import './MyInfo.css';


const MyInfo = ({exercise}) => {
    

    let total = 0;
    for(const exe of exercise){
        total = total + parseFloat(exe.timeRequired);
        // shipping = shipping + product.shipping;
    }

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
                    <p>56KG</p>
                </div>   
                <div>
                    <p>5.5fit</p>
                </div>   
                <div>
                    <p>21Years</p>
                </div>   
            </div>
                <p className='bmi'>BMI: 19</p>
            </div>
            
            <div>
                <AddBreak></AddBreak>
            </div>
            <div className='exercise-detail'>
                <div><h5>Exercise Details</h5></div>
                <div>
                    <p>Exercise Time: {total}</p>
                </div>
                <div>
                    <p>Break Time: </p>
                </div>
            </div>
        </div>
        
    );
};

export default MyInfo;