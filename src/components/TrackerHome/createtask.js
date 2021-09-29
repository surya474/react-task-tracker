import React, { useEffect, useState } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Form, Input, Button, Space, Checkbox, Select, Modal } from 'antd';

const TaskForm = withTheme(AntDTheme);
const { Option } = Select;
// interface Task {
//     tid:string,
//     uid: string
//     task_name: string;
//     project: string,
//     comments: string
// }

// type AppProps = {
//     taskMode: 'create' | 'edit',
//     taskData: Task

// }
const ProjTypes = ['Python', 'Java', 'Go', 'Javascript'];

const CreateTask = ({ taskMode, taskData, addTask, setShowModal }) => {
  let [formData, setFormData] = useState({});
  let [isModalVisible, setIsModalVisible] = useState(true);
  let [Tid, setTid] = useState(null);
  let task = taskMode.toUpperCase() + ' TASK';
  let schema = {
    type: 'object',
    required: ['task_name', 'project'],
    properties: {
      task_name: {
        type: 'string',
        title: 'Task Name',
      },
      project: {
        type: 'string',
        title: 'Project',
        enum: ProjTypes,
      },
      comments: {
        type: 'string',
        title: 'Comments',
      },
    },
  };

  useEffect(() => {
    if (taskMode === 'edit') {
      console.log('i task mode edit', taskData);
      setTid(taskData.uid);
      setFormData(taskData);
    }
  }, [taskMode, taskData]);
  let onSubmit = (e) => {
    let data = { ...formData };
    if (taskMode !== 'edit') {
      let uid = new Date();
      data.uid = uid.toString();
    } else {
      data.uid = Tid;
    }
    console.log('in submit', data);
    addTask(data, taskMode);
    setShowModal(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
    setShowModal(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setShowModal(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowModal(false);
  };

  let onChange = (e) => {
    console.log('in onchange', e.formData);
    setFormData(e.formData);
  };

  return (
    <Modal
      title={task}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <TaskForm
        schema={schema}
        onChange={onChange}
        formData={formData}
        onSubmit={onSubmit}
      >
        <Space>
          <Button htmlType="submit" type="primary">
            {taskMode.toUpperCase()}
          </Button>
          <Button onClick={handleCancel} type="danger">
            CANCEL
          </Button>
        </Space>
      </TaskForm>
    </Modal>
  );
};

export default CreateTask;
