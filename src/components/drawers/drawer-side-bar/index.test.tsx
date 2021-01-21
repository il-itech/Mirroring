import { shallow } from 'enzyme';

import { DrawerSideBarUI } from '.';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<DrawerSideBarUI />', () => {
  const wrapper = shallow(<DrawerSideBarUI />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
