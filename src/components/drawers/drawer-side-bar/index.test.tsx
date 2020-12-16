import { shallow } from 'enzyme';

import { DrawerSideBarUI } from '.';

describe.skip('<DrawerSideBarUI />', () => {
  const wrapper = shallow(<DrawerSideBarUI />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
