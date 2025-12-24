import React, { useCallback, useEffect, useRef,useState } from 'react'

function Password() {
    const[length ,setlength]=useState(8)
     const [password, setpassword]=useState("")
    const[NumberAllowed,setNumberAllowed]=useState(false)
    const[CharacterAllowed,setCharacterAllowed]=useState(false)

    const passwordRef=useRef(null)


    const PasswordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
        if(NumberAllowed) str +="123456789"
         if(CharacterAllowed) str +="<>/?{}[]@!#$%^&*()"

        for (let i = 0; i <=length; i++) {
            const char=Math.floor(Math.random()*str.length)
            pass +=str.charAt(char)
            
        }
        setpassword(pass)
            
        
    },[length,NumberAllowed,CharacterAllowed,setpassword])

    const CopyPasswordToClipBoard=useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,100)

       window.navigator.clipboard.writeText(password)
    },[password,passwordRef])

    useEffect(()=>{
        PasswordGenerator()
    },[length,NumberAllowed,CharacterAllowed,PasswordGenerator])
     return (
       <div className="w-full max-w-md mx-auto rounded-lg shadow-md p-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg mb-4 overflow-hidden bg-amber-50 p-3"> 
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'

            readOnly
            ref={passwordRef}
            
            />
            <button
            onClick={CopyPasswordToClipBoard}
            className=' outline-none bg-blue-600 px-3 py-0.5 shrink-0 rounded hover:bg-red-700 cursor-pointer text-gray-200 px-3 py-0.5 shrink-0 rounded'>Copy</button>


        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setlength(e.target.value)}}
                />
                <label>length :{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={NumberAllowed}
                id='numberInput'
                onChange={()=>
                    setNumberAllowed((prev)=>!prev)}
                
                />
                 <label htmlFor='numberInput'>Number</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={CharacterAllowed}
                id='characterInput'
                onChange={()=>
                    setCharacterAllowed((prev)=>!prev)}
                
                />
                 <label htmlFor='characterInput'>Character</label>
            </div>
        </div>
       </div>
    )
}

export default Password
