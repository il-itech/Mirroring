import { shallow } from 'enzyme';

import { BackHome } from '.';

const props = {
  className: 'd-flex',
};

describe('<BackHome />', () => {
  const wrapper = shallow(<BackHome {...props} />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
