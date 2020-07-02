import React, { useEffect, createContext } from 'react';
import Router from 'next/router';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { isEmptyOrNil } from 'helpers/utils';

export const GeneralContext = createContext();

const NOTIFY_SETTINGS = {
  preventDuplicate: true,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

export const GeneralProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { isUserAuth } = useShallowSelector(state => state?.auth);
  const { variant, message } = useShallowSelector(state => state?.system?.notification);

  useEffect(() => {
    if (!isEmptyOrNil(message)) {
      enqueueSnackbar(message, { ...NOTIFY_SETTINGS, variant });
    }
  }, [enqueueSnackbar, message, variant]);

  useEffect(() => {
    if (isUserAuth) {
      Router.push('/');
    }
  }, [isUserAuth]);

  return (
    <GeneralContext.Provider value={null}>
      {children}
    </GeneralContext.Provider>
  );
};

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
