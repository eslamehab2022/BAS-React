import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./AsideBar.css";
import { Link } from "react-router-dom";
import Image from "../../Image";

import { FaBars } from "react-icons/fa6";
import { SideBarProvider } from "../../../Context/SideBarProvider";
import { FaCaretDown } from "react-icons/fa";
import { Badge } from "@mui/material";
const AsideBar = () => {
  const [rtl, setRtl] = useState(true);
  // setting the width of the screen
  const [width, setWidth] = useState(window.innerWidth);
  const { collapsed, setCollapsed } = useContext(SideBarProvider);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = (event) => {
    setMenuOpen(false);
  };
  const handleOpenProfileMenu = () => setOpenProfile(!openProfile);

  function getSize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    // if user start to resize the screen call getsize function
    window.addEventListener("resize", getSize);
    // if you use screens from tablet collapse the sidebar
    if (width < 1025) {
      setCollapsed(true);
      console.log("closed due to small width");
    } else {
      setCollapsed(false);
      console.log("opend due to small width");
    }
    console.log(window.innerWidth);
    // clear the use Effect
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [window.innerWidth]);

  return (
    <div
      className={` asidePar   !overflow-x-visible !scrollbar-none   rounded-[19px]  relative flex items-center  w-full h-full   `}
      style={{ direction: rtl ? "rtl" : "ltr" }}
    >
      <ProfileMenu show={openProfile} setShow={setOpenProfile} />
      <Sidebar
        transitionDuration={800}
        width="300px"
        collapsedWidth="100px !important"
        rootStyles={{
          color: "#FFF",
          height: "100%",
          border: "2px solid #EFAA20 !important",
          borderRadius: "19px",
          overflow: "hidden",
        }}
        collapsed={width < 1025 ? true : collapsed}
        rtl={rtl}
        backgroundColor="#1E1E2D"
        // className="  w-100"
        color="#FFF"
      >
        <div className="d-flex collapsed-handler mx-2 mt-2 justify-end">
          <FaBars
            color="#FFF"
            size={20}
            className="pointer"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <Menu transitionDuration={200} className="w-100 overflow-x-visible ">
          <MenuItem className="mt-4 overflow-x-visible  center w-100">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <div>
                {" "}
                <Image
                  src={process.env.PUBLIC_URL + "/Badr.png"}
                  alt="icon"
                  className="user-icon"
                  onClick={handleOpenProfileMenu}
                />
              </div>
              <div className="hidden-collapsed ">
                <p style={{ fontSize: "19px" }} className=" p-0 mx-0  my-2">
                  بدر بن سليمان
                </p>
                <p className="golden-text ">رئيس مجلس الأدارة</p>
                <p style={{ fontSize: "14px", color: "#565674" }}>
                  badr@bsa.com
                </p>
              </div>
            </div>
          </MenuItem>

          <MenuItem className="my-2 hidden-collapsed  d-flex flex-column ">
            <div className=" goals    ">
              <p>الاهداف</p>
              <ProgressBar className="w-100   " variant="warning" now={37} />
              <p style={{ fontSize: "14px" }} className="my-2">
                وصلت إلى 37% من هدفك
              </p>

              <div className="d-flex justify-content-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="66"
                  viewBox="0 0 134 66"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="133"
                    height="65"
                    rx="10.5"
                    stroke="#434362"
                    stroke-linejoin="round"
                    stroke-dasharray="3 3"
                  />
                  <text fill="white   ">
                    <tspan
                      fill="rgba(255, 255, 255, 0.50)"
                      x="100"
                      y={20}
                      fontSize={"12"}
                      dy="0"
                    >
                      مشاريع منتهية
                    </tspan>
                    <tspan
                      x="90"
                      fill="#75CC68"
                      y={50}
                      fontSize={"20"}
                      className="text-center "
                      dy="0"
                    >
                      {" "}
                      30 %
                    </tspan>
                  </text>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="66"
                  viewBox="0 0 134 66"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="133"
                    height="65"
                    rx="10.5"
                    stroke="#434362"
                    stroke-linejoin="round"
                    stroke-dasharray="3 3"
                  />
                  <text fill="white   ">
                    <tspan
                      fill="rgba(255, 255, 255, 0.50)"
                      x="110"
                      y={20}
                      fontSize={"12"}
                      dy="0"
                    >
                      {" "}
                      مشاريع قيد التنفيذ
                    </tspan>
                    <tspan
                      x="90"
                      fill="#F1416C"
                      y={50}
                      fontSize={"20"}
                      className="text-center "
                      dy="0"
                    >
                      {" "}
                      70 %
                    </tspan>
                  </text>
                </svg>
              </div>
            </div>
          </MenuItem>
          <MenuItem className="my-2 overflow-y-hidden w-100">
            <div className="row  system-card-container">
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to="/System/index">
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/Main.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />

                        <p>الرئيسية</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/Clients/index"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/Customers.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>العملاء</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to="/System/Users/index">
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/users.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>المستخدمين</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to="/System/Requests/index">
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/orders.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>الطلبات</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>{" "}
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/Projects/index"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/projects.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>المشاريع</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>{" "}
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/plans"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/tasks.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>المهام</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/Meetings/index"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/meetings.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>الاجتماعات</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/Hr/index"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL + "/icons/asideIcons/hr.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>الموارد البشرية </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/Accounating/index"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/Acouuntaing.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>الحسابات </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link to={"/System/Chat/index"}>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/Conversation.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>محادثاتى</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  {/* <Link> */}
                  <div class="system-card" onClick={handleOpenMenu}>
                    <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                      <Image
                        src={
                          process.env.PUBLIC_URL +
                          "/icons/asideIcons/settings.png"
                        }
                        alt="icon"
                        className="aside-icon mt-3"
                      />
                      <p style={{ fontSize: "14px" }}>الاعدادات </p>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="system-item">
                  <Link>
                    <div class="system-card">
                      <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                        <Image
                          src={
                            process.env.PUBLIC_URL +
                            "/icons/asideIcons/exit.png"
                          }
                          alt="icon"
                          className="aside-icon mt-3"
                        />
                        <p>خروج </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <SettingsMenu
              handleCloseMenu={handleCloseMenu}
              openSettingsMenu={isMenuOpen}
            />
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export const SettingsMenu = ({ openSettingsMenu, handleCloseMenu }) => {
  return (
    <div
      className={`absolute ${
        openSettingsMenu ? "top-0" : "top-full"
      } left-0 w-full h-full rounded-[19px] transition-all ease-in-out duration-500 overflow-hidden bg-[#ffffff3d] backdrop-blur-[15.899999618530273px]    `}
    >
      <div onClick={handleCloseMenu} className="bg-[#2b2b40de] p-2 text-center">
        <Image
          src={process.env.PUBLIC_URL + "/icons/asideIcons/settings.png"}
          alt="icon"
          className="aside-icon mt-3"
        />
        <p>الاعدادات</p>
      </div>
      <div className="row p-2 system-card-container ">
        <div className="col-md-4 ">
          <div className="system-item">
            <Link to="/System/Settings/Reception">
              <div class="system-card">
                <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                  <Image
                    src={
                      process.env.PUBLIC_URL + "/icons/asideIcons/Reception.png"
                    }
                    alt="icon"
                    className="aside-icon "
                  />
                  <p>الاستقبال</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="system-item">
            <Link to="/System/Settings/Orders">
              <div class="system-card">
                <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                  <Image
                    src={
                      process.env.PUBLIC_URL + "/icons/asideIcons/orders.png"
                    }
                    alt="icon"
                    className="aside-icon "
                  />
                  <p>الطلبات</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="system-item">
            <Link to={"/System/Settings/Accounating"}>
              <div class="system-card">
                <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                  <Image
                    src={
                      process.env.PUBLIC_URL +
                      "/icons/asideIcons/Acouuntaing.png"
                    }
                    alt="icon"
                    className="aside-icon "
                  />
                  <p>الحسابات </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="system-item">
            <Link to={"/System/Settings/CitizenServices"}>
              <div class="system-card">
                <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                  <Image
                    src={
                      process.env.PUBLIC_URL +
                      "/icons/asideIcons/CustomerServices.png"
                    }
                    alt="icon"
                    className="aside-icon "
                  />
                  <p>خدمات الموظفين</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="system-item">
            <Link to={"/System/Settings/TimeLine"}>
              <div
                class="system-card"
                onClick={() => {
                  console.log("Settings Clicked");
                }}
              >
                <div class="card__content d-flex justify-content-center align-items-center  flex-column  ">
                  <Image
                    src={
                      process.env.PUBLIC_URL + "/icons/asideIcons/TimePlan.png"
                    }
                    alt="icon"
                    className="aside-icon "
                  />
                  <p style={{ fontSize: "10px" }}>اليات الخطه الزمنيه </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileMenu = ({ show, setShow }) => {
  const [lang, setLang] = useState("ar");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const handlelang = () => {
    setShowLangMenu(!showLangMenu);
  };
  const handleChangeLang = () => {
    if (lang === "ar") {
      setLang("en");
    } else {
      setLang("ar");
    }
  };
  return (
    <>
      <div
        className={` !absolute p-2  z-[100000]   border !border-[#2B2B40] right-[62%]  !top-[10%] transition-all ease-in-out duration-500  bg-[#1E1E2D] rounded-[14px] w-[0px] h-[0] opacity-0 ${
          show && " !h-[353px] !w-[245px] !opacity-100"
        } `}
      >
        <div className="relative">
          <div className="mx-2 flex gap-2">
            {/* should be user img */}
            <Image
              src="/People/Badr.png"
              alt="user img"
              className={"w-[51px] h-[51px] rounded-[50%]"}
            />
            <div className="flex flex-col">
              <p className="text-white text-base">بدر بن سليمان </p>
              <p className="text-[#EFAA20] text-xs">رئيس مجلس الأدارة</p>

              <span className="text-[#565674] text-xs">bader@bsa.com</span>
            </div>
          </div>
          <div className="bg-[#D5992133] h-[1px] w-full my-2"></div>
          <div onClick={() => setShow(false)} className="mt-2 mb-3 mx-2">
            <Link className="w-full " to="Profile/2424">
              <div>
                <p className="text-sm text-white">صفحتى الشخصية</p>
              </div>
            </Link>
          </div>
          <Link
            to="/System/Projects/index"
            onClick={() => setShow(false)}
            className="mt-2  flex justify-between items-center pointer h-[33px] mb-3 mx-2"
          >
            <p className=" text-sm text-white">مشاريعي</p>
            <Badge badgeContent={2} color="error"></Badge>
          </Link>

          <div
            onClick={() => setShow(false)}
            className="mt-2  pointer h-[33px] mb-3 mx-2"
          >
            <Link
              className="flex justify-between items-center"
              to="/System/Chat/index"
            >
              <p className="text-sm text-white"> محادثاتى</p>
              <Badge badgeContent={3} color="error"></Badge>
            </Link>
          </div>

          <div className="mt-2 pointer relative h-[33px] mb-3 mx-1 flex items-center justify-between">
            <p className="text-white">اللغة </p>

            {lang === "ar" ? (
              <div
                onClick={handlelang}
                dir="rtl"
                className="w-full my-3 mx-2  flex   justify-end gap-3 "
              >
                <p className="text-white">العربية (KSA)</p>
                <Image
                  src="/saudiFlagicon.png"
                  alt="sauida flag"
                  className={"rounded-[50%]  w-[21.26px] h-[21.26px] "}
                />
              </div>
            ) : (
              <div
                onClick={handlelang}
                dir="rtl"
                className="w-full my-3 mx-2  flex   justify-end gap-3 "
              >
                <p className="text-white"> English (USA)</p>
                <Image
                  src="/usa.png"
                  alt="usa flag"
                  className={"rounded-[50%]  w-[21.26px] h-[21.26px] "}
                />
              </div>
            )}

            <div
              className={`lang-meu absolute p-3  border !border-[#2B2B40] transition-all ease-in-out duration-500 right-[110%] top-[100%] w-[0px] h-[0] opacity-0  bg-[#1E1E2D] rounded-[14px]
            ${showLangMenu && "!w-[172px] !h-[118px] !opacity-100"}
            `}
            >
              {" "}
              <div
                onClick={()=> setLang("ar")}
                dir="rtl"
                className="w-full my-3 mx-2  flex   justify-end gap-3 "
              >
                <p className="text-white">العربية (KSA)</p>
                <Image
                  src="/saudiFlagicon.png"
                  alt="sauida flag"
                  className={"rounded-[50%]  w-[21.26px] h-[21.26px] "}
                />
              </div>
              <div
               onClick={()=> setLang("en")}
                dir="rtl"
                className="w-full my-3 mx-2  flex   justify-end gap-3 "
              >
                <p className="text-white"> English (USA)</p>
                <Image
                  src="/usa.png"
                  alt="usa flag"
                  className={"rounded-[50%]  w-[21.26px] h-[21.26px] "}
                />
              </div>
            </div>
          </div>

          <div
            onClick={() => setShow(false)}
            className="mt-2 pointer h-[33px] mb-3 mx-2"
          >
            <p className="text-sm text-white"> تسجيل الخروج</p>
          </div>
          <div
            className="absolute w-full  top-full 
           bg-[#D5992133] h-[1px]  my-2"
          ></div>
        </div>
      </div>
    </>
  );
};

export default AsideBar;
