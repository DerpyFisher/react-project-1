import React, { useState } from 'react'
import './style.scss'
import { SmallTextInput } from  '../../component/Input/SmallText/SmallTextInput'
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    // useNavigation for navigating from different tab (screen).
    const navigation = useNavigate();

    // useState for gettting and storing inputs from the user.
    const [examCode, setExamCode] = useState("");
    const [email, setEmail] = useState("");

    // Handler for button.
    const HandleButtonClick = () => {
        localStorage.setItem("examCode", examCode.length>0?examCode:null);
        localStorage.setItem("email", email.length>0?email:null);
        navigation('/exam');
    }

    return (
        <div className='home-view'> 
            <h1>Sign In to participate</h1>
            <h2>Please enter all the required information below before taking the exam.</h2>
            <form className='loginTestForm'>
                <p className='Question'>Enter the exam code</p>
                <SmallTextInput onkeyupEvent={setExamCode} placeholder="Exam code here..."/>
                <p className='Question'>Enter your email</p>
                <SmallTextInput onkeyupEvent={setEmail} placeholder="Email here..."/>
            </form>
            <br/>
            <SubmitButton onclickEvent={HandleButtonClick} text="Start test"/>
            
        </div>
    )
}
