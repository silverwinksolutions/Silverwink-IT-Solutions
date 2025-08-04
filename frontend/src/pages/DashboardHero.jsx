import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import { FaUsers, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import axios from 'axios';

const dashboardData = [
  {
    title: "Total Employees",
    count: 52,
    icon: FaUsers,
    bgColor: "bg-blue-600",
  },
  {
    title: "Reports Generated",
    count: 28,
    icon: FaFileAlt,
    bgColor: "bg-green-600",
  },
  {
    title: "Open Positions",
    count: 4,
    icon: FaBriefcase,
    bgColor: "bg-orange-500",
  },
  {
    title: "Total Employees",
    count: 52,
    icon: FaUsers,
    bgColor: "bg-blue-600",
  },
  {
    title: "Reports Generated",
    count: 28,
    icon: FaFileAlt,
    bgColor: "bg-green-600",
  },
  {
    title: "Open Positions",
    count: 4,
    icon: FaBriefcase,
    bgColor: "bg-orange-500",
  },
];

const DashboardHero = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(import.meta.env.VITE_BACKEND_URI + "/employee/all")
      console.log(res.data.count)
    }
    fetchData();
  }, [])

  return (
    <PageWrapper>
      <div className="w-full bg-[#141b2d] min-h-screen py-8 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dashboardData.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              count={card.count}
              icon={card.icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default DashboardHero;
