import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {
    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange] = useForm(note);
    const { body, title } = formValues;

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
                            src="https://www.kimley-horn.com/wp-content/uploads/2021/04/Centennial-Lakes-Bridge-at-Night.jpg"
                            alt="arboles" />
                    </div>
                }
            </div>
        </div>
    )
}
