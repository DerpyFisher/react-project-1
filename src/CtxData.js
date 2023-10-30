import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

// Creating a context for the application.
export const ctx = createContext();

export default function CtxData(props) {
    const [examInformation, setExamInformation] = useState("");

    return (
        <ctx.Provider value={{examInformation, setExamInformation}}>
            {props.children}
        </ctx.Provider>
    )
}
