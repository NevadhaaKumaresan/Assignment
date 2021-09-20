import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';  


export const TableComponent = (props) => {
    const { taskDatas,columns, action } = props;
    return(
        <Table
        rowKey={record => record.id}
        columns={columns}
        dataSource={action === "pending" ? taskDatas.filter( data => data.completed === false) : 
        taskDatas.filter( data => data.completed === true)}
        pagination={false}
      />
        )
};

TableComponent.propTypes = {
  taskDatas: PropTypes.array.isRequired, 
  columns: PropTypes.array.isRequired, 
  action: PropTypes.string.isRequired, 
}



