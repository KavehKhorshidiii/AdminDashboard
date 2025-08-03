import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import allRoutes from './Routes/Routes';
import { useRoutes } from 'react-router-dom';


export default function App() {

  const AllRoutes = useRoutes(allRoutes)

  return (
    
    <div className='appContainer'>
      <Sidebar></Sidebar>

      <div className='main'>
        <Header></Header>
        {AllRoutes} 
      </div>

    </div>
  );
}

