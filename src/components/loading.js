import React from 'react';

const Loading = ({message = 'Loading...'}) => {
    return (
        <div className='loading-container'>
            <p>{message}</p>
        </div>
    );
}

export default Loading;