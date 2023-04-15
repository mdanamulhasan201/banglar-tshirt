import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
           <h2>This is friend </h2> 
           {/* {ring && <p><small>Ring: Diamond</small></p>} */}
           <p>{ring}</p>
        </div>
    );
};

export default Friend;