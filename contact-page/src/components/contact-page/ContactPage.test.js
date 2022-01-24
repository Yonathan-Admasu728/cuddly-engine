import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './ContactPage';

it('should render ContactPage component', () => {
  expect(shallow(<ContactPage />)).toMatchSnapshot();
});