import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


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

        // Ejecución de la acción "activeNote".
        dispatch(activeNote(doc.id, newNote));
    }
}

// Nueva acción para activar nota agregada para poder editarla, borrarla, etc.
export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});