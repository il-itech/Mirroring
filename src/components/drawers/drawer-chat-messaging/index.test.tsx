import { createRef } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { chatMessages } from '__tests__/common/chat-message';
import { chatUser, chatUsers } from '__tests__/common/chat-user';
import { DrawerChatMessaging } from '.';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: jest.fn(),
}));

const handlers = {
  handleSubmit: jest.fn(),
  handleKeyPress: jest.fn(),
};

const props = {
  roomId: '123qwe',
  profileId: 'profileId',
  messages: chatMessages,
  allUserList: chatUsers,
  currentChatUser: chatUser,
  chatContentRef: createRef<HTMLDivElement>(),
  ...handlers,
};

describe('<DrawerChatMessaging />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DrawerChatMessaging {...props} />,
    ).dive();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('handleToggleDrawer should be called', () => {
  //   wrapper.find({ 'data-test-id': 'Button' }).simulate('click');

  //   expect(props.handleToggleDrawer).toHaveBeenCalled();
  // });
});
