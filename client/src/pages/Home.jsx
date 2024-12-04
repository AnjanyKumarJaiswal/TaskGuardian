import { Link } from 'react-router-dom';
import { Button, Card, CardHeader } from '@nextui-org/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import AppLogo from "../utils/logo.png";

function Home() {
  return (
    <div className="relative h-screen bg-slate-100 font-poppins">
      
      <Navbar 
        isBordered 
        variant="sticky" 
        className="fixed top-3 left-0 w-full bg-slate-100 h-[80px] z-50 px-4 md:px-8"
      >
        <div className="flex justify-between items-center w-full">
          <NavbarBrand className="flex items-center gap-4">
            <img
              src={AppLogo}
              alt="Task Guardian Logo"
              className="w-[50px] h-[50px] rounded-full"
            />
            <span className="text-xl font-bold text-blue-900">Task Guardian</span>
          </NavbarBrand>

          <NavbarContent className="hidden boldfont- md:flex gap-10">
            <NavbarItem>
              <Link to="/dashboard" className="text-blue-900 hover:text-blue-500 text-lg">
                Dashboard
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/teams" className="text-blue-900 hover:text-blue-500 text-lg">
                Teams
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/messages" className="text-blue-900 hover:text-blue-500 text-lg">
                Messages
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/profile" className="text-blue-900 hover:text-blue-500 text-lg">
                Profile
              </Link>
            </NavbarItem>
          </NavbarContent>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button 
                className="h-[40px] w-[100px] rounded-3xl bg-blue-500 text-slate-100 hover:bg-blue-600" 
                color="primary" 
                auto
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                className="h-[40px] w-[100px] rounded-3xl bg-blue-500 text-slate-100 hover:bg-blue-600" 
                color="primary" 
                auto
              >
                Sign-up
              </Button>
            </Link>
          </div>
        </div>
      </Navbar>

      <div className="pt-[100px] flex flex-col justify-center items-center min-h-[calc(100vh-100px)] px-4">
        <Card className="w-full md:w-[80%] ">
          <CardHeader className="flex flex-col items-center gap-8">
            <h1 className="text-5xl md:text-6xl font-bold text-center">Task Guardian</h1>
            <p className="text-lg md:text-2xl text-center mt-2">
              Task Guardian empowers managers to assign, track, and oversee team tasks with precision. Boost productivity by streamlining communication, monitoring deadlines, and driving team performance. Stay on top of every project with real-time updates and seamless collaboration.
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Home;
