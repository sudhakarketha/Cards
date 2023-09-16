import React, { useState } from 'react';
// import './FollowButton.css'; // Create a CSS file for styling

function Followbox() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div>
                <ul>
                    <li className='resources btn1' onClick={toggleDropdown}>Follow<i className={`fa ${isDropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`} arial-hidden='true'></i></li>
                </ul>
                {isDropdownOpen &&(
                    <ul className='dropdown'>
                        <div className='dropdown-content'>
                            <h4>Get updates by</h4>
                            <div className='nav'>
                                <li className='active'>Email</li>
                                <li>RSS</li>
                            </div>
                            <hr />

                            <p>Please <a href="#">log in</a> to sign up for email updates and new posts</p>
                        </div>
                    </ul>
                )}
            </div>

        </>
    );
}

export default Followbox;
