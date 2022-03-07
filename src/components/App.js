import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (
        <div className='page'>
            <Header />
            <Main
                onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick}
                onEditAvatarClick={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm
                title='Edit Profile'
                name='edit'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <label className='modal__field'>
                    <input
                        type='text'
                        name='name'
                        id='name-input'
                        className='modal__input modal__input_type_name'
                        placeholder='Name'
                        required
                        minLength='2'
                        maxLength='40'
                        pattern='[a-zA-Z -]{1,}'
                    />
                    <span className='modal__error' id='name-input-error' />
                </label>
                <label className='modal__field'>
                    <input
                        type='text'
                        name='about'
                        id='about-input'
                        className='modal__input modal__input_type_description'
                        placeholder='About Me'
                        required
                        minLength='2'
                        maxLength='200'
                    />
                    <span className='modal__error' id='about-input-error' />
                </label>
            </PopupWithForm>

            <PopupWithForm
                title='New Place'
                name='new-card'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <label className='modal__field'>
                    <input
                        type='text'
                        name='title'
                        id='title-input'
                        className='modal__input modal__input_type_card-name'
                        placeholder='Title'
                        required
                        minLength='1'
                        maxLength='30'
                    />
                    <span className='modal__error' id='title-input-error' />
                </label>
                <label className='modal__field'>
                    <input
                        type='url'
                        name='link'
                        id='link-input'
                        className='modal__input modal__input_type_url'
                        placeholder='Image URL'
                        required
                    />
                    <span className='modal__error' id='link-input-error' />
                </label>
            </PopupWithForm>

            <PopupWithForm
                title='Are you sure?'
                name='remove-card'
                buttonText='Yes'
            />

            <PopupWithForm
                title='Change profile picture'
                name='edit-avatar'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <label className='modal__field'>
                    <input
                        type='url'
                        name='link'
                        id='avatar-input'
                        className='modal__input modal__input_type_description'
                        placeholder='Image URL'
                        required
                    />
                    <span className='modal__error' id='avatar-input-error' />
                </label>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    );
}
