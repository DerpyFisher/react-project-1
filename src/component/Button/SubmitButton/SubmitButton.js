import React from 'react';
import './style.scss';

/**
 * A simple button for user to click on after fill in a form or complete something.
 * @example
 * in the return statement, you should delare as
 * <SubmitButton onclickEvent={/ Insert your function here /} text={'Example text'} />
 * @param onclickEvent: function - The function that triggered when the button is clicked.
 * @param text: String - The text will be displayed on the button 
 * @author Fernzoe (Derpy_Fisher)
 * @returns a button component.
 * @version 1.0.0.0
 */
export function SubmitButton({onclickEvent, text}) {
  return (
    <button onClick={onclickEvent} className='submitButton'>{text}</button>
  );
}
