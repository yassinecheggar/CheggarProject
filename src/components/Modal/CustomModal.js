import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {ModalContainer ,MyModal,Horiz} from './ModalElements';
import Button from "@material-ui/core/Button";


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



function CustomModal(Item) {
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
      <Button size="small" color="primary" onClick={handleOpen}>
                  learn more
                </Button>
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
            {Item.Name}

            {Item.Text}
          </ModalContainer>
        </Fade>
      </MyModal>
    </div>
  );
}

export default CustomModal

