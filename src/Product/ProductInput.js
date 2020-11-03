import React, { useState } from 'react';

const productInput = () => {
    return (
        <form>
            <div>
                <label>
                    Category:
          <input type="text" name="category" />
                </label>
            </div>
            <div>
            <label>
                Produce:
                    <select name="produce">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            </div>

            <div>
            <label>
                Name:
          <input type="text" name="name" />
            </label>
            </div>
            <div>
            <label>
                Price:
          <input type="text" name="price" />
            </label>
            </div>


<div>
            <label>
                Quantity:
          <input type="text" name="quantity" />
            </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}


export default productInput;