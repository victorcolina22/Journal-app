import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {
    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">
                <input
                    className='notes__title-input'
                    type="text"
                    placeholder='Some awesome title'
                    name='title'
                    onChange={handleInputChange}
                    value={title}
                    autoComplete='off' />

                <textarea
                    className='notes__textarea'
                    placeholder='What happened today'
                    name='body'
                    onChange={handleInputChange}
                    value={body}>
                </textarea>

                {
                    (note.url) &&
                    <div className="notes__images">
                        <img
                            src={note.url}
                            alt="arboles" />
                    </div>
                }

                <button
                    className='btn btn-danger'
                    onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}
