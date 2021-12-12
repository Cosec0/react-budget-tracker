import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessSnackbar = ({ open, setOpen }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Transaction added successfully!
                </Alert>
            </Snackbar>
        </>
  );
}

export default SuccessSnackbar;
