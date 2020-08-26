import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { uploadFile } from 'actions/files';
import { useShallowSelector } from 'hooks/use-shallow-selector';

export const useFile = () => {
  const dispatch = useDispatch();
  const { _id, avatarId } = useShallowSelector(state => state?.profile);

  const handleUploadFile = useCallback(
    ({ target: { files } }) => {
      const reader = new FileReader();
      const file = R.head(files);

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const data = {
          avatar: reader.result,
          avatarName: file.name,
          uId: _id,
          avatarId,
        };

        R.compose(dispatch, uploadFile)(data);
      };
    },
    [_id, avatarId, dispatch],
  );

  return {
    handleUploadFile,
  };
};
