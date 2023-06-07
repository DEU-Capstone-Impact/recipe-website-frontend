import React from 'react';

const NotFound = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
    };

    return (
        <div style={style}>
            <h1>404 Error</h1>
        </div>
    );
};
  
export default NotFound;
