import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { useFile } from 'hooks/use-file';
import { Props } from './types';

import './index.scss';

export const AccountAvatar: FC<Props> = ({
  profile: { firstname, lastname, avatar },
}) => {
  const {
    handleUploadFile,
  } = useFile();

  return (
    <div className="d-flex flex-column align-items-center p-2 bg-ebony rounded account-avatar">
      <Avatar
        src={avatar}
        classes={{
          root: 'user-avatar',
        }}
      />
      <Typography
        className="my-1_5 text-white text-capitalize"
        variant="h6"
      >
        {firstname} {lastname}
      </Typography>
      <input
        accept="image/*"
        className="d-none"
        id="avatar-button"
        type="file"
        multiple
        onChange={handleUploadFile}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor="avatar-button"
        className="w-100"
      >
        <Button
          classes={{
            root: 'w-100 text-white link-hover',
          }}
          component="span"
        >
          Upload Avatar
        </Button>
      </label>
    </div>
  );
};
