import * as R from 'ramda';

import { Messenger as MessengerLayout } from '../layouts/messenger';
import { useShallowSelector } from '../hooks/use-shallow-selector';
import { REDUCER_TYPES } from '../constants';

const Messenger = () => {
  const { messages } = useShallowSelector(R.path([REDUCER_TYPES.MESSENGER]));

  return (
    <MessengerLayout
      messages={messages}
    />
  );
};

export default Messenger;
