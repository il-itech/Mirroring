import { useShallowSelector } from 'hooks/use-shallow-selector';
import { AccountAvatar } from './account-avatar/account-avatar';
import { AccountProfile } from './account-profile/account-profile';

export const AccountGeneral = () => {
  const {
    profile,
  } = useShallowSelector(state => state);

  return (
    <div className="d-flex flex-column flex-sm-row">
      <AccountAvatar profile={profile} />
      <AccountProfile />
    </div>
  );
};
