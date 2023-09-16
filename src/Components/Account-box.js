import React from 'react'

const Accountbox = () => {
    return (
        <div>
            <header>
                <h3 className='account'>Connect Your account</h3>
                <i class="fa fa-times" aria-hidden="true"></i>
            </header>

            <hr />

            <main>
                <div className='details one'>
                <div className='circle IG'>IG</div>
                <div className='content'>
                    <h5 className='name'>Ildiko Gaspar</h5>
                    <div className='mail'>ildiko@email.com</div>
                </div>
                </div>
                <button className='btn'>Continue as ildiko Gaspar</button>
            </main>
           
           

        </div>
    )
}

export default Accountbox