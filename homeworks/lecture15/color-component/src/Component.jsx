import React, {useState} from "react";

function Component({index, n, color, handleNameChange}){

    return (
        <div
            key={index}
            className="component-box"
            style={{ backgroundColor: color[index] || '#eee' }}
          >
            <input
              type="text"
              value={n}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="name-input"
            />
          </div>
    )

}

export default Component;