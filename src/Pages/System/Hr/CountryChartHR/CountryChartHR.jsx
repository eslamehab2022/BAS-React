import AllUsersPieChart from "../../../../Components/System/Users/AllUsersChart/AllUsersPieChart";
import CountryPieChart from "../../../../Components/System/Users/CountryChart/CountryPieChart";
import { Link, useParams } from "react-router-dom";
import CountryColumnChart from "../../../../Components/System/Users/CountryChart/CountryColumnChart";
import CountryDeprtamentSlider from "../../../../Components/System/Users/CountryChart/CountryDeprtamentSlider";
import SearchCountryUsers from "../../../../Components/System/Users/SearchUsers/SearchCountryUsers";
import { useEffect, useMemo, useState } from "react";
import SearchUsers from "../../../../Components/System/Users/SearchUsers/SearchUsers";
import { toast } from "react-toastify";
import { getUserStatisticsByRole } from "../../../../helper/fetchers/Users";

const CountryChartHR = () => {
  const { CountryName } = useParams();
  const [countryBase, setCountryBase] = useState("Saudia");
  const [countryBaseAr, setCountryBaseAr] = useState("السعودية");
  console.log(CountryName);

  useMemo(() => {
    if (CountryName === "Saudia") {
      setCountryBase("Saudia");
      setCountryBaseAr("السعودية");
    } else if (CountryName === "egypet") {
      setCountryBase("egypet");
      setCountryBaseAr("مصر");
    }
  }, [CountryName]);
  const [users, setUsers] = useState(false);
  const getUsersStaticts = async () => {
    try {
      const { data } = await getUserStatisticsByRole();
      console.log(data);
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUsersStaticts();
  }, []);

  // getUserStatisticsByRole
  useEffect(() => {}, [CountryName]);
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-4">
        <SearchUsers />
      </div>
      <div className="col-span-8">
        <div className="country-Chart py-5">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="d-flex  mx-auto gap-4   justify-center">
              <p className=" text-center text-xl   text-white mb-4">
                {countryBase === "Saudia" ? "السعودية" : "مصر"}
              </p>
              <Link
                to={
                  countryBase === "Saudia"
                    ? "/System/Hr/Employees/egypet"
                    : "/System/Hr/Employees/Saudia"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="20"
                  viewBox="0 0 13 20"
                  fill="none"
                >
                  <path
                    d="M11 18L1.85714 10L11 2"
                    stroke="#D59921"
                    stroke-width="2.28571"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <CountryPieChart
              country={countryBase}
              employee={users ? users.employee : 0}
              HR={users ? users.HR : 0}
              admin={users ? users.admin : 0}
              officeManager={users ? users['office manager'] : 0}
              audit={users ? users.audit : 0}
              senior={users ? users.senior : 0}
              accountant={users ? users.accountant : 0}
              administrator={users ? users.administrator : 0}
            />
          </div>
          <fieldset className="All-users-columnChart-container  py-3 m-auto ">
            <legend className="text-white text-center">
              كل المستخدمين في {countryBase === "Saudia" ? "السعودية" : "مصر"}{" "}
            </legend>

            <div className="county-users-columnChart  d-flex   align-items-center flex-column">
              <CountryColumnChart />

              <CountryDeprtamentSlider />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default CountryChartHR;
