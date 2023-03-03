/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import { CustomError } from '../types/CustomError';

type Props = {
  customError: CustomError,
  setError: (error: CustomError | null) => void,
};

export const ErrorNotification: FC<Props> = ({ customError, setError }) => (
  <div
    className="notification is-danger is-light has-text-weight-normal"
    hidden={!customError}
  >
    <button
      type="button"
      className="delete"
      onClick={() => setError(null)}
    />

    <p>
      {customError}
    </p>
  </div>
);