import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './MainPage.css';

const MainPage = () => {

    const [activities, setActivities] = useState([]);

    useEffect( () => {
            fetch('activityData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    },[]);


    return (
        <div className='main-page'>
            <div className='cards-container'>
                {
                    activities.map(activity => <Card
                        key={activity.id}
                        activity={activity}
                    ></Card>)
                }
            </div>
            <div className='info-container'>
                <p>My information</p>
            </div>
        </div>
    );
};

export default MainPage;