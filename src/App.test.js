import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gifphy from './components/Gifphy';
//import config for enzyme unit test
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//End import for enzyme unit test
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('renders three <Gifphy /> components', () => {
    const wrapper = mount(shallow(<App />).get(0));
    expect(wrapper.text()).to.equal('1');
  });
  
});