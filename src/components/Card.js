import React from 'react';

let Card = ({item}) => {
    let imagepath = '/images/' + item.image;
    return(
            <div className='card'>
                {item.status && <p className='card--overlay'>{item.status.toUpperCase()}</p>}
                <img className='card--image' src={imagepath}></img>
                <div className='card--rating'>
                    <img className='star-image' src={item.starimage}></img>
                    <p className='stars'>{item.stars}<span> ({item.reviews}) . {item.country.toUpperCase()}</span></p>
                </div>
                <p className='card--title'>{item.title}</p>
                <p className='card--price'><strong>From ${item.price$} </strong>/ person</p>
            </div>
    );
}

export default Card;