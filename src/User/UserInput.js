import React, { useState } from 'react';

const userInput = () => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        User Name:  <input type="text" name="username" />
                    </label>
                </div>
               </form>
        </div>
    );
};

export default userInput;