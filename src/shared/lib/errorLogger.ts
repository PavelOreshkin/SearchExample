import type { Middleware } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

type FetchError = {
  status: number;
  data: {
    message?: string;
    [key: string]: unknown;
  };
};

const DEFAULT_FETCH_ERROR = 'Произошла ошибка при выполнении запроса';

export const errorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload as FetchError;

    console.error('error: ', error);
    toast(error.data.message || DEFAULT_FETCH_ERROR);
  }

  return next(action);
};
