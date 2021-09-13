import React, { useEffect } from 'react';
import './TaskComponent.css';
import { Row, Table } from 'antd';
import 'antd/dist/antd.css';
import { DeleteTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

export const TaskComponent = (props) => {

    useEffect(() => {
        props.taskData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);  
      const pendingColumns = [
        {
          title: 'Title',
          dataIndex: 'title',
        },
        {
          title: '',
          dataIndex: 'completed',
          render: (completed, obj) => {
            return(
            <CheckCircleTwoTone twoToneColor="#52c41a" onClick={() => handleComplete(obj)}/>
            )
          }
        },
        {
          title: '',
          dataIndex: 'deleteIcon',
          render: (deleteIcon, obj) => {
            return(
            <DeleteTwoTone twoToneColor="#eb2f96"  onClick={ () => handleDelete(obj)}/>
            )
          }
        }
      ];

      const completedColumns = [
        {
          title: 'Title',
          dataIndex: 'title',
        },
        {
          title: '',
          dataIndex: 'deleteIcon',
          render: (deleteIcon, obj) => {
            return(
            <DeleteTwoTone twoToneColor="#eb2f96" onClick={() => handleDelete(obj)}/>
            )
          }
        }
      ];

      const handleDelete = (data) => {
        props.deleteTask(props.taskDatas, data);
     }

     const handleComplete = (data) => {
      props.moveToComplete(props.taskDatas, data)
     }
    
    return(
    <div className="taskBody">
    <div className="headingFont boldHeader">List Of Tasks</div>
    <div className="taskContainer">
    <div className="taskContainerBorder">
      <div className="displayHeader">
        <div className="displayHeaderSize boldHeader">Pending Tasks</div>
        <div className="circle">{props.taskDatas.filter( data => data.completed === false).length}</div>
      </div>
        <Row>
        <Table
        columns={pendingColumns}
        rowKey={record => record.id}
        dataSource={props.taskDatas.filter( data => data.completed === false)}
        pagination={false}
      />
        </Row>

      </div>
    <div className="taskContainerBorder">
      {/* <Row>
        <Col span={20} className="boldHeader">Completed Tasks</Col>
        <Col span={2} className="circle">
            {props.taskDatas.filter( data => data.completed === true).length}
            </Col>
        </Row> */}
         <div className="displayHeader">
        <div className="displayHeaderSize boldHeader">Completed Tasks</div>
        <div className="circle">{props.taskDatas.filter( data => data.completed === true).length}</div>
      </div>
      <Row>
        <Table
        rowKey={record => record.id}
        columns={completedColumns}
        dataSource={props.taskDatas.filter( data => data.completed === true)}
        pagination={false}
      />
        </Row>
        </div>
    </div>
  </div>
      )
}