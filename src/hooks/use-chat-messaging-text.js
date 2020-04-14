import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { setMessage } from '../actions/messenger';

export const useChatMessagingText = () => {
  const dispatch = useDispatch();

  const handleChange = ({
    target: { value },
  }) => {
    R.compose(dispatch, setMessage)({
      user: 'user', // TODO: Temporary value
      message: value,
    });
  };

  return {
    handleChange,
  };
};
