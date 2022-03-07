import React from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main({
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick,
    onCardClick,
}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then(([cardData, userData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardData);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className='content'>
            <section className='profile page__section'>
                <div
                    className='profile__avatar-overlay'
                    onClick={onEditAvatarClick}
                >
                    <img
                        src={userAvatar}
                        alt='Avatar'
                        className='profile__avatar'
                    />
                    <button className='profile__avatar-edit' type='button' />
                </div>

                <div className='profile__info'>
                    <h1 className='profile__name'>{userName}</h1>
                    <button
                        className='profile__btn-edit'
                        type='button'
                        onClick={onEditProfileClick}
                    />
                    <p className='profile__about'>{userDescription}</p>
                </div>
                <button
                    className='profile__btn-add'
                    type='button'
                    onClick={onAddPlaceClick}
                />
            </section>
            <section className='gallery page__section'>
                <ul className='cards'>
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}
