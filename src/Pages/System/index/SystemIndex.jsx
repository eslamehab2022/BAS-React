import React, { useContext, useEffect, useLayoutEffect } from "react";

import "./index.css";
import { Outlet, useNavigate } from "react-router-dom";
import AsideBar from "../../../Components/System/AsideBar/AsideBar";
import Image from "../../../Components/Image";
import { SideBarProvider } from "../../../Context/SideBarProvider";
import { UserProvider } from "../../../Context/userProvider";
const SystemIndex = () => {
  const { collapsed, setCollapsed } = useContext(SideBarProvider);
  const navigate = useNavigate();
  const { user } = useContext(UserProvider);

  useEffect(() => {
    if (!user) {
      navigate("/");
      console.log("no user exists");
    }
  }, [user]);

  return (
    <section className="full-system system-bg min-h-screen">
      <header className="container px-10">
        <nav className="flex justify-end">
          <div className="">
            <Image
              src={process.env.PUBLIC_URL + "/icons/systemlogo.png"}
              alt="BSA logo"
              className="system-logo text-white"
            />
          </div>
        </nav>
      </header>

      <section className="container px-10 flex justify-between gap-3 py-2 ">
        <div className="max-w-xs">
          <AsideBar />
        </div>
        <main className="flex-1 transition-all">
          <Outlet />
        </main>
      </section>
    </section>
  );
};

export default SystemIndex;
/*
<section className="full-system over-flow-hidden  system-bg ">
      <div className="w-90 mx-auto d-flex gap-2  tablet:relative justify-end mt-1 ">
        <Image
          src={process.env.PUBLIC_URL + "/icons/systemlogo.png"}
          alt="BSA logo"
          className="system-logo text-white"
        />
      </div>


      
      <div
        className={`d-flex gap-4 mx-auto  w-90  ${
          collapsed && " justify-between"
        }`}
      >
        <div
          className={`   ${
            collapsed
              ? "desktop:w-[100px] laptop:w-[100px]  tablet:w-[95px] tablet:absolute tablet:z-50 start-0 desktop:top-[9%]  laptop:top-[9%] tablet:[top-9%]  "
              : "desktop:static  laptop:static desktop:w-[380px]  laptop:w-[380px]  tablet:w-[350px]   mobile:w-[350px]   tablet:absolute tablet:z-50 start-0   tablet:[top-9%]         "
          }
                align-items-center `}
        >
          <AsideBar />
        </div>
        <div
          className={`   ${
            collapsed
              ? "desktop:w-[80%]  tablet:w-[80%]   mobile:w-[80%]     "
              : "desktop:w-[89.5%] laptop:w-[89.5%]   tablet:w-[80%]        "
          } 
                
                d-flex gap-2  mx-auto  h-100  align-items-center `}
        >
          <div className={`w-full    system-container   `}>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
 */
