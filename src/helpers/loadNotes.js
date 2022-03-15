import { db } from "../firebase/firebase-config"


export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    // De esta manera podemos acceder a la data almacenada en la base de datos de firebase.
    // Nos devuelve un arreglo y lo iteramos poder extraer la información.

    // Creamos un nuevo arreglo "notes" para extraer la información de "snapChild.data()"
    // y luego lo pusheamos para tenerlo más ordenado y claro.
    // Se le pasa primero el id y luego el resto de información que tenga el "data()".
    notesSnap.forEach(snapChild => {
        notes.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    })

    return notes;
}