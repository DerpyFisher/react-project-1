import React, { useState } from 'react'
import './style.scss'
import {PRODUCTION_DOMAIN} from '../../const/domain'
import { SmallTextInput } from  '../../component/Input/SmallText/SmallTextInput'
import { SubmitButton } from '../../component/Button/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'
import {FetchAPI} from '../../utils/fetchAPI'
import Popup from '../../component/Popup/Popup'
import {emailValidator} from '../../utils/validators'
import { useEffect } from 'react'

export default function Home() {

    // useNavigation for navigating from different tab (screen).
    const navigation = useNavigate();

    // useState for gettting and storing current states of the application.
    const [examCode, setExamCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [pop, setPop] = useState(false);
    const [email, setEmail] = useState("");

    // Handler for button.
    const HandleButtonClick = async() => {
        if (localStorage.getItem("exam") !== null) {
            navigation('/exam/'+localStorage.getItem("examCode"));
            return;
        }
        else {
            const apiCall = await FetchAPI(PRODUCTION_DOMAIN+examCode);
            try {
                if (examCode.length === 0 || email.length === 0) {
                    setErrorMessage("You haven't fill in the exam code or email.");
                    setPop(true);
                }
                else if (!emailValidator(email)) {
                    setErrorMessage("Your email is not a valid email address.");
                    setPop(true);
                }
                else {
                    const result = await apiCall.json();
                    localStorage.setItem('examCode', examCode);
                    localStorage.setItem("email", email);
                    localStorage.setItem('startTime', Date.now());
                    localStorage.setItem("exam", JSON.stringify(result));
                    navigation('/exam/'+localStorage.getItem("examCode"));
                }
            } catch (err) {
                setErrorMessage("Something wrong while getting the exam information!");
                setPop(true);
            }
        }
    }

    useEffect( () => {
        if (localStorage.getItem("exam") !== null) {
            setErrorMessage("You still have a pending exam! Press \"Start test\" to continue.");
            setPop(true);
        }
    }, [])
    // Return the component.
    return (
        <div className='home-view'> 
            <Popup closeTrigger={setPop} trigger={pop} message={errorMessage}/>
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
