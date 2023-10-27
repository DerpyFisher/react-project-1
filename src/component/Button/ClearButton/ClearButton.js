import React from 'react'

/**
 * A simple clear text button.
 * 
 * @description
 * This function is currently not in use.
 * @param text String - A text that will be show on the button.
 * @author Fernzoe (Derpy Fisher)
 * @returns a clear all button.
 * @version 1.0.0.0
 */
export default function ClearButton({text}) {
  return (
    <button className="clearButton">{text}</button>
  )
}
