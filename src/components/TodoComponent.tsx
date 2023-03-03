import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  completed: boolean,
  title: string,
};

export const TodoComponent: FC<Props> = ({
  completed,
  title,
}) => (
  <div
    className={classNames('todo', { completed })}
  >
    <label className="todo__status-label">
      <input
        type="checkbox"
        className="todo__status"
        checked={completed}
      />
    </label>

    <span className="todo__title">{title}</span>

    <button type="button" className="todo__remove">×</button>

    <div className="modal overlay">
      <div className="modal-background has-background-white-ter" />
      <div className="loader" />
    </div>
  </div>
);