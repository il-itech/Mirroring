import SendIcon from '@material-ui/icons/Send';

import { FormElement } from '../../form-element/form-element';

import './chat-messaging-text.scss';

export const ChatMessagingText = () => (
  <div className="d-flex align-items-center p-2 bg-ebony chat-messaging-text">
    <FormElement
      formType="messenger"
      field="message"
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
