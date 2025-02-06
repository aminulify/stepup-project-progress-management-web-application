import React, { useContext, useEffect, useMemo, useState } from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import useStore from '../Shared/Zustand';
import { TfiBarChart } from "react-icons/tfi";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdAddTask } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { LuUsers2 } from "react-icons/lu";
import { TbUserShare } from "react-icons/tb";
import DashboardTaskTable from '../Components/DashboardTaskTable';
import CountUp from 'react-countup';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const {showMenu} = useStore();
    const [task, setTask] = useState([]);
    const [withoutDeleteTask, setWithoutDeleteTask] = useState([]);
    // console.log(task);
    const [completedTask, setCompletedTask] = useState([]);
    const [highPriority, setHighPriority] = useState(0);
    const [mediumPriority, setMediumPriority] = useState(0);
    const [normalPriority, setNormalPriority] = useState(0);
    const [lowPriority, setLowPriority] = useState(0);

    // console.log(highPriority.length);
    // console.log(mediumPriority.length);

    useEffect(()=>{
      axios.get('https://stepup-api.sarkbd.com/api/tasks')
      .then(res => {
        const getData = res.data;
        // console.log(getData);
        const matchAdminEmail = getData.filter(data => data.adminEmail === user.email);
        const withoutDelete = matchAdminEmail.filter(data => data.stage !== 'delete');
        setWithoutDeleteTask(withoutDelete);
        setTask(matchAdminEmail);

        setCompletedTask(matchAdminEmail.filter(item => item.stage === 'completed'));
        setHighPriority((matchAdminEmail.filter(item => item.taskPrioirty === 'high' && item.stage !== 'delete')));
        setMediumPriority(matchAdminEmail.filter(item => item.taskPrioirty === 'medium' && item.stage !== 'delete'));
        setNormalPriority(matchAdminEmail.filter(item => item.taskPrioirty === 'normal' && item.stage !== 'delete'));
        setLowPriority(matchAdminEmail.filter(item => item.taskPrioirty === 'low' && item.stage !== 'delete'));
      })
      .catch(e => e)
    },[])

    const [teamMember, setTeamMember] = useState(0);

    // TODO 
    const data = [{name: "High", dataLength: highPriority.length}, {name: "Medium", dataLength: mediumPriority.length},{name: "Normal", dataLength: normalPriority.length}, {name: "Low", dataLength: lowPriority.length}]
    

      useEffect(()=>{
        fetch('https://stepup-api.sarkbd.com/api/user-data')
        .then(res => res.json())
        .then(data => {
          const availableTeamMember = data.filter(member => member.adminEmail === user.email);
          setTeamMember(availableTeamMember);
        })
        .catch(err => err)
      },[])


    return (
        <section className='md:flex'>

          <div className='z-30 md:h-[980px] bg-purple-50'>
            <DashboardNavbar/>
          </div>

          <div className={`w-full relative mx-auto md:mt-[85px] mt-5 md:z-0 ${showMenu ? "-z-10" : "z-0"}`}>
                {/* overview header  */}
                <header className='text-[var(--primaryFontColor)] md:w-[90%] w-[90%] mx-auto grid md:grid-cols-3 grid-cols-1 gap-5'>

                  {/* todo */}
                    <div className='flex justify-between p-5 border-[1.5px] border-purple-500 rounded-md'>
                      <div>
                        <div>Total Tasks</div>
                        <p className='text-5xl font-medium'><CountUp start={0}
                                end={withoutDeleteTask.length}
                                duration={2} />
                                </p>
                        <div className='inline-flex items-center gap-2'><span>Tasks</span> <span className='text-purple-500'><TfiBarChart/></span></div>
                      </div>
                      <div className='w-[40px] h-[40px] border-[1.5px] border-purple-300 text-purple-500 grid place-content-center rounded-md text-2xl'><MdAddTask/></div>
                    </div>

                    {/* completed task  */}
                    <div className='flex justify-between p-5 border-[1.5px] border-slate-200 rounded-md'>
                      <div>
                        <div>Completed Tasks</div>
                        <p className='text-5xl font-medium'><CountUp start={0}
                                end={completedTask.length}
                                duration={2} /></p>
                        <div className='inline-flex items-center gap-2'><span>Finished</span> <span className='text-purple-500'><AiOutlinePieChart/></span></div>
                      </div>
                      <div className='w-[40px] h-[40px] border-[1.5px] border-purple-300 text-purple-500 grid place-content-center rounded-md text-2xl'><BiTask/></div>
                    </div>

                    {/* team member  */}
                    <div className='flex justify-between p-5 border-[1.5px] border-slate-200 rounded-md'>
                      <div>
                        <div>Team Members</div>
                        <p className='text-5xl font-medium'><CountUp start={0}
                                end={teamMember.length}
                                duration={1} /></p>
                        <div className='inline-flex items-center gap-2'><span>Member</span> <span className='text-purple-500'><TbUserShare/></span></div>
                      </div>
                      <div className='w-[40px] h-[40px] border-[1.5px] border-purple-300 text-purple-500 grid place-content-center rounded-md text-2xl'><LuUsers2 className='text-xl'/></div>
                    </div>
                </header>

                <div className='md:w-[90%] w-[100%] mx-auto flex flex-col md:flex-row gap-8'>
                  <div className='md:w-[90%] w-[90%] bg-purple-50 md:px-10 px-5 md:py-5 py-3 rounded-lg border-[1.4px] border-purple-500 mx-auto mt-8'>
                  <LineChart width={400} height={200} data={data}>
                  <Line type="monotone" dataKey="dataLength" stroke="#a855f7" />
                  <CartesianGrid stroke="#a855f7" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  
                  <YAxis />
                  <Tooltip />
                </LineChart>
                    
                  </div>
                  <div className='md:w-[90%] w-[90%] bg-purple-50 md:px-10 px-5 md:py-5 py-3 rounded-lg border-[1.4px] border-purple-500 mx-auto md:mt-8'>
                  <BarChart width={330} height={200} data={data}>
                    <XAxis dataKey="name"  />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="dataLength" fill="#a855f7" barSize={40} />
                  </BarChart>
                  </div>
                </div>

                <div className='w-[90%] mx-auto'>
                  <DashboardTaskTable/>
                </div>
              </div>
        </section>
    );
};

export default Dashboard;