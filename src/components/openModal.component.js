import  React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.closeModal}
    ariaHideApp={false}
    contentLabel = 'selected Option'
    >
    <div className='conatiner widget'>
    <h3>Selected Option</h3>
    {!!props.selectedOption && <p> {props.selectedOption}</p>}
    <button onClick = {props.closeModal} className='button'>Okay</button>
    </div>
    </Modal>
);

export default OptionModal;
