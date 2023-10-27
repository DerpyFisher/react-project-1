import React from 'react'
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ctx } from '../../CtxData';

export default function Finished() {
    const context = useContext(ctx);
    const navigation = useNavigate()

    const isFinished = !(localStorage.getItem('finishedTime') == null);

    const cleanUp = () => {
        if (!isFinished) {
            navigation('/exam');
        }
        else {
            localStorage.clear();
            context.setExamInformation("");
            navigation('/')
        }
    }
  
    return (
    <div className='finishedScreen'>
        <h1>{isFinished?"You have finished the test!":"Hey, you are not suppose to be here! get back to your exam."}</h1>
        <SubmitButton onclickEvent={cleanUp} text={isFinished?"Back to home":"Back to exam."}/>
    </div>
  )
}
