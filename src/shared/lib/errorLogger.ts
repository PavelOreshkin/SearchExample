import type { Middleware } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const errorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = action.payload as any;

    console.log('error: ', error);

    const message =
      error?.data?.message ||
      error?.error ||
      'Произошла ошибка при выполнении запроса';

    toast(message);
  }

  return next(action);
};
