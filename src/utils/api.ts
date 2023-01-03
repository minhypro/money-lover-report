export const getApi = async (endpoint: string, token: string) => {
  const result = await fetch(`https://web.moneylover.me/api/${endpoint}`, {
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
      Referer: 'https://web.moneylover.me/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: '{}',
    method: 'POST',
  });
  return await result.json();
};
