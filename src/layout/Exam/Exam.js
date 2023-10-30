import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import { QuestionForm } from '../../component/Form/QuestionForm';
import { Header } from './ExamHeader/Header';
import { shuffle } from '../../utils/shuffleQuestion';
import {getPoint} from '../../utils/fetchAPI';
import {PRODUCTION_DOMAIN} from '../../const/domain';
import './style.scss';

export default function Exam() {
    
    // Define useStates.
    const [questionList, setQuestionList] = useState([]);

    // Navigation between tabs.
    const navigation = useNavigate();

    const onSubmit = useCallback(async() => {
        localStorage.setItem('finishedTime', Date.now());
        getPoint(PRODUCTION_DOMAIN+ "answer/" + localStorage.getItem('examCode'), localStorage.getItem('result'))
        .then(res => localStorage.setItem("userScore", `${JSON.stringify(res)} / ${Object.keys(JSON.parse(localStorage.getItem('exam')).lsQuizz).length}`))
        navigation('/finished');
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        
    useEffect(() => {
        if (localStorage.getItem('exam') === null) {
            navigation('/');
            return;
        }

        if (localStorage.getItem('finishedTime') !== null) {
            localStorage.clear();
            navigation('/');
            return;
        }

        const jsonObject = JSON.parse(localStorage.getItem('exam'));


        setQuestionList(shuffle(Object.values(jsonObject.lsQuizz)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( localStorage.getItem('exam') !== null?
        <div className='exam-window'>
            <Header initialTime={3600-parseInt((Date.now() - parseInt(localStorage.getItem("startTime")))/1000)}/>
            {Object.values(questionList).map((v, i) => {return <QuestionForm key={i} question={v}/>})}
            <SubmitButton onclickEvent={onSubmit} text="Submit."/>
        </div>
        : ""
    )
}
