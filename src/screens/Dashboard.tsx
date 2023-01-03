import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { GlobalState } from '../context/GlobalState';
import { getApi } from '../utils/api';

const fetcher = (ctx: { endpoint: string; token: string }) =>
  fetch(`https://web.moneylover.me/api/${ctx.endpoint}`, {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7',
      authorization: `AuthJWT ${ctx.token}`,
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      dataformat: 'json',
      pragma: 'no-cache',
      'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      Referer: 'https://web.moneylover.me/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: '{}',
    method: 'POST',
  }).then((res) => res.json());

function Dashboard() {
  const navigate = useNavigate();
  const { accessToken } = useContext(GlobalState);
  const { data, error } = useSWR({ endpoint: 'wallet/list', token: 'token' }, fetcher);

  useEffect(() => {
    if (!accessToken) {
      navigate('/config');
    }
  }, []);
  return (
    <div>
      Dashboard
      <h1>{error && 'An error has occurred'}</h1>
      {data ? <h1>{data.name}</h1> : <h1>Loading...</h1>}
    </div>
  );
}
export default Dashboard;
