import { useState } from "react";

//custom hook for controlled form 
export default function useFormHook(submitHandler, initialValues) {

    const [values, setValues] = useState({initialValues});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        submitHandler(values)
    
    }

    return {
        values,
        onChange,
        onSubmit,
    }

}