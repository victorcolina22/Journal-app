import React from 'react';


export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className="journal__entry-picture"
                style={{
                    backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kimley-horn.com%2Fservices%2Flandscape-architecture%2F&psig=AOvVaw3gY6oVZSP4LxP1Ir7pXfnd&ust=1646865277968000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi-zcLJt_YCFQAAAAAdAAAAABA7)',
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
