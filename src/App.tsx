import './App.css';

import { useContext } from 'react';
import { SWRConfig } from 'swr';

import { GlobalState } from './context/GlobalState';
import Routes from './routes';

function App() {
  const { accessToken } = useContext(GlobalState);
  const fetcher = (ctx: { endpoint: string; body: string }) =>
    fetch(`https://web.moneylover.me/api/${ctx.endpoint}`, {
      headers: {
        accept: 'application/json',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7',
        authorization: `AuthJWT ${accessToken}`,
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        dataformat: 'json',
        pragma: 'no-cache',
      },
      body: ctx.body,
      method: 'POST',
    }).then((res) => res.json());

  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        fetcher: fetcher,
      }}
    >
      <main className="max-w-5xl px-8 py-4 mx-auto">
        <Routes />
      </main>
    </SWRConfig>
  );
}

export default App;
