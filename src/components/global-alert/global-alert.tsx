import { useState, memo, FC } from 'react';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import clasnames from 'classnames';

import { Props } from './types';

import './global-alert.scss';

export const GlobalAlertUI: FC<Props> = ({
  dismissGlobalAlert,
  errorId,
}) => {
  const [isVisible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(visible => !visible);

    if (dismissGlobalAlert) {
      dismissGlobalAlert();
    }
  };

  return (
    <div className="d-flex flex-column position-fixed global-alert">
      <Alert
        variant="filled"
        severity="error"
        classes={{
          root: clasnames('d-none', { 'd-flex': isVisible }),
          message: 'w-100 d-flex flex-row justify-content-between',
          icon: 'my-auto',
        }}
      >
        <Typography>Error: {errorId}.</Typography>
        <CloseIcon
          className="cursor-pointer"
          onClick={onDismiss}
        />
      </Alert>
    </div>
  );
};

export const GlobalAlert = memo(GlobalAlertUI);
