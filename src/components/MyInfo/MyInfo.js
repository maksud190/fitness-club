import React, { useState } from 'react';
import image from '../../images/maksud.jpg';
import './MyInfo.css';


const MyInfo = ({exercise}) => {

    const [breakbtn, setBreakBtn] = useState(0);
    const storage = localStorage.getItem('Break time')
    const tenSec = ()=> {
        setBreakBtn(10);
        localStorage.setItem('Break time', 10)
    }
    const twentySec = ()=> {
        setBreakBtn(20);
        localStorage.setItem('Break time', 20)
    }
    const thirtySec = ()=> {
        setBreakBtn(30);
        localStorage.setItem('Break time', 30)
    }
    const fortySec = ()=> {
        setBreakBtn(40);
        localStorage.setItem('Break time', 40)
    }
    

    let total = 0;
    for(const exe of exercise){
        total = total + parseFloat(exe.timeRequired);
        
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

            <div className='btns'>
                <button onClick={tenSec}>10s</button>
                <button onClick={twentySec}>20s</button>
                <button onClick={thirtySec}>30s</button>
                <button onClick={fortySec}>40s</button>
            </div>
            
            <div className='exercise-detail'>
                <div><h5>Exercise Details</h5></div>
                <div>
                    <p>Exercise Time: {total}</p>
                </div>
                <div>
                    <p>Break Time: {storage}</p>
                </div>
            </div>
        </div>
        
    );
};

export default MyInfo;