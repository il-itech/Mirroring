import { memo } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import NoSsr from '@material-ui/core/NoSsr';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { FormElement } from 'components/form-element/form-element';

import './chat-messaging-text.scss';

export const ChatMessagingTextUI = ({
  roomId,
  onSubmit,
}) => {
  const message = useShallowSelector(state => state?.forms?.chatMessage?.formData[roomId]);

  return (
    <form
      className="d-flex align-items-center p-2 bg-ebony chat-messaging-text"
      onSubmit={onSubmit}
    >
      <NoSsr>
        <FormElement
          formType="chatMessage"
          field={roomId}
          value={message}
          elementProps={{
            type: 'text',
            placeholder: 'Leave a message',
            variant: 'outlined',
            classes: {
              root: 'w-100',
            },
            InputProps: {
              classes: {
                root: 'text-white',
                notchedOutline: 'border-white-23',
              },
            },
          }}
        />
      </NoSsr>
      <Button
        classes={{
          root: 'ml-1 send-button',
        }}
        onClick={onSubmit}
      >
        <SendIcon
          classes={{
            root: 'icon-send',
          }}
        />
      </Button>
    </form>
  );
};

export const ChatMessagingText = memo(ChatMessagingTextUI, R.equals);

ChatMessagingTextUI.propTypes = {
  roomId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
