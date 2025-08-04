import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import Loginpage from './pages/Loginpage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardHero from './pages/DashboardHero.jsx';
import EmployeeManagement from './pages/EmployeeManagement.jsx';
import Recruitment from './pages/Recuritment.jsx'
import Events from './pages/Events.jsx'
import Letter from './pages/Letter.jsx'
import Report from './pages/Reports.jsx'
import Setting from './pages/Setting.jsx'
import Myaccount from './pages/Myaccount.jsx'

import Payroll from './pages/Payroll.jsx';
import AllEmployees from './pages/AllEmployees.jsx';
import AddEmployee from './pages/AddEmployee.jsx';
import Department from './pages/Department.jsx';
import Attendance from './pages/Attendance.jsx';
import Leave from './pages/Leave.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  const location = useLocation();
  return (

    <div className=' overflow-hidden'>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}>
            <Route index element={<DashboardHero />} />
            <Route path='main' element={<DashboardHero />} />
            <Route path="employee" element={<EmployeeManagement />}>
              <Route index element={<AllEmployees />} />
              <Route path="all" element={<AllEmployees />} />
              <Route path="add" element={<AddEmployee />} />
              <Route path="department" element={<Department />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="leave" element={<Leave />} />
            </Route>
            <Route path="payroll" element={<Payroll />} />
            <Route path="recuritment" element={<Recruitment />} />
            <Route path="events" element={<Events />} />
            <Route path="letter" element={<Letter />} />
            <Route path="reports" element={<Report />} />
            <Route path="setting" element={<Setting />} />
            <Route path="myaccount" element={<Myaccount />} />
          </Route>

        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
