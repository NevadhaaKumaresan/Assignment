/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { TableComponent } from './Table';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
  };

test('matches snapshot', () => {
    const taskDatas = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
          },
    ]
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Complete',
            dataIndex: 'completed',
          },
          {
            title: 'Delete',
            dataIndex: 'deleteIcon',
          }
    ];
    const action="pending";
    const tree = renderer.create(<TableComponent taskDatas={taskDatas} columns={columns} action={action}/>);
    expect(tree).toMatchSnapshot();
  });


  test('should render table component', () => {
    const taskDatas = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
          },
    ]
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Complete',
            dataIndex: 'completed',
          },
          {
            title: 'Delete',
            dataIndex: 'deleteIcon',
          }
    ];
    const action="completed";
    render(<TableComponent taskDatas={taskDatas} columns={columns} action={action}/>);
  })

  