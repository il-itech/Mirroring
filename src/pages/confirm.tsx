import { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import * as R from 'ramda';

import { useShallowSelector } from 'hooks/use-shallow-selector';
import { confirmEmail } from 'actions/auth';
import { getQueryString, isEmptyOrNil } from 'helpers/utils';

const Confirm: NextPage<{}> = () => {
  const { globalError } = useShallowSelector(state => state?.system);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const token = getQueryString(query?.token);

  useEffect(() => {
    if (!isEmptyOrNil(query)) {
      R.compose(dispatch, confirmEmail)(token);
    }
  }, [dispatch, query, token]);

  return (
    <div className="h-100vh d-flex justify-content-center align-items-center">
      <div className="w-50 bg-ebony">
        <Typography
          variant="h5"
          className="py-2 px-5 text-white text-center text-capitalize"
        >
          {isEmptyOrNil(query) || !isEmptyOrNil(globalError) ? 'Invalid confirmation' : 'Loading'}
        </Typography>
      </div>
    </div>
  );
};

export default Confirm;
