import { useCallback, MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import { uploadFile } from 'actions/files';
import { useShallowSelector } from 'hooks/use-shallow-selector';

interface IUseFile {
  handleUploadFile: MouseEventHandler<HTMLInputElement>;
}

export const useFile = (): IUseFile => {
  const dispatch = useDispatch();
  const { _id } = useShallowSelector(state => state?.profile);

  const handleUploadFile = useCallback(
    ({ target: { files } }) => {
      const reader = new FileReader();
      const file = R.head(files);

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const data = {
          avatar: reader.result as string,
          avatarName: file.name as string,
          uId: _id as string,
        };

        R.compose(dispatch, uploadFile)(data);
      };
    },
    [_id, dispatch],
  );

  return {
    handleUploadFile,
  };
};
