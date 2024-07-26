import React, { useContext } from 'react';
import detectiveImg from '../../assets/images/detektiv.png';
import fantasticImg from '../../assets/images/fantastic.png';
import prikluchenieImg from '../../assets/images/prikluchenie.png';
import nauchnayaImg from '../../assets/images/nauchnaya.png';
import { useNavigate } from 'react-router-dom';

const HomeCategory = () => {

    const navigate = useNavigate()
    return (
        <div className='mt-[60px]'>
            <div className="container w-[90%] flex items-start flex-col gap-[40px]">
                <h1 className='text-[40px] font-bold'>Категори</h1>
                <div className="flex items-center gap-[50px]">
                    <img src={detectiveImg} alt="" className='cursor-pointer' onClick={()=> {
                        navigate('/detective')
                    }}/>
                    <img src={fantasticImg} alt="" className='cursor-pointer' onClick={()=> {
                        navigate('/fantastic')
                    }}/>
                    <img src={prikluchenieImg} alt="" className='cursor-pointer' onClick={()=> {
                        navigate('/adventure')
                    }}/>
                    <img src={nauchnayaImg} alt="" className='cursor-pointer' onClick={()=> {
                        navigate('/scientific')
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;