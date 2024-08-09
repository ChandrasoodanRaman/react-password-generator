import React from "react";
import { useState } from "react"
export const Passwordgen=()=>{
    const [length,setLength]=useState(8);
    const [includeUpper,setIncludeUpper]=useState(true)
    const [includeLower,setIncludeLower]=useState(true)
    const [includeNumber,setIncludeNumber]=useState(true)
    const [includeSymbol,setIncludeSymbol]=useState(true)
    const [password,setPassword]=useState("")

    const genPassword=()=>{
        let charset=""
        if(includeUpper)
            charset+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if(includeLower)
            charset+='abcdefghijklmnopqrstuvwxyz'
        if(includeNumber)
            charset+='0123456789'
        if(includeSymbol)
            charset+='!@#$%^&*()_+=-'
        let generatedpass=""
        for(let i=0;i<length;i++)
        {
                const randomindex=Math.floor(Math.random()*charset.length)
                generatedpass+=charset[randomindex]
        }
        setPassword(generatedpass)
    }

    const copyfn=()=>{
        navigator.clipboard.writeText(password)
        alert('password copied')
    }
    return (
        <div className="container">
                <h2>Strong password generator</h2>
                <div className="input-group">
                        <label htmlFor="num">Password length:</label>
                        <input type="number" id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}></input>
                </div>
                <div className="checkbox-group">
                        <input type="checkbox" id="upper" checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)}></input>
                        <label htmlFor="upper">Include Uppercase</label>
                </div>
                <div className="checkbox-group">
                        <input type="checkbox" id="lower" checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)}></input>
                        <label htmlFor="lower">Include Lowercase</label>
                </div>
                <div className="checkbox-group">
                        <input type="checkbox" id="numbers" checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)}></input>
                        <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className="checkbox-group">
                        <input type="checkbox" id="symbol" checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)}></input>
                        <label htmlFor="symbol">Include Symbols</label>
                </div>
                <button className="btn" onClick={genPassword}>Generate Password</button>
                <div className="generated-password">
                        <input type="text" readOnly value={password}></input>
                        <button className="copy-btn" onClick={copyfn}>Copy</button>
                </div>
        </div>
    )
}