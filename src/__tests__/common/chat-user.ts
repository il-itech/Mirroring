import { IChatUser } from 'interfaces/state.interfaces/chat-interface';

export const chatUser: IChatUser = {
  _id: '#1',
  firstname: 'Han',
  lastname: 'Solo',
  avatar: 'avatar-1',
};

export const chatUsers: IChatUser[] = [
  {
    _id: '#1',
    firstname: 'Han',
    lastname: 'Solo',
    avatar: 'avatar-1',
  },
  {
    _id: '#2',
    firstname: 'Darth',
    lastname: 'Vader',
    avatar: 'avatar-2',
  },
  {
    _id: '#3',
    firstname: 'Leia',
    lastname: 'Organa',
    avatar: 'avatar-3',
  },
];
