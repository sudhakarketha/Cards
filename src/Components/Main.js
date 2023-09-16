import React from 'react';

import './Main.css';
import Accountbox from './Account-box';
import Monthbox from './Monthbox'
import Collectionbox from './Collectionbox';
import Followbox from './Followbox';

const Main = () => {
    return (
        <div className='main'>
            <div className='body'>
                <div className='box box1'>
                    <Accountbox />
                </div>
                <div className='box box2'>
                    <Monthbox />
                </div>
                <div className='box box3'>
                    <Collectionbox/>
                </div>
                <div className='box box4'>
                    <Followbox />
                </div>
            </div>
        </div>
    )
}

export default Main