/* eslint-disable no-undef */
import React from 'react';
import { DeleteIcon , CompleteIcon } from './Icon';
import { screen, fireEvent, render } from '@testing-library/react';

test('OnClick of delete icon, func should be called', () => {
    const obj= {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      };
    const handleDelete = jest.fn();
    render(<DeleteIcon obj={obj} handleDelete={() => handleDelete(obj)}/>);
    const deleteTask = screen.getByTestId("delete-task");
    fireEvent.click(deleteTask);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  })

  test('OnClick of Complete icon, func should be called', () => {
    const obj= {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      };
    const handleComplete = jest.fn();
    render(<CompleteIcon obj={obj} handleComplete={() => handleComplete(obj)}/>);
    const moveToComplete = screen.getByTestId("complete");
    fireEvent.click(moveToComplete);
    expect(handleComplete).toHaveBeenCalledTimes(1);
  })
  