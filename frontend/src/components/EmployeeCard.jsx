import React from 'react';
import ScrollReveal from './Scrollreveal';

const EmployeeCard = ({ emp }) => {
    return (
        <ScrollReveal delay={0.1}>
            <div
                className="bg-[#242c40] rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
            >
                <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-center text-white">{emp.name}</h2>
                <p className="text-center text-white">{emp.position}</p>
                <p className="text-center text-sm text-white">{emp.email}</p>
            </div>
        </ScrollReveal>
    );
};

export default EmployeeCard;
