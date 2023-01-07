import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { GlobalState } from '../context/GlobalState';
import { endpoint } from '../utils/endpointConst';

function Dashboard() {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalState);
  const { data, error } = useSWR({ endpoint: endpoint.userInfo, body: '{}' });

  useEffect(() => {
    if (!accessToken) {
      navigate('/config');
    }
  }, []);
  return (
    <div>
      Dashboard
      <h1>{error && 'An error has occurred'}</h1>
      <p>{data && JSON.stringify(data)}</p>
    </div>
  );
}
export default Dashboard;
