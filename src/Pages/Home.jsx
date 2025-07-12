import { Link } from "react-router-dom";

function Home() {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Bienvenu sur la page de Bord</h1>
          <Link
            to="/dashboard"
            className="bg-cyan-300 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
          >
            Aller sur le Dashboard
          </Link>
        </div>
      );
    }

export default Home;
