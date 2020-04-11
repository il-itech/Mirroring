import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import clasnames from 'classnames';

export const GlobalAlertUI = ({ dismissGlobalAlert, errorId }) => {
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
        <span className="my-auto">
          {`Error: ${errorId}`}
        </span>
        <Button
          variant="contained"
          type="button"
          className="py-0_5"
          onClick={onDismiss}
        >
          dismiss
        </Button>
      </Alert>
    </div>
  );
};

GlobalAlertUI.propTypes = {
  errorId: PropTypes.string.isRequired,
  dismissGlobalAlert: PropTypes.func,
};

GlobalAlertUI.defaultProps = {
  dismissGlobalAlert: null,
};

export const GlobalAlert = memo(GlobalAlertUI);
