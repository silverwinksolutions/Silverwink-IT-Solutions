import React from 'react';
import { FaUsers } from 'react-icons/fa';

const DashboardCard = ({ title, count, icon: Icon, bgColor }) => {
  return (
    <div className={`flex flex-col hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl items-center justify-center gap-4 p-4 rounded-xl shadow-md text-white ${bgColor}`}>
      <div className="text-4xl">
        <Icon />
      </div>
      <div>
        <p className="text-lg text-center font-medium">{title}</p>
        <h2 className="text-2xl text-center font-bold">{count}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
