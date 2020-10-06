import { FC } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { Props } from './types';

export const ChatLink: FC<Props> = ({
  href,
  as,
  firstname,
  lastname,
  lastMessage,
  avatar,
}) => (
  <Link href={href} as={as}>
    <Button
      classes={{
        root: 'd-flex justify-content-start w-100 py-1_5 px-2 text-white text-capitalize link-hover',
      }}
    >
      <Avatar src={avatar} />
      <div className="d-flex flex-column align-items-start ml-2 text-truncate">
        <Typography variant="body1">{firstname} {lastname}</Typography>
        <Typography variant="body2" className="text-left text-mischka text-truncate">{lastMessage}</Typography>
      </div>
    </Button>
  </Link>
);
