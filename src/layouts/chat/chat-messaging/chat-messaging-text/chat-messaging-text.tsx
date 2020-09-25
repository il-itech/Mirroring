import { FC, memo } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { FormElement } from 'components/form-element/form-element';
import { Props } from './types';

import './chat-messaging-text.scss';

export const ChatMessagingTextUI: FC<Props> = ({
  roomId,
  handleSubmit,
  handleKeyPress,
}) => {
  const message = useShallowSelector(state => state?.forms?.chatMessage?.formData[roomId]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <form
      className="d-flex align-items-center p-2 bg-ebony chat-messaging-text"
      onKeyPress={handleKeyPress}
    >
      <FormElement
        formType="chatMessage"
        field={roomId}
        value={message}
        elementProps={{
          type: 'textarea',
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
      <Button
        classes={{
          root: 'ml-1 send-button',
        }}
        onClick={handleSubmit}
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
