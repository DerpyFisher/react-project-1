import React from 'react'
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom';

export default function Finished() {
    
    const navigation = useNavigate()

    const cleanUp = () => {
        if (localStorage.getItem('finishedTime') == null) {
            navigation('/exam');
        }
        else {
            localStorage.clear();
            navigation('/')
        }
    }
  
    return (
    <div className='finishedScreen'>
        <h1> You have finished the test! </h1>
        <SubmitButton onclickEvent={cleanUp} text={"Back to home"}/>
    </div>
  )
}
