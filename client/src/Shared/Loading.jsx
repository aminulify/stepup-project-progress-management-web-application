import React from 'react';
import {GridLoader} from 'react-spinners';
const Loading = () => {
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
            <GridLoader color="#a855f7" />
        </div>
    );
};

export default Loading;