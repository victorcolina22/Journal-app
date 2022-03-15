import { db } from "../firebase/firebase-config";


export const startNewNotes = () => {
    // La acción recibe un segundo argumento que sirve para obtener el state de redux.
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        console.log(doc);
    }
}