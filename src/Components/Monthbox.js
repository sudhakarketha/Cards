import React from 'react'

const Monthbox = () => {
    return (
        <div>
            <h3>Last month</h3>
            <div className='details'>
                <div className='circle AS'>AS</div>
                <div className='content'>
                    <h5 className='name'>Alex Schmidt</h5>
                    <div className='answer'>22 answers</div>
                </div>
            </div>
            <div className='details'>
                <div className='circle DC'>DC</div>
                <div className='content'>
                    <h5 className='name'>Dolores Cisco</h5>
                    <div className='answer'>14 answers</div>
                </div>
            </div>
            <div className='details'>
                <div className='circle GH'>GH</div>
                <div className='content'>
                    <h5 className='name'>George Hillr</h5>
                    <div className='answer'>9 answers</div>
                </div>
            </div>
            <div className='details one'>
                <div className='circle RH'>RH</div>
                <div className='content'>
                    <h5 className='name'>Richard Harward</h5>
                    <div className='answer'>4 answers</div>
                </div>
            </div>

            <a href="#">see all</a>

        </div>
    )
}

export default Monthbox