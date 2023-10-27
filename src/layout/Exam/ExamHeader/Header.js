import './style.scss';
import React, { useEffect } from 'react'
import Timer from '../../../component/Timer/Timer'
import { useNavigate } from 'react-router-dom'

export default function Header({initialTime}) {
    const navigate = useNavigate();
    const onTimeUp = () => {
        localStorage.setItem('finishedTime', Date.now());
        navigate('/finished');
    }

    return (
        <div className='examHeader'>
            <div className='headerComponent left'>
                <h1>{localStorage.getItem('examCode')}</h1>
            </div>
            <div className='headerComponent'>
                <Timer initialTime={initialTime} onTimeUpEvent={onTimeUp}/>
            </div>
        </div>
    )
}
