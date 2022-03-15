import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';


export const NoteScreen = () => {
    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;

    // Existe un problema en el que cuando seleccionamos una nota para mostrarla en pantalla
    // solo se verá la primera que se seleccionó, es decir que si seleccionamos las demás
    // no podremos visualizarla porque el estado del "useForm" cambió una sola vez con el 
    // contenido de la primera nota y por defecto nuestro customHook no es tan flexible para
    // manejar distintos estados ya que la nota no volverá a ejecutar el estado del hook.
    // Entonces para poder manejar este problema lo primero que debemos hacer es ir a nuestro hook
    // y modificarlo un poco... (ir al useForm).

    // Una vez modificado podemos pensar en utilizar un "useEffect" porque cambiaremos el estado
    // cuando la nota cambie.

    // Ahora debemos comparar si el id de la nota cambia para poder cambiar el estado del hook
    // y eso lo podemos hacer tomando la referencia de esa nota:
    const activeId = useRef(note.id);

    useEffect(() => {
        // Acá comparamos si el id de la nota es diferente al id de la nota a la que estamos
        // manteniendo la referencia
        if (note.id !== activeId.current) {
            // Se envía el nuevo estado al "useForm"
            reset(note);
            // Y se cambia el id de nuestra nota que está referenciada.
            activeId.current = note.id
        }
    }, [note, reset]);

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
