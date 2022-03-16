import React from 'react';

/* Prop Object
{
    key:value,
    key:value,
    key:value

    name: 'April',
    favoriteShow: 'The King of Queens'
    admin:true
}



*/
const UserProfile = props => {

    let role = '';
    if (props.admin) {
        role = 'admin';
    } else {
        role = 'guest';
    }


    return (
        <div>
            <h1>
            <span className='badge bg-primary'>{role}</span>My name is {props.name}, and my favorite show is {props.favoriteShow}.
            </h1>
        </div>
    );
}

export default UserProfile;