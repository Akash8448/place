import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Jobs from './Jobs';
import MockTests from './MockTests';
import Applications from './Applications';

function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
          <nav className="space-y-2">
            <NavLink to="/student/profile">Profile</NavLink>
            <NavLink to="/student/jobs">Jobs</NavLink>
            <NavLink to="/student/mock-tests">Mock Tests</NavLink>
            <NavLink to="/student/applications">Applications</NavLink>
          </nav>
        </div>

        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="mock-tests" element={<MockTests />} />
            <Route path="applications" element={<Applications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600"
    >
      {children}
    </Link>
  );
}