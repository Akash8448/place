function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to PlacePro
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">For Students</h2>
          <ul className="space-y-2">
            <li>Create and manage your profile</li>
            <li>Upload and update your resume</li>
            <li>Apply for job opportunities</li>
            <li>Track application status</li>
            <li>Take mock tests</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">For Companies</h2>
          <ul className="space-y-2">
            <li>Post job openings</li>
            <li>Screen candidates</li>
            <li>Schedule interviews</li>
            <li>Manage recruitment drives</li>
            <li>Access analytics</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">For Placement Officers</h2>
          <ul className="space-y-2">
            <li>Monitor placement process</li>
            <li>Generate reports</li>
            <li>Track student progress</li>
            <li>Manage company relationships</li>
            <li>Schedule events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}