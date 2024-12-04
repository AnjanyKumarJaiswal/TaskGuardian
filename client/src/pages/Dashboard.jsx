import TaskGuardianNavbar from './navbar';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProfileLogo from '../utils/profile.jpg';
import { Button, Card, Input ,  Badge} from '@nextui-org/react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { PieChart, Pie, Cell} from 'recharts'
import {Bell , Search} from 'react-feather'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";

const data = [
  { tasksDone: 1, hours: 6 },
  { tasksDone: 2, hours: 3 },
  { tasksDone: 3, hours: 5 },
  { tasksDone: 4, hours: 8 },
  { tasksDone: 5, hours: 7 },
  { tasksDone: 6, hours: 2 },
  { tasksDone: 7, hours: 10 },
];

const TodayTasksSchema = [
  {
    id:1, 
    taskname:"Diseases   Prediction", 
    taskdescription: "This task is to make a Machine Learning Model",
    taskgivenby: "Anjany",
    taskdeadline: new Date('2024-10-31T17:00:00'),
    completed: true,
    taskstatus: "Completed",
    team: "MLSA SRM"
  },
  {
    id:2,
    taskname:"Build an CRUD App", 
    taskdescription: "You have to Complete this using NodeJS and ExpressJS",
    taskgivenby: "Manager",
    taskdeadline: new Date('2024-10-20T00:00:00'),
    completed: false,
    taskstatus: "In Progress",
    team: "Swift Coding SRM"
  },
  {
    id:3,
    taskname:"Make CLI Chat App", 
    taskdescription: "You have to make a Chat App with using WebSockets",
    taskgivenby: "Club Recruiter",
    taskdeadline: new Date('2024-10-10T00:00:00'),
    completed: true,
    taskstatus: "Not Started",
    team: "SRM Kzilla"
  },
  {
    id:4, 
    taskname:"Learn about LLMs", 
    taskdescription: "You have to Learn new about LLMs",
    taskgivenby: "Team Lead",
    taskdeadline: new Date('2024-10-18T00:00:00'),
    completed: true,
    taskstatus: "Completed",
    team: "Dbug Labs"
  }
]

const AreaChartComponent = () => (
  <AreaChart
    width={550}
    height={265}
    data={data}
    margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
  >
    <XAxis dataKey="tasksDone" label={{ value: "Tasks Done", position: "insideBottom", offset: -5 }}/>
    <YAxis label={{ value: "Hours Spent", angle: -90, position: "insideLeft" }} />
    <Tooltip />
    <CartesianGrid strokeDasharray="3 3" />
    <Area type="monotone" dataKey="hours" stroke="#2563eb" fill="#2563eb" />
  </AreaChart>
);

function TaskToday() {
  return (
    <>
      <div className='w-[1280px] h-[195px] font-poppins'>
        <h1 className='text-2xl ml-[15px] font-bold mb-4'>Task Today</h1>
        <div className='flex flex-col shadow-xl gap-4 rounded-xl border-2 border-dashed border-sky-500'>
          {TodayTasksSchema.map(task =>(
            <Card key={task.id} className='flex flex-row bg-slate-100 ml-[30px] mr-[10px]'>
              <div className='flex flex-col w-[300px] h-[120px] '>
                <h2 className='text-xl font-bold mt-[20px]'>{task.taskname}</h2>
                <p className='text-md mt-[10px]'>{task.taskdescription}</p>
              </div>
              <div className='flex flex-col gap-2 justify-center items-center w-[200px] h-[120px]'>
                <p className='font-bold'>Task DeadLine</p>
                <p className="text-md ">
                  {task.taskdeadline.toLocaleDateString()} {task.taskdeadline.toLocaleTimeString()}
                </p>
              </div>
              <div className='flex flex-col gap-2 justify-center items-center h-[120px] w-[150px]'>
              <Input type='time' placeholder='Start From' className='w-[130px] ' />
                <Button auto size='sm' className='bg-blue-600 w-[150px] rounded-2xl shadow-2xl  text-slate-100 hover:bg-blue-900'>Reminder</Button>
              </div>
              <div className='flex flex-col gap-1 justify-center items-center h-[120px] w-[150px]'>
                <p className='font-bold'>Assigned By:</p>
                <p>{task.taskgivenby}</p>
              </div>
              <div className='flex flex-col gap-1 justify-center items-center h-[120px] w-[150px]'>
                <p className='font-bold'>Team</p>
                <p>{task.team}</p>
              </div>
              <div className='flex flex-col gap-1 justify-center items-center h-[120px] w-[230px]'>
                <p className='font-bold'>Task Status:</p>
                <p>{task.taskstatus}</p>
              </div>
            </Card> 
          ))}
        </div>
      </div>
    </>
  );
}
const OverallProgress = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.taskstatus === 'Completed').length;
  const inprogressTasks = tasks.filter(task => task.taskstatus === 'In Progress').length;
  const taskNotStarted = tasks.filter(task => task.taskstatus === 'Not Started').length;

  const percentage = totalTasks
    ? ((completedTasks / totalTasks) * 100)
    : 0;

  const data = [
    { name: 'Completed', value: completedTasks },
    { name: 'Not-Started', value: taskNotStarted },
    { name: 'In-Progress', value: inprogressTasks }
  ];

  const COLORS = ['#2563eb', '#e0e0e0', '#22c55e'];

  return (
    <div className='flex flex-col w-[500px] h-[400px] mt-[20px]'>
      <div className='flex flex-row items-center justify-center'>
        <p className='font-bold text-2xl'>Overall Progress</p>
      </div>
      <Card className="flex flex-col mb-[-100px] h-[400px] items-center justify-center bg-slate-100">
        <div className="text-center mb-[-150px]">
          <h2 className="text-2xl font-bold">{Math.round(percentage)}%</h2>
          <p>{totalTasks === 0 ? 'No Tasks' : 'Tasks Completed'}</p>
        </div>
        <PieChart width={250} height={250} className='shadow-lg rounded-full'>
          <Pie
            data={data}
            cx={120}
            cy={120}
            startAngle={270}
            endAngle={-90}
            innerRadius={105}
            outerRadius={125}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            cornerRadius={50}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Card>
    </div>
  );
};

OverallProgress.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskname: PropTypes.string.isRequired,
      taskdescription: PropTypes.string.isRequired,
      taskgivenby: PropTypes.string.isRequired,
      taskdeadline: PropTypes.instanceOf(Date).isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired, 
};
const SearchBarAndNotification = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const notifications = [
    {
      id:1,
      messagetype:"message",
      messagedescription: "You have a New Message from Anjany"
    },
    {
      id:2,
      messagetype:"Task",
      messagedescription: "You Have a New Task from your Manager"
    }
  ];
  const totalnotifications = notifications.length 
  const bellRef = useRef(null); 

  const handleBellClick = () => {
    setIsClicked(true); 
  };

  const handleClickOutside = (event) => {
    if (bellRef.current && !bellRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex flex-row gap-8 items-center justify-center   w-[700px] h-[40px] ml-[500px] mt-[-500px]  mt-[-100px]">
      <div className="flex flex-row w-[500px] h-[40px] mr-[20px] items-center  justify-center rounded-2xl shadow-2xl shadow-blue-900 ">
        <input
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search something here..."
          className="placeholder:italic placeholder:text-center text-center w-[400px] rounded-xl h-[40px] border-none focus:outline-none"
        />
        {!searchValue && <Search className="ml-[-20px] w-[35px]" size={24} />}
      </div>
      <Popover>
        <PopoverTrigger>
        <div className="relative justifu=y-center items-center" ref={bellRef}>
            <Badge 
            color="error" 
            content={totalnotifications > 0 ? totalnotifications : undefined} 
            className="absolute top-[-6px] right-[-12px] bg-red-400 rounded-full w-[20px] h-[20px] place-content-center"
            >
              <Bell 
              className={`cursor-pointer w-[25px] h-[25px] ${isClicked ? 'text-black-100 ' : 'text-zinc-500'}`} 
              size={24} 
              onClick={handleBellClick}/>
            </Badge>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          {notifications.length > 0 ? (
            <ul className="w-[200px] p-2">
              {notifications.map((notification) => (
                <li key={notification.id} 
                className="mb-1 text-center w-[170px] h-[50px] bg-blue-300 italic hover:border-dashed hover:border-2  rounded-xl hover:shadow-lg hover:cursor-pointer hover:bg-blue-900 hover:border-sky-300 hover:text-slate-100">
                  {notification.messagedescription}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-center">No messages available</div>
          )}
        </PopoverContent>
      </Popover>
      <Link
            to="/profile"
            className="relative " 
          >
            <img src={ProfileLogo} alt="Profile Logo" className="w-8 h-8  rounded-full" />
          </Link>
    </div>
  );
};


function Dashboard() {
  return (
    <>
      <div className="h-screen bg-slate-100 font-poppins flex overflow-hidden">
        <TaskGuardianNavbar />
        <div className="flex-1 overflow-y-auto ml-[250px] p-6"> 
          <h1 className="text-3xl font-bold mb-2 text-zinc-600">Hey there...,</h1>
          <h1 className="text-xl italic mb-6">Welcome Back to Task Guardian</h1>

          <Card className=" shadow-xl shadow-blue-300 p-4 mb-6 w-[575px] rounded-2xl">
            <h2 className="text-xl mb-6 text-center"> Your Task Activity Overview</h2>
            <AreaChartComponent />
          </Card>

          <div className="flex">
            <TaskToday />
          </div>
          <div className='flex ml-[600px] mt-[-600px] '>
            <OverallProgress tasks={TodayTasksSchema}/>
          </div>
        <SearchBarAndNotification/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

