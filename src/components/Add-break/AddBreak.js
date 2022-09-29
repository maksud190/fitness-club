import React from 'react';
import './AddBreak.css';

const AddBreak = () => {
    return (
        <div>
            <div>
                <h5>Add Break</h5>
            </div>
            <div className='btns'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
            </div>
        </div>
    );
};

export default AddBreak;