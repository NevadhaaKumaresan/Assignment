import React from 'react';
import { DeleteTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';  

export const DeleteIcon = (props) => {
    return(
        <DeleteTwoTone data-testid="delete-task" twoToneColor="#eb2f96"  onClick={() => props.handleDelete(props.obj)}/>
        )
};

export const CompleteIcon = (props) => {
    return(
        <CheckCircleTwoTone data-testid="complete" twoToneColor="#52c41a" onClick={() => props.handleComplete(props.obj)}/>
        )
};

DeleteIcon.propTypes = {  
    handleDelete: PropTypes.func,
    obj: PropTypes.object
}  
CompleteIcon.propTypes = {
    handleComplete: PropTypes.func,
    obj: PropTypes.object
}

