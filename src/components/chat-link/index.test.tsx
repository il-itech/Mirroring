import { shallow, ShallowWrapper } from 'enzyme';

import { ChatLink } from '.';

const handleToggleDrawer = jest.fn();

const props = {
  href: '/',
  firstname: 'Zakk',
  lastname: 'Wylde',
  lastMessage: 'How that going ?',
  avatar: 'avatarHref',
  handleToggleDrawer,
};

describe('<ChatLink />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    handleToggleDrawer.mockClear();
    wrapper = shallow(<ChatLink {...props} />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('handleToggleDrawer should be called', () => {
    wrapper.find({ 'data-test-id': 'Button' }).simulate('click');

    expect(props.handleToggleDrawer).toHaveBeenCalled();
  });
});
