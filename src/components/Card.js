import React from 'react';

export default function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className='places__item card'>
            <img
                src={card.link}
                alt={card.name}
                onClick={handleClick}
                className='card__image'
            />
            <button type='button' className='card__btn-delete' />
            <div className='card__place'>
                <h2 className='card__title'>{card.name}</h2>
                <div className='card__like-container'>
                    <button type='button' className='card__btn-like' />
                    <p className='card__like-counter'>{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}
