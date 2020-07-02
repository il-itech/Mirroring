import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export const ChatLink = ({ href, as }) => (
  <Link href={href} as={as}>
    <div className="d-flex py-1 px-2 cursor-pointer chat-contact">
      <Avatar />
      <div className="d-flex flex-column ml-2">
        <Typography variant="body1">Saved Messages</Typography>
        <Typography variant="body2" className="text-mischka">Message</Typography>
      </div>
    </div>
  </Link>
);

ChatLink.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
};
