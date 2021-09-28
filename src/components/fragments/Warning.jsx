import React from 'react'

export default function Warning({ warn, setWarn }) {
    return (
        <div className={warn.show ? `submit-warning show` : `submit-warning`}>
            <div>
                <p>{warn.content}</p>
                <button
                 name='closewarning'
                 onClick={()=>setWarn({...warn, show: false, })}
                 >
                     Close
                 </button>
            </div>
        </div>
    )
}
