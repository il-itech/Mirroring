import { useShallowSelector } from 'hooks/use-shallow-selector';
import { Account as AccountLayout } from 'layouts/account/account';

const Account = () => {
  const {
    profile,
  } = useShallowSelector(state => state);

  return (
    <AccountLayout />
  );
};

export default Account;
