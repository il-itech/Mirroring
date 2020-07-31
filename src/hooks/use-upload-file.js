import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { uploadFile } from 'actions/files';

export const useUploadFile = () => {
  const dispatch = useDispatch();

  const handleUploadFile = useCallback(
    ({ target: { files } }) => {
      const formData = new FormData();

      formData.append('file', R.head(files));

      R.compose(dispatch, uploadFile)(formData);
    },
    [dispatch],
  );

  return {
    handleUploadFile,
  };
};
