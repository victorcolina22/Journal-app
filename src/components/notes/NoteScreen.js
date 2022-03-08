import React from 'react';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">
                <input
                    className='notes__title-input'
                    type="text"
                    placeholder='Some awesome title'
                    autoComplete='off' />

                <textarea
                    className='notes__textarea'
                    placeholder='What happened today'>
                </textarea>

                <div className="notes__images">
                    <img
                        src="https://www.kimley-horn.com/wp-content/uploads/2021/04/Centennial-Lakes-Bridge-at-Night.jpg"
                        alt="arboles" />
                </div>
            </div>
        </div>
    )
}
