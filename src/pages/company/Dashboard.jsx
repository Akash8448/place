import { Routes, Route } from 'react-router-dom';
import JobPostings from './JobPostings';
import Candidates from './Candidates';
import Interviews from './Interviews';
import Analytics from './Analytics';

function CompanyDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Company Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
          <nav className="space-y-2">
            <NavLink to="/company/job-postings">Job Postings</NavLink>
            <NavLink to="/company/candidates">Candidates</NavLink>
            <NavLink to="/company/interviews">Interviews</NavLink>
            <NavLink to="/company/analytics">Analytics</NavLink>
          </nav>
        </div>

        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
          <Routes>
            <Route path="job-postings" element={<JobPostings />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="interviews" element={<Interviews />} />
            <Route path="analytics" element={<Analytics />} />
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