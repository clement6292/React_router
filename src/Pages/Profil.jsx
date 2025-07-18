import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserContext } from "../context/Context";
import defaultAvatarImg from "../assets/smiling-young-man-illustration/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg";

const BLOOD_GROUPS = [
  "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
];
const MARITAL_STATUS = [
  "Célibataire", "Marié(e)", "Divorcé(e)", "Veuf(ve)", "Séparé(e)", "Pacsé(e)", "En couple"
];

function Profil() {
  const { t } = useTranslation();
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(user);
  }, [user]);

  useEffect(() => {
    // Fetch countries from restcountries.com
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then(res => res.json())
      .then(data => {
        const countryNames = data.map(c => c.name.common).sort();
        setCountries(countryNames);
        setLoadingCountries(false);
      })
      .catch(() => setLoadingCountries(false));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Ajoute la fonction pour gérer l'upload d'image
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(formData);
    navigate("/dashboard/user");
  };

  return (
    <div className="px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-6 border border-gray-100 items-center">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-300 shadow-sm mb-2 bg-gray-100 flex items-center justify-center">
          <img
            src={formData.avatar || defaultAvatarImg}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <label className="mb-2 text-sm text-gray-600 cursor-pointer hover:underline">
          <span>{t('change_profile_picture')}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </label>
        <h1 className="text-3xl font-bold text-cyan-700 mb-2 text-center">{t('edit_profile')}</h1>
        <form className="flex flex-col gap-6 w-full" onSubmit={e => {e.preventDefault(); handleSave();}}>
          {/* Ligne 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('name')}</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder={t('your_name')}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('email')}</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder={t('your_email')}
                type="email"
              />
            </div>
          </div>
          {/* Ligne 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('country')}</label>
              <select
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white"
                disabled={loadingCountries}
              >
                <option value="">{loadingCountries ? t('loading') : t('select')}</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Ligne 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('job')}</label>
              <input
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder={t('your_job')}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('blood_group')}</label>
              <select
                name="groupeSanguin"
                value={formData.groupeSanguin}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white"
              >
                <option value="">{t('select')}</option>
                {BLOOD_GROUPS.map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Ligne 4 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('profession')}</label>
              <input
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder={t('your_profession')}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-700 font-medium">{t('marital_status')}</label>
              <select
                name="situationMatrimoniale"
                value={formData.situationMatrimoniale}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition bg-white"
              >
                <option value="">{t('select')}</option>
                {MARITAL_STATUS.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Ligne 5 (bio seule) */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-gray-700 font-medium">{t('bio')}</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition min-h-[60px] resize-y"
              placeholder={t('your_bio')}
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg shadow-md transition text-lg"
          >
            {t('save')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profil;
