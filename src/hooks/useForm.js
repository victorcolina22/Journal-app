import { useState } from "react"


export const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState);

    // Acá lo único que debemos hacer es agregarle un parámetro que sea el nuevo estado del
    // formulario, si no se le envía tendrá por defecto su estado inicial.
    const reset = (newFormState = initialState) => {
        setState(newFormState);
    }

    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        });
    }

    return [state, handleInputChange, reset];
}