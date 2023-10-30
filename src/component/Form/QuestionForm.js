import React, { useCallback } from 'react';
import './style.scss';
import { shuffle } from '../../utils/shuffleQuestion';

/**
 * The div of each quizz in the exam.
 * 
 * @param question JSON_Object - The question information.
 * @param answerList List[JSON_Object] - A list of information about 4 answer (presumably...)
 * @author Fernzoe (Derpy Fisher)
 * @returns a "form" with a question and 4 answer.
 * @version 1.0.0.0
 */
export function QuestionForm({question}) {

    const HandleOnRefresh = useCallback((questionID, answerId) => {
        let resultList = JSON.parse(localStorage.getItem("result"))??[];
        let a = resultList.filter(function (quizzAnswer) {return quizzAnswer.quesId === questionID});
        if (a.length === 0) {
            return false;
        }  else {
            return a[0].answerId.includes(answerId)?true:false;
        }
    }, [])

    const HandleChange = useCallback((questionID, answerID) => (state) => {
        let ls = JSON.parse(localStorage.getItem("result"))??[];
        for (let i=0; i < ls.length; i++) {
            if (ls[i].quesId === questionID) {
                
                if (state.target.checked === true) {
                    ls[i].answerId.push(answerID) // = [...ls[i].answerId, answerID];
                }
                else {
                    ls[i].answerId.splice(ls[i].answerId.indexOf(answerID), 1);
                }
                localStorage.setItem('result', JSON.stringify(ls));
                return;
            }
        }
        localStorage.setItem('result', JSON.stringify([...ls, {"quesId": questionID,"answerId": [answerID]}]))}, [])

    return (
        <div key={question.id} className="questionForm">
            <h2 className="examQuestion">{question.content}</h2>
            { shuffle(Object.values(question.answer)).map((v, i) => {
                    return <label htmlFor={i} key={v.id} className="answer">
                    <input type="checkbox" defaultChecked={HandleOnRefresh(question.id, v.id)} onChange={HandleChange(question.id, v.id)} name={question.id} />
                        {v.content}
                        <br/>
                    </label>
                })
            }
        </div>

    )
}

/* <div key={question.id} className="questionForm">
            <h2 className="examQuestion">{question.content}</h2>
            <label htmlFor="1" id={firstAnswer.id} className="answer">
                <input onChange={HandleChange(question.id, firstAnswer.id)} type="radio" name={question.id} />
                {firstAnswer.content}
            </label>
            <br/>
            <label htmlFor="2" id={secondAnswer.id} className="answer">
                <input onChange={HandleChange(question.id, secondAnswer.id)} type="radio" name={question.id}/>
                {secondAnswer.content}
            </label>
            <br/>
            <label htmlFor="3" id={thirdAnswer.id} className="answer">
                <input onChange={HandleChange(question.id, thirdAnswer.id)} type="radio" name={question.id}/>
                {thirdAnswer.content}
            </label>
            <br/>
            <label htmlFor="4" id={fourthAnswer.id} className="answer">
                <input onChange={HandleChange(question.id, fourthAnswer.id)} type="radio" name={question.id}/>
                {fourthAnswer.content}
            </label>
        </div> */

