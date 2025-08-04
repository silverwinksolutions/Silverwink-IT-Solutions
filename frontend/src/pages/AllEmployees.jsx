import React, { useEffect, useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import axios from 'axios'
import { toast } from 'sonner';

const AllEmployees = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_BACKEND_URI + "/employee/all")
                setEmployees(res.data.allemployees)
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
        };
        fetchEmployees();
    }, [employees])

    return (
        <div className="p-6 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {employees.map((emp, index) => (
                <EmployeeCard key={index} emp={emp} />
            ))}

        </div>
    );
};

export default AllEmployees;
