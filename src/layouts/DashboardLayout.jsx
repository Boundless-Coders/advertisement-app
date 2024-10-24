
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className='flex flex-row items-start'>
        <Sidebar/>
        <Outlet />
    </div>
  );
};

export default DashboardLayout;