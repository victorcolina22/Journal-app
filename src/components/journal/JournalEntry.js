import React from 'react';


export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className="journal__entry-picture"
                style={{
                    backgroundImage: 'url(https://img.freepik.com/vector-gratis/hermoso-paisaje-primavera-degradado_23-2148448598.jpg?size=626&ext=jpg&ga=GA1.2.1522229396.1640476800)',
                    backgroundSize: 'cover'
                }}>

            </div>

            <div className="journal__entry-body">
                <p className='journal__entry-title'>
                    Un nuevo día
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti tenetur reprehenderit placeat at maiores? Repellendus, corrupti. Aspernatur corrupti quisquam non dolorem quia, vero illo necessitatibus corporis quidem dolorum voluptates?
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
