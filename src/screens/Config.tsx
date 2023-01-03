import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionTypes, GlobalDispatch } from '../context/GlobalState';
const Config = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const dispatch = useContext(GlobalDispatch);
  const handleSubmit = () => {
    dispatch({ type: ActionTypes.UpdateToken, data: token });
    navigate('/');
  };
  return (
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
  );
};

export default Config;
