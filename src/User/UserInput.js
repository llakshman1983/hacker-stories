import React, { useState } from 'react';


const UserInput = (props) => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        User Name:  <input type="text" name="username"  onChange={props.change}/>
                    </label>
                </div>
               </form>
        </div>
    );
};

export default UserInput;