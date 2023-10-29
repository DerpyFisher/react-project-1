import React, { useContext, useEffect, useState } from 'react'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import QuestionForm from '../../component/Form/QuestionForm';
import Header from './ExamHeader/Header';
import { shuffle } from '../../utils/shuffleQuestion';
import {ctx} from '../../CtxData';

export default function Exam() {
    
    // Define useStates.
    const [questionList, setQuestionList] = useState([]);

    // Define useContext
    const context = useContext(ctx);

    // Navigation between tabs.
    const navigation = useNavigate();

    const onSubmit = () => {
        localStorage.setItem('finishedTime', Date.now());

        navigation('/finished');
    }

    useEffect(() => {
        if (localStorage.getItem('email') === "null" || localStorage.getItem('exam') === "") {
            navigation('/');
            return;
        }
        const jsonObject = JSON.parse(localStorage.getItem('exam'));


        setQuestionList(shuffle(Object.values(jsonObject.lsQuizz)));

    }, []);

    return (
        <div className='exam-window'>
            <Header initialTime={3600-parseInt((Date.now() - parseInt(localStorage.getItem("startTime")))/1000)}/>
            {Object.values(questionList).map((v, i) => {return <QuestionForm key={i} question={v}/>})}
            <SubmitButton onclickEvent={onSubmit} text="Submit."/>
        </div>
    )
}
