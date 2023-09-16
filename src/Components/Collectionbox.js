import React from 'react'

const Collectionbox = () => {
    return (
        <div>
            <div>
                <h3>Related Collections</h3>
                <div className='questions'>
                    <i class="fa fa-question circle1" aria-hidden="true"></i>
                    <p className='question'>Questions</p>
                </div >
                <div className='questions'>
                    <i class="fa fa-users circle1" aria-hidden="true"></i>
                    <p className='team'>Teams</p>
                </div>
                <div className='questions'>
                    <i class="fa fa-calendar circle1" aria-hidden="true"></i>
                    <p className='event'>Events</p>
                </div>
            </div>
        </div>
    )
}

export default Collectionbox