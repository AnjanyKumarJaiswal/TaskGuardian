import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand } from '@nextui-org/react';
import AppLogo from '../utils/logo.png';
import DashBoardLogo from '../utils/dashboard-logo.png';
import TeamsLogo from '../utils/teams-logo.png';
import MessagesLogo from '../utils/messages.png';
// import ProfileLogo from '../utils/profile.jpg';
// import { Folder } from 'react-feather';

function TaskGuardianNavbar() {
  const location = useLocation();

  return (
    <>
      <Navbar
        isBordered
        variant="sticky"
        className="text-blue-950  font-poppins flex flex-col w-[250px] absolute top-10 left-5 "
      >
        <NavbarBrand className="flex flex-row mb-[550px] items-center gap-4">
          <img src={AppLogo} alt="Task Guardian Logo" className="w-[55px] h-[55px] rounded-full" />
          <Link to="/">
            <h1 className="text-xl text-black-100 w-[200px]">Task Guardian</h1>
          </Link>
        </NavbarBrand>

        <div className="flex flex-col gap-8 font-bold w-[500px] ml-[-220px]  mb-[100px]">
          <Link
            to="/dashboard"
            className={`flex flex-row gap-4 p-2 mb-1 rounded-lg ${location.pathname === '/dashboard' ? 'bg-blue-600 w-[50px] text-blue-700 text-lg' : 'text-zinc-400 hover:text-blue-500'}`}
          >
            <img src={DashBoardLogo} alt="Dashboard Logo" className={` ${location.pathname === '/dashboard' ? 'w-9 h-9' : 'w-7 h-7'}`} />
            Dashboard
          </Link>

          <Link
            to="/teams"
            className={`flex flex-row gap-4 p-2 rounded-lg ${location.pathname === '/teams' ? 'bg-blue-600 w-[50px] h-[50px] text-blue-700' : 'text-zinc-400 hover:text-blue-500'}`}
          >
            <img src={TeamsLogo} alt="Teams Logo" className={`rounded-xl ${location.pathname === '/teams' ? 'w-9 h-9' : 'w-8 h-8'}`}/>
            Teams
          </Link>

          <Link
            to="/messages"
            className={`flex flex-row gap-4 p-2 rounded-lg ${location.pathname === '/messages' ? 'bg-blue-600 w-[50px] h-[50px] text-blue-700 text-lg' : 'text-zinc-400 hover:text-blue-500'}`}
          >
            <img src={MessagesLogo} alt="Messages Logo" className={` ${location.pathname === '/messages' ? 'w-9 h-9' : 'w-7 h-7'}`}/>
            Messages
          </Link>
          {/* <Link
            to="/profile"
            className={`flex flex-row gap-4 p-2 rounded-lg ${location.pathname === '/profile' ? 'bg-blue-600 w-[50px] text-blue-700 text-lg' : 'text-zinc-400 hover:text-blue-500'}`}
          >
            <img src={ProfileLogo} alt="Profile Logo" className={`rounded-full ${location.pathname === '/profile' ? 'w-9 h-9' : 'w-7 h-7'}`} />
            Profile
          </Link> */}
          {/* <Link
            to="/projects"
            className={`flex flex-row gap-4 p-2 rounded-lg ${location.pathname === '/profile' ? 'w-[50px] text-blue-300 text-lg' : 'text-zinc-400 hover:text-blue-500'}`}
          >
            <div
              className={`flex items-center justify-center rounded-lg ${location.pathname === '/projects' ? 'bg-blue-600' : ''} w-[40px] h-[40px]`}
            >
            <Folder
            className={`text-sky-500 ${location.pathname === '/profile' ? 'w-9 h-9' : 'w-7 h-7'}`}
            size={24}
            />
            </div>
            Projects
          </Link> */}
        </div>
      </Navbar>
    </>
  );
}

export default TaskGuardianNavbar;
