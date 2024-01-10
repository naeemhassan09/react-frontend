import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getAlertMessage, getAlertType, getAlertVisible } from 'src/store/selectors/features/alert';
import { hideAlert } from 'src/store/slices/features/alert';

interface AlertWrapperProps {
  children: ReactNode;
}



export const AlertWrapper: React.FC = () => {
  const [open, setOpen] = useState(false);
  const message = useSelector(getAlertMessage);
  const type = useSelector(getAlertType);
  const visible = useSelector(getAlertVisible);

  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) {
      setOpen(true);

      setTimeout(() => {
        dispatch(hideAlert());
        setOpen(false);
      }, 3000);
    }
  }, [visible, message, type, dispatch]);

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
