import React from 'react'
import './style.scss'


export function SmallTextInput({maxLength, placeholder, onkeyupEvent}) {
  return (
    <input onKeyUpCapture={(event) =>onkeyupEvent(event.target.value)} className='textInput' type='text' maxLength={maxLength?maxLength:60} placeholder={placeholder?placeholder:""} />
  )
}
