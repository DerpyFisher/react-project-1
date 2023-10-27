import React, { useEffect, useState } from 'react'
import './style.scss'
import { formatTime } from '../../utils/timeCalculation';

/**
 * A simple looking timer.
 * 
 * @param initialTime the amount of time before triggering the function of the onTimeUpEvent parameter.
 * @param onTimeUpEvent The function will be triggered when the timer is up.
 * @returns a timer element.
 * @version 1.0.0.0
 */
export default function Timer({initialTime, onTimeUpEvent}) {
    // Count down for the seconds.
    const [secondsLeft, setSecondsLeft] = useState(initialTime);

    // First time render useEffect
    useEffect(() => {
        setTimeout(() => {
            if (secondsLeft > 0) {
                setSecondsLeft(secondsLeft - 1);
            }
            else {
                onTimeUpEvent();
            }
        }, 1000);
    }, [secondsLeft])

  return (
    <span className='examTimer'>{formatTime(secondsLeft)}</span>
  )
}
