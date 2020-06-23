import SendIcon from '@material-ui/icons/Send';

import { useChatMessagingText } from 'hooks/chat/use-chat-messaging-text';
import { FormElement } from 'components/form-element/form-element';

import './chat-messaging-text.scss';

export const ChatMessagingText = () => {
  const {
    chatMessage,
    // socket,
    // handleChange,
    onSubmit,
  } = useChatMessagingText();

  return (
    <div className="d-flex align-items-center p-2 bg-ebony chat-messaging-text">
      <FormElement
        formType="chatMessage"
        field="chatMessage"
        // customHandleChange={handleChange}
        value={chatMessage}
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
      <SendIcon
        classes={{
          root: 'ml-1 cursor-pointer icon-send',
        }}
        onClick={onSubmit}
      />
    </div>
  );
};
