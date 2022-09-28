import React, { useEffect, useState } from 'react';
import './MainPage.css';

const MainPage = () => {

    const [activities, setActivities] = useState([]);

    useEffect( () => {
            fetch('activityData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    },[])


    return (
        <div className='main-page'>
            <div className='cards-container'>
                <h2>Active Sports Club</h2>
            </div>
            <div className='info-container'>
                <p>My information</p>
            </div>
        </div>
    );
};

export default MainPage;