import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const formAction = async (formData) => {
        await submitHandler(values, formData)
    }

    const register = (fieldName) => {
        return {
            name: fieldName,
            onChange: changeHandler,
            value: values[fieldName] ?? '',
        };
    }

    const reset = () => setValues(initialValues);

    return {
        values,
        setValues,
        register,
        changeHandler,
        formAction,
        reset,
    }
}