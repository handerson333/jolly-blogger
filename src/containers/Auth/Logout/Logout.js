import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.logout());
  });

  return <Redirect to='/' />;
}

export default Logout;
