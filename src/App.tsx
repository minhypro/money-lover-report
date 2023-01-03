import './App.css';

import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState('');
  const handleSubmit = async () => {
    const result = await fetch('https://web.moneylover.me/api/wallet/list', {
      headers: {
        accept: 'application/json',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7',
        authorization: `AuthJWT ${token}`,
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
        cookie:
          '_gid=GA1.2.1913553898.1672605195; _gat=1; _ga_SGTSQ06VHD=GS1.1.1672605198.1.1.1672605668.0.0.0; _ga=GA1.1.1182361506.1672605195',
        Referer: 'https://web.moneylover.me/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: '{}',
      method: 'POST',
    });
    console.log(await result.json());
  };
  return (
    <main className="max-w-5xl px-8 py-4 mx-auto">
      <div>
        <div>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Token
          </label>
          <div className="relative mb-6">
            <input
              value={token}
              onChange={(e) => setToken(e.currentTarget.value)}
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <button
          onClick={() => handleSubmit()}
          className="bg-gray-300 hover:bg-gray-400 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Submit</span>
        </button>
      </div>
    </main>
  );
}

export default App;
