import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


export const JournalEntry = ({ id, title, body, date, url }) => {

    const dispatch = useDispatch();

    const handleEntryClick = () => {
        const notes = {
            title,
            body,
            date,
            url
        }
        dispatch(activeNote(id, notes));
    }

    return (
        <div
            className='journal__entry animate__animated animate__fadeInLeft animate__faster'
            onClick={handleEntryClick}>
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundImage: `url(${url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        objectFit: 'cover'
                    }}>

                </div>
            }

            <div className="journal__entry-body">
                <p className='journal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{moment(date).format('dddd')}</span>
                <h4>{moment(date).format('D')}</h4>
            </div>
        </div>
    )
}
