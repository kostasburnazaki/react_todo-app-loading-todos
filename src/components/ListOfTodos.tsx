import { FC } from 'react';
import classNames from 'classnames';

import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[],
  filterCallback: (todo: Todo) => boolean,
};

export const ListOfTodos: FC<Props> = ({
  todos,
  filterCallback,
}) => {
  return (
    <section
      className="todoapp__main"
    >
      {todos.filter(filterCallback)
        .map(({ id, title, completed }: Todo) => (
          <div
            key={id}
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
              <div className="
                        modal-background has-background-white-ter"
              />
              <div className="loader" />
            </div>
          </div>
        ))}
    </section>
  );
};