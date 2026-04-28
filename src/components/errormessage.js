import React from 'react';

const ErrorMessage = ({message = 'Whoops! Something went wrong', onRetry}) => {
    return (
        <div className='error-containter'>
            <p>{message}</p>
            {onRetry && (<button onClick={onRetry}>Try Again</button>)}
        </div>
    );
}

export default ErrorMessage;