import React, { useContext } from 'react';
import { MoneyContext } from '../Gandapa/Gandapa';

const Sister = () => {
    const [money] = useContext(MoneyContext);


    return (
        <div>
         <h2>This is sister</h2>
         <p><small>grandpa money : {money}</small></p>
        </div>
    );
};

export default Sister;