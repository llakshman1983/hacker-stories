import React, { useState } from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">        
            <label>
                username:  <b>{props.username} </b>
            </label>              
        </div>
    );
};

export default UserOutput;