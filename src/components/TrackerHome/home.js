import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TaskListComp from './taskList';
import CreateTaskComp from './createtask';

// interface Task {
//     tid:string,
//     uid: string
//     task_name: string;
//     project: string,
//     comments: string
// }

const TaskHome = () => {
  let [showModal, setShowModal] = useState(false);
  let [taskMode, setTaskMode] = useState('create');
  let [TaskList, setTaskList] = useState([]);
  let [taskData, setTaskData] = useState({});

  let createtask = () => {
    setShowModal(true);
    setTaskMode('create');
  };

  let addTask = (data, tasktype) => {
    let newData = [...TaskList];
    if (tasktype === 'create') {
      newData.push(data);
      setTaskList(newData);
    } else {
      let index = newData.findIndex((ele) => data.uid === ele.uid);
      console.log(index);
      newData[index] = data;
      setTaskList(newData);
    }
  };

  let deleteTask = (data) => {
    let newData = [...TaskList];
    let index = newData.findIndex((ele) => data.uid === ele.id);
    newData.splice(index, 1);
    setTaskList(newData);
  };
  let editTask = (data) => {
    setTaskData(data);
    setTaskMode('edit');
    setShowModal(true);

    console.log('in edit', data);
  };

  return (
    <>
      <div className="createTask">
        <Button type="primary" icon={<PlusOutlined />} onClick={createtask}>
          Create Task
        </Button>
      </div>
      {showModal ? (
        <CreateTaskComp
          taskMode={taskMode}
          taskData={taskData}
          addTask={addTask}
          setShowModal={setShowModal}
        />
      ) : (
        <> </>
      )}
      <div className="taskList">
        <TaskListComp
          TaskList={TaskList}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default TaskHome;
