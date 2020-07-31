import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { useUploadFile } from 'hooks/use-upload-file';

import './account-avatar.scss';

export const AccountAvatar = ({
  profile: { firstname, lastname },
}) => {
  const {
    handleUploadFile,
  } = useUploadFile();

  return (
    <div className="w-25 d-flex flex-column align-items-center p-2 bg-ebony rounded account-avatar">
      <Avatar classes={{
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

AccountAvatar.propTypes = {
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
};
