import React, { useEffect, createContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { useShallowSelector } from 'hooks/use-shallow-selector';

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isUserAuth } = useShallowSelector(state => state?.auth);

  useEffect(() => {
    if (isUserAuth) {
      Router.push('/');
    }
  }, [isUserAuth]);

  return (
    <UserContext.Provider value={null}>
      {children}
    </UserContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
