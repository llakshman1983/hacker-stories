import React, { useState } from 'react';

const userOutput = (props) => {
    return (
        <div>        
            <label>
                username:  {props.name}
            </label>              
        </div>
    );
};

export default userOutput;