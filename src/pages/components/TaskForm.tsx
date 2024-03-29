import React, { FunctionComponent } from 'react';
import { Task } from '../models/task';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
  disabled: boolean;
}

export const TaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task,
  disabled,
}) => {
  console.log('>>> run in TaskForm', task, 11, disabled);
  return (
    <form onSubmit={onAdd}>
      <input onChange={onChange} value={task.name} />
      <button disabled={disabled} type="submit">
        Add a task
      </button>
    </form>
  );
};
