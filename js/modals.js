export const openModal = (modal) => {
    const modalCloseButton = modal.querySelector('.modal__close');
    modal.classList.remove('modal_hide');

    modalCloseButton.addEventListener('click', () => {
        closeModal(modal);
    });
};

export const closeModal = (modal) => {
    modal.classList.add('modal_hide');
};
