/* eslint-disable react/react-in-jsx-scope */
import { DeleteIcon, CompleteIcon} from '../../Atoms/Icon/Icon';

export const PendingColumns = (handleDelete,handleComplete) => {
    return [
        {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Complete',
            dataIndex: 'completed',
            render: (completed, obj) => {
              return(
              <CompleteIcon handleComplete={handleComplete} obj={obj}/>
              )
            }
          },
          {
            title: 'Delete',
            dataIndex: 'deleteIcon',
            render: (deleteIcon, obj) => {
              return(
              <DeleteIcon  handleDelete={handleDelete} obj={obj}/>
              )
            }
          }
    ]
}

export const CompletedColumns = (handleDelete) => {
    return [
        {
                title: 'Title',
                dataIndex: 'title',
              },
              {
                title: 'Delete',
                dataIndex: 'deleteIcon',
                render: (deleteIcon, obj) => {
                  return(
                    <DeleteIcon  handleDelete={handleDelete} obj={obj}/>
                  )
                }
              }
    ]
}