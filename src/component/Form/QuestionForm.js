import React from 'react';
import './style.scss';

/**
 * The question div of each quizz in the exam.
 * 
 * @param question JSON_Object - The question information.
 * @param answerList List[JSON_Object] - A list of information about 4 answer (presumably...)
 * @author Fernzoe (Derpy Fisher)
 * @returns a "form" with a question and 4 answer.
 * @version 1.0.0.0
 */
export default function QuestionForm({question, answerList}) {
    // Constants storing the question answers.
    const [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer] = answerList;

    return (
        <div key={question.id} className="questionForm">
            <h2 id={"question"+question.id} className="examQquestion">{question.content}</h2>
            <label htmlFor="1" id={firstAnswer.id} className="answer">
                <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_1`}/>
                {firstAnswer.content}
            </label>
            <br/>
            <label htmlFor="2" id={secondAnswer.id} className="answer">
                <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_2`}/>
                {secondAnswer.content}
            </label>
            <br/>
            <label htmlFor="3" id={thirdAnswer.id} className="answer">
                <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_3`}/>
                {thirdAnswer.content}
            </label>
            <br/>
            <label htmlFor="4" id={fourthAnswer.id} className="answer">
                <input type="radio" name={`question_${question.id}_answer`} id={`question_${question.id}_answer_4`}/>
                {fourthAnswer.content}
            </label>
        </div>
    )
}
