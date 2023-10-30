import './style.scss';
import React from 'react'
import Timer from '../../../component/Timer/Timer'
import { useNavigate } from 'react-router-dom'

export function Header({initialTime}) {
    const navigate = useNavigate();
    const onTimeUp = () => {
        localStorage.setItem('finishedTime', Date.now());
        navigate('/finished');
    }

    return (
        <div className='examHeader'>
            <div className='headerComponent left'>
                <h1>{JSON.parse(localStorage.getItem('exam')).id}</h1>
            </div>
            <div className='headerComponent'>
                <Timer initialTime={initialTime} onTimeUpEvent={onTimeUp}/>
            </div>
        </div>
    )
}
