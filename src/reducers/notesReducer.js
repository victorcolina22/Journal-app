/*
    ESTRUCTURA DEL STATE DE NOTAS
    {
        notes: [],
        // Active será un objeto que tendrá la nota activa, podrá ser null.
        active: {
            id: 'FASDFAFDASF4123',
            title: '',
            body: '',
            imageUrl: '',
            date: 1234567
        }
    }
*/

const initialState = {
    notes: {},
    active: null
}
export const notesReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}