import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="far fa-sun"></i> Light Mode'
  );
  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state;

  const backBtn = () => {
    navigate(-1);
  };

  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<i class="far fa-moon"></i> Dark Mode');
      setMode((prev) => !prev);
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<i class="far fa-sun"></i> Light Mode');
      setMode((prev) => !prev);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className="flex container mx-auto">
          <h1 className="font-bold text-xl">Where in the world?</h1>
          <div className="ml-auto font-medium">
            <button
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-16 p-4">
        <button
          className="px-8 py-2 bg-white text-gray shadow-md rounded-lg dark:bg-gray-700 dark:text-white"
          onClick={() => {
            backBtn();
          }}
        >
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto p-4 lg:p-8 ">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full"
        />
        <div className="p-8">
          <h2 className="font-bold text-2xl mb-8">{country.name.common}</h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-4">
            <p>
              Official name:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {country.name.official}
              </span>
            </p>
            <p>
              Population:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {country.population}
              </span>
            </p>
            <p>
              Region:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {country.region}
              </span>
            </p>
            <p>
              Subregion:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {country.subregion}
              </span>
            </p>
            <p>
              Capital:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {country.capital}
              </span>
            </p>
            <p>
              Top level domain:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {country.tld}
              </span>
            </p>
            <p>
              Currencies:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {Object.values(country.currencies).map((cur) => cur.name + " ")}
              </span>
            </p>
            <p>
              Languages:
              <span className="dark:text-gray-400 text-gray-700 text-sm">
                {" "}
                {Object.values(country.languages).map((lan) => lan + " ")}
              </span>
            </p>
            <p>
              <span className="dark:text-gray-400 text-gray-700 text-sm"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
