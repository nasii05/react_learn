import React, {useRef} from 'react'

const FocusInput = () => {
    const inputField = useRef(null);

    const focusOnInput = () => {
        inputField.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={inputField}
                placeholder="Click the button to focus"
            />
            <button onClick={()=> focusOnInput()}>
                Focus on the input
            </button>
        </div>
    )
}
export default FocusInput;
