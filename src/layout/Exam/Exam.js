import React, { useEffect, useState } from 'react'
import './style.scss';
import CallAPI from './ExamService'
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import QuestionForm from '../../component/Form/QuestionForm';
import Header from './ExamHeader/Header';

export default function Exam() {
    
    // Define useStates.
    const [info, setInfo] = useState("");
    const [questionList, setQuestionList] = useState([]);

    const navigation = useNavigate();

    const onSubmit = () => {
        localStorage.setItem('finishedTime', Date.now());
        navigation('/finished');
    }

    useEffect(() => {
        if (localStorage.getItem('email') === "null" || localStorage.getItem('examCode') === "null") {
            navigation('/');
        }

        if (localStorage.getItem('startTime') == null) {
            localStorage.setItem('startTime', Date.now())
        }

        CallAPI("http://localhost:1880/quizz/1")
        .then ((res) => {setInfo(res.id); setQuestionList(res.lsQuizz); console.log(`Created exam from exam code: ${res.id}.`);})
    }, []);

    return (
        <div className='exam-window'>
            <Header initialTime={3600}/>
            {questionList.map((v, i) => {return <QuestionForm key={i} question={v} answerList={v.answer} />})}
            <SubmitButton onclickEvent={onSubmit} text="Submit."/>
        </div>
    )
}
