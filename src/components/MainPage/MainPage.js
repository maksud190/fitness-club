import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import MyInfo from '../MyInfo/MyInfo';
import './MainPage.css';
import logo from '../../images/logo.jpg';

const MainPage = () => {

    const [activities, setActivities] = useState([]);

    const [exercise, setExercise] = useState([]);

    useEffect( () => {
            fetch('activityData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    },[]);

    const handleAddToExercise = (activities) =>{
        console.log(activities);
        const newExercise = [...exercise, activities];
        setExercise(newExercise);
    }




    return (
        <div>
            <div className='heading-container'>
                <img src={logo} alt="" />
                <h2 className='heading'>Fitness Club</h2>
            </div>
            <div className='main-page'>
            
                <div className='cards-container'>
                
                    {
                        activities.map(activity => <Card
                            key={activity.id}
                            activity={activity}
                            handleAddToExercise={handleAddToExercise}
                        ></Card>)
                    }
                </div>
                <div className='activity-side'>
                    
                    <MyInfo exercise={exercise}></MyInfo>
                </div>
            </div>
            
        </div>
        
    );
};

export default MainPage;