import React, { useEffect } from 'react';
import DashboardNavbar from '../Shared/DashboardNavbar';
import useStore from '../Shared/Zustand';
import { TfiBarChart } from "react-icons/tfi";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdAddTask } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { LuUsers2 } from "react-icons/lu";
import { TbUserShare } from "react-icons/tb";
import DashboardTaskTable from '../Components/DashboardTaskTable';

const Dashboard = () => {
    const {showMenu} = useStore();
    let todo = 18;
    let completed = 20;
    let teamMember = 2;
    
    const chartData = [
        {
          name: "High",
          Task_Priority: 22,
        },
        {
          name: "Medium",
          Task_Priority: 46,
        },
        {
          name: "Normal",
          Task_Priority: 64,
        },
        {
          name: "Low",
          Task_Priority: 91,
        },
      ];

      const labels = chartData.map((item) => item.name);
      const data = chartData.map((item) => item.Task_Priority);

      // bar chart 
      // bar chart 
      useEffect(()=>{
        const ctx = document.getElementById('myChart');

          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: 'Available Task',
                data: data,
                // borderWidth: 1,
                backgroundColor: [
                  'rgb(168, 85, 247)',
                  'rgb(168, 85, 247, 0.7)',
                  'rgb(168, 85, 247, 0.6)',
                  'rgb(168, 85, 247, 0.4)',
                ],
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
  });
      },[])


      const lineChartData = {
        labels: labels,
        datasets: [{
          label: 'Available Task',
          data: data,
          fill: true,
          borderColor: 'rgb(168, 85, 247)',
          backgroundColor: 'rgb(168, 85, 247, 0.2)',
          tension: 0.1
        }]
      };
      // line chart 
      // line chart 
      useEffect(()=>{
        const ctx = document.getElementById('myChart-right'); 
        
        new Chart(ctx, {
          type: 'line',
          data: lineChartData,
        })

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
                        <div>Total Todo</div>
                        <p className='text-5xl font-medium'>{todo}</p>
                        <div className='inline-flex items-center gap-2'><span>Tasks</span> <span className='text-purple-500'><TfiBarChart/></span></div>
                      </div>
                      <div className='w-[40px] h-[40px] border-[1.5px] border-purple-300 text-purple-500 grid place-content-center rounded-md text-2xl'><MdAddTask/></div>
                    </div>

                    {/* completed task  */}
                    <div className='flex justify-between p-5 border-[1.5px] border-slate-200 rounded-md'>
                      <div>
                        <div>Completed Tasks</div>
                        <p className='text-5xl font-medium'>{completed}</p>
                        <div className='inline-flex items-center gap-2'><span>Finished</span> <span className='text-purple-500'><AiOutlinePieChart/></span></div>
                      </div>
                      <div className='w-[40px] h-[40px] border-[1.5px] border-purple-300 text-purple-500 grid place-content-center rounded-md text-2xl'><BiTask/></div>
                    </div>

                    {/* team member  */}
                    <div className='flex justify-between p-5 border-[1.5px] border-slate-200 rounded-md'>
                      <div>
                        <div>Team Members</div>
                        <p className='text-5xl font-medium'>{teamMember}</p>
                        <div className='inline-flex items-center gap-2'><span>Member</span> <span className='text-purple-500'><TbUserShare/></span></div>
                      </div>
                      <div className='w-[40px] h-[40px] border-[1.5px] border-purple-300 text-purple-500 grid place-content-center rounded-md text-2xl'><LuUsers2 className='text-xl'/></div>
                    </div>
                </header>

                <div className='md:w-[90%] w-[100%] mx-auto flex flex-col md:flex-row gap-8'>
                  <div className='md:w-[90%] w-[90%] bg-purple-50 md:px-10 px-5 md:py-5 py-3 rounded-lg border-[1.4px] border-purple-500 mx-auto mt-8'>
                    <canvas id='myChart-right'></canvas>
                  </div>
                  <div className='md:w-[90%] w-[90%] bg-purple-50 md:px-10 px-5 md:py-5 py-3 rounded-lg border-[1.4px] border-purple-500 mx-auto md:mt-8'>
                    <canvas id='myChart'></canvas>
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