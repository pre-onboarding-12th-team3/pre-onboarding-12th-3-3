import '@/App.css';
import { Outlet } from 'react-router-dom';

import { GlobalStyles } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
