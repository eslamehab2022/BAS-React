import React, { useEffect, useState } from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { FaCaretRight, FaDownload } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Button, Container, FormControl } from "@mui/material";
import Image from "../../../Components/Image";
import { Form } from "react-bootstrap";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "../../../Components/FormHandler/Select";
import { InputLabel } from "../PlanModel/components/InputLabel";
import PdfImage from "../../../Components/PdfImage";
import { RiDeleteBin6Line } from "react-icons/ri";
import SaveButton from "../../../Components/SaveButton";
import { getUserProfile } from "../../../helper/fetchers/Profie";
import { toast } from "react-toastify";
import Progress from "../../../Components/Progress";
import { staticImageSrc } from "../../../Config/Config";
import moment from "moment";

const Profile = () => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState(null);
  const [idDate, setIdDate] = useState(null);
  const [openPdf, setOpenPdf] = useState(null);
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const { data } = await getUserProfile();
      console.log(data);
      if (data?.success) {
        setUser(data.user);
      } else {
        console.log("Data retrieval failed");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <SystemControler
        child={
          <div className="flex gap-3">
            <FaCaretRight
              onClick={() => navigate(-1)}
              className="pointer"
              color="#fff"
            />
            <p className="text-white">صفحتى الشخصية</p>{" "}
          </div>
        }
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <section className="Profile p-3 bg-[#1E1E2D] h-[782px] overflow-auto scrollbar-none  border !border-[#EFAA20] rounded-[27px] ">
          <Container>
            <h3 className="text-[#EFAA20] text-xl my-2 ">صفحتى الشخصية</h3>
            {user ? (
              <>
                <fieldset className="border p-2 !border-[#D5992133] w-3/4 mx-auto">
                  <legend className="text-center text-white">
                    {" "}
                    معلوماتى الشخصية
                  </legend>
                  <div>
                    <div className="mx-2 flex gap-3">
                      {/* should be user img */}
                      <Image
                        src={staticImageSrc + user.image}
                        alt="user img"
                        className={"w-[92px] h-[92px] rounded-[50%]"}
                      />
                      <div className="flex flex-col">
                        <p className="text-white text-xl">{user.firstName} </p>
                        <p className="text-[#EFAA20] text-base">{user.role}</p>
                        <span className="text-[#565674] text-sm">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#EFAA20] h-[1px]  w-90 text-start mt-3  "></div>
                  <div className="grid grid-cols-3 mt-4 gap-3">
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="first-Name" label={"الاسم الاول"} />
                      <input
                        disabled
                        size="small"
                        id="first-Name"
                        name="first-Name"
                        variant="outlined"
                        defaultValue={user.firstName}
                        className=" !text-white form-control h-[37px] bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="last-Name" label={"الاسم الاخير "} />
                      <input
                        disabled
                        defaultValue={user.lastName}
                        size="small"
                        id="last-Name"
                        name="last-Name"
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="user-Name" label={"اسم المستخدم"} />
                      <input
                        defaultValue={user.userName}
                        disabled
                        size="small"
                        id="user-Name"
                        name="user-Name"
                        variant="outlined"
                        className="!text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel
                        htmlFor="user-email"
                        label={"البريد الالكترونى "}
                      />
                      <input
                        disabled
                        defaultValue={user.email}
                        size="small"
                        id="user-email"
                        name="user-email"
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="user-phone" label={"رقم الجوال"} />
                      <input
                        disabled
                        defaultValue={user.phone}
                        size="small"
                        id="user-phone"
                        name="user-phone"
                        variant="outlined"
                        className="!text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel
                        id="visit-Date"
                        label={"تاريخ بداية العمل "}
                      />
                      <input
                        disabled
                        defaultValue={moment(user.startWork).format(
                          "YYYY-MM-DD"
                        )}
                        size="small"
                        id="visit-Date"
                        name="visit-Date"
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="city" label={"المدينة "} />
                      <input
                        disabled
                        defaultValue={user.city}
                        size="small"
                        id="city"
                        name="city"
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="area" label={"الحي "} />
                      <input
                        disabled
                        size="small"
                        id="area"
                        defaultValue={user.district}
                        name="area"
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="level" label={"الصلاحية"} />
                      <input
                        disabled
                        size="small"
                        id="level"
                        name="level"
                        defaultValue={user.level}
                        className="!text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="IdNumber" label={"رقم الهوية "} />
                      <input
                        disabled
                        size="small"
                        id="IdNumber"
                        name="IdNumber"
                        variant="outlined"
                        defaultValue={user.idNumber}
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="IdDate" label={"تاريخ الهوية "} />
                      <input
                        disabled
                        size="small"
                        defaultValue={user.idDate}
                        id="IdDate"
                        name="IdDate"
                        placeholder="تاريخ الهوية "
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                    <FormControl className="mb-3">
                      <InputLabel htmlFor="password" label={"  القسم "} />
                      <input
                        disabled
                        defaultValue={user.department}
                        size="small"
                        variant="outlined"
                        className=" !text-white form-control h-[37px]   bg-[#2B2B40] rounded-[7px]"
                      />
                    </FormControl>
                  </div>
                </fieldset>
                <fieldset className="border p-4 my-4 !border-[#D5992133] w-3/4 mx-auto">
                  <legend className="text-center text-white"> نبذة عنى</legend>

                  <FormControl className="!w-full">
                    <InputLabel label={" نبذة عني  "} />
                    <textarea
                      cols={5}
                      rows={5}
                      disabled
                      className="form-control overflow-hidden !w-full"
                    />
                  </FormControl>
                </fieldset>
                <fieldset className="border p-4 my-4 !border-[#D5992133] w-3/4 mx-auto">
                  <legend className="text-center text-white">اوراقي</legend>

                  <FormControl className="!w-full">
                    {user.fileUser > 0 &&
                      user.fileUser.map((file, index) => (
                        <div key={index}>
                          <InputLabel label={"اوراقي "} />
                          <div
                            className="border flex my-3 justify-between bg-[#1E1E2D] border-[#EFAA20] w-full h-[55px] rounded-[3.37px]"
                            key={index}
                          >
                            <div className="flex items-center gap-3">
                              <PdfImage
                                onClick={() => {
                                  setOpenPdf(true);
                                }}
                                width="99.81px"
                                height="53px"
                                openPdf={openPdf}
                                setOpenPdf={setOpenPdf}
                                pdfSrc={"/example.pdf"}
                              />
                              <p className="text-white">اسم الملف</p>
                            </div>
                            <div className="flex mx-3 items-center gap-3">
                              <Button
                                href={"/example.pdf"}
                                download={true}
                                className="bg-[#03795D] flex justify-center items-center rounded-[3px] pointer w-[22px] h-[25px]"
                              >
                                <FaDownload color="#fff" size={15} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </FormControl>
                </fieldset>
                <div className="flex justify-end">
                  <SaveButton
                    onClick={() => {
                      navigate(-1);
                    }}
                  />
                </div>
              </>
            ) : (
              <Progress />
            )}
          </Container>
        </section>
      </LocalizationProvider>
    </div>
  );
};

export default Profile;
