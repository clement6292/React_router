import { useState } from "react";
import { useTranslation } from "react-i18next";

function Parametre() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [notif, setNotif] = useState(true);

  return (
    <div className="min-h-screen w-full flex flex-col ">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Bloc gauche : réglages */}
        <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-10">
          <h1 className="text-4xl font-bold text-cyan-700 dark:text-cyan-300 mb-4 animate-bounce">
            ⚙️ {t("settings") || "Paramètres"}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t("manage_settings") || "Gérez vos paramètres ici."}
          </p>
          {/* Dark mode toggle */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {t("dark_mode") || "Mode sombre"}
            </span>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                darkMode ? "bg-cyan-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
          {/* Notification toggle */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {t("notifications") || "Notifications"}
            </span>
            <button
              onClick={() => setNotif((n) => !n)}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                notif ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  notif ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>
        {/* Bloc droit : animation fun */}
        <div className="flex flex-col justify-center items-center relative min-h-[400px]">
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-[14px] border-cyan-400 border-t-transparent"></div>
            <div className="absolute inset-8 bg-gradient-to-tr from-cyan-300 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-7xl">🚀</span>
            </div>
          </div>
          <p className="mt-8 text-center text-cyan-700 dark:text-cyan-300 font-semibold text-2xl animate-pulse">
            {t("something_cool") || "Quelque chose de ouf arrive bientôt !"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Parametre;