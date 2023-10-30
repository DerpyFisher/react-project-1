import React from 'react';
import './style.scss';

export default function Popup(props) {
  return (props.trigger ?
    <div className='popUp'>
        <div className='popUpInner'>
            <p>{props.message}</p>
            <button className='closeButton' onClick={() =>{props.closeTrigger(false)}}>Close</button>
        </div>
    </div>:""
  )
}
