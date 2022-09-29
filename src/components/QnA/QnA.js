import React from 'react';

const QnA = () => {
    return (
        <div>
            <div className='qna'>
          <div>
            <h4>How does ReactJs work ?</h4>
            <p> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
          </div>
          <div>
            <h4>Difference between Props and state ?</h4>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
          </div>
          <div>
            <h4>what are the uses of useEffect in react except data loading ?</h4>
            <p>
              <li>Running on state change: validating input field</li> 
              <li>Running on state change: live filtering</li>
              <li>Running on state change: trigger animation on new array value</li>
              <li>Running on props change: update paragraph list on fetched API data update</li>
              <li>Running on props change: updating fetched API data to get BTC updated price</li>
            </p>
          </div>
      </div>
        </div>
    );
};

export default QnA;