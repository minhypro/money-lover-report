import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Config from './screens/Config';
import Dashboard from './screens/Dashboard';

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/config" element={<Config />} />
    </ReactRoutes>
  );
}

export default Routes;
