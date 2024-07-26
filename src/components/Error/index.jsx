import React from 'react';
import error from '../../assets/images/error.png'

const Error = () => {
    return (
        <div className='mt-[70px]'>
           <div className="container">
            <div className="flex items-center justify-center flex-col gap-[40px]">
                <img src={error} alt="" />
                <h1 className='text-[40px] text-blue-900 font-bold'>Ошибка при странице!</h1>
            </div>
           </div>
        </div>
    );
};

export default Error;