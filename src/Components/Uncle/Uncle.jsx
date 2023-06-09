import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Gandapa/Gandapa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
           <h2>This uncle</h2> 
           <p><small>grandpa money: {money}</small></p>
           <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
           <section className='flex'>
            <Cousin>Nabil</Cousin>
            <Cousin>Nabila</Cousin>
           </section>
        </div>
    );
};

export default Uncle;