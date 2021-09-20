/* eslint-disable no-undef */

import React from 'react';
import { Header } from './Header';
import { render } from '@testing-library/react';


test('should render List of task', () => {
  const { getByTestId } = render(<Header />); 
  expect(getByTestId('headerTask')).toHaveTextContent('List Of Tasks')
})