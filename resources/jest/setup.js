const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

/**
 * React 17 Enzyme adapter
 */
Enzyme.configure({ adapter: new Adapter() });

/**
 * Make Enzyme functions available in all test files without importing
 */
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// global.React = React;
