import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';

import { useChatMessagingText } from '../../../hooks/use-chat-messaging-text';
import { FormElement } from '../../form-element/form-element';

import './chat-messaging-text.scss';

export const ChatMessagingText = ({ messages }) => {
  const {
    handleChange,
  } = useChatMessagingText();
  const { user: userMessage } = messages;

  return (
    <div className="d-flex align-items-center p-2 bg-ebony chat-messaging-text">
      <FormElement
        formType="messenger"
        field="message"
        customHandleChange={handleChange}
        value={userMessage}
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
              notchedOutline: 'outilned-input',
            },
          },
        }}
      />
      <SendIcon
        classes={{
          root: 'ml-1 cursor-pointer icon-send',
        }}
      />
    </div>
  );
};

ChatMessagingText.propTypes = {
  messages: PropTypes.shape({
    user: PropTypes.string,
  }).isRequired,
};
