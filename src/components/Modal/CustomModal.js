import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {ModalContainer ,MyModal,Horiz} from './ModalElements';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: '#fff',
    borderRadius:'5px',
    boxShadow: theme.shadows[6],
    padding: theme.spacing(2, 4, 3),
    height: '300px', 
    width:'auto',
                overflow:'auto'
  },
}));


function CustomModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <MyModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContainer >
            <h2 id="transition-modal-title" style={{color:'gray'}}>Transition modal</h2>
            <Horiz />
            <p id="transition-modal-description">react-transition-group animates me react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </ModalContainer>
        </Fade>
      </MyModal>
    </div>
  );
}

export default CustomModal
