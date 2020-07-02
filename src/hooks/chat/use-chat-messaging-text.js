// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { map } from 'rxjs/operators';
import * as R from 'ramda';

import { getChatSocketServiceSingleton } from 'services/sockets';
import { setMessage } from 'actions/messenger';

export const useChatMessagingText = () => {
  const { chatMessage } = useSelector(state => state?.forms?.chatMessage?.formData);
  const dispatch = useDispatch();

  const socket = getChatSocketServiceSingleton();

  // useEffect(() => {
  //   const stream$ = socket.on('events').pipe(
  //     map(result => { console.log('result', result); return result }),
  //   ).subscribe((result) => console.log('on next', result));

  //   return () => stream$.unsubscribe();
  // }, [socket]);

  const handleChange = ({
    target: { value },
  }) => {
    R.compose(dispatch, setMessage)({
      user: 'user', // TODO: Temporary value
      message: value,
    });
  };

  const onSubmit = () => {
    socket.emit('events', 'message from client');
  };

  return {
    chatMessage,
    socket,
    handleChange,
    onSubmit,
  };
};
