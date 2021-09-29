import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Button } from 'antd';

// interface Task {
//     tid:string,
//     uid: string
//     task_name: string;
//     project: string,
//     comments: string
// }

// type AppProps = {
//     TaskList: Array<any>

// }

const TaskList = ({ TaskList, deleteTask, editTask }) => {
  let [TaskData, setTaskData] = useState([]);
  let [Tasks, setTasks] = useState([]);

  useEffect(() => {
    let newtasks = [...TaskList];
    newtasks.forEach((ele, index) => (ele.tid = index + 1));
    setTasks(TaskList);
  }, [TaskList]);
  const columns = [
    {
      title: 'Task Id',
      dataIndex: 'tid',
      key: 'tid',
    },
    {
      title: 'Task Name',
      dataIndex: 'task_name',
      key: 'task_name',
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Task Edit',
      key: 'edit',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => editTask(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
    {
      title: 'Task Delete',
      key: 'delet',
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" onClick={() => deleteTask(record)}>
            delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        pagination={{ hideOnSinglePage: true }}
        columns={columns}
        dataSource={Tasks}
      />
    </>
  );
};

export default TaskList;
