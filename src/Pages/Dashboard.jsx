import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <nav className="flex space-x-4 bg-gray-100 p-3 rounded-lg mb-8 w-full justify-center">
            <NavLink
              to="profil"
              className={({ isActive }) =>
                `text-base font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-cyan-300 text-white' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`
              }
            >
              Profil
            </NavLink>
            <NavLink
              to="parametres"
              className={({ isActive }) =>
                `text-base font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-cyan-300 text-white' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`
              }
            >
              Paramètre
            </NavLink>
          </nav>
          <Outlet />
        </div>
      );
    }


export default Dashboard;
