// eslint-disable-next-line
import React, { useEffect } from 'react';
import {useStore} from '../../../store';
import './TaskComponent.scss';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import { TableComponent } from '../../Molecules/Table/Table';
import { Header } from '../../Atoms/Header/Header';
import {loadData, moveToComplete, deleteTask} from '../../Molecules/Action/TaskAction';
import {PendingColumns, CompletedColumns} from '../../Molecules/Columns/Columns';

export const TaskComponent = () => {
      const [state, dispatch] = useStore();
      const CategoryArray = [ 
        {key: "1",heading: "Pending Task", complete: false, count: "pendingCount"},
        {key: "2",heading: "Completed Task", complete: true, count: "completedcount"},
        ];
      const { taskDatas } = state; 

      const getTaskList = async () => {
        await dispatch(loadData(dispatch));
      };

      useEffect(() => {
        getTaskList();
      }, []);

      const handleDelete = (data) => {
        dispatch(deleteTask(taskDatas, data));
     }

     const handleComplete = (data) => {
      dispatch(moveToComplete(taskDatas, data));
     }
    
    return(
       <div className="taskBody" role="main">
        <Header/>
        <div className="taskContainer">
            {CategoryArray.map((data) =>
            <div key={data.key} className="taskContainerBorder" tabIndex="0">
            <div key={data.key} className="displayHeader">
            <p key={data.key} className="displayHeaderSize">{data.heading}</p>
            <p key={data.key}>{state[data.count]}</p>
            </div>
            <Row>
            <TableComponent columns={data.complete ? CompletedColumns(handleDelete) : PendingColumns(handleDelete, handleComplete)} taskDatas={taskDatas} action={data.complete ? "completed" : "pending"}/>
            </Row>
          </div>
              )}
        </div>
       </div>
      )
}
