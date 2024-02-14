import React, { useMemo, useRef, useState } from "react";
import "./SystemSignIn.css";
import { Button, Container, Form } from "react-bootstrap";
import Input from "../../../../Components/FormHandler/Input";
import { Link, useNavigate } from "react-router-dom";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../../../../Components/Image";
import { useForm } from "react-hook-form";

import { useMutation } from "react-query";
import myAxiosInstance from "../../../../helper/https";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Progress from "../../../../Components/Progress";
import { userLogin } from "../../../../helper/fetchers/Login";

const SystemSignIn = () => {
  const [morningNightMode, setMorningNightMode] = useState("morning");
  const [checked, setChecked] = useState(false);
  const [notFound, setNotFound] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm();

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const handleNightMode = (e) => {
    setChecked(e.target.checked);
    console.log("checked is" + e.target.checked);
    if (morningNightMode === "morning") {
      setMorningNightMode("night");
    } else {
      setMorningNightMode("morning");
    }
  };
  const onSubmit = async (userData) => {
    try {
      const { data } = await userLogin(userData);
      console.log(data);
      if (data.success) {
        Cookies.set("accessToken", data.accessToken);
        navigate("/System/index");
      }
    } catch ({ response }) {
      if (response.status === 404 || response.status === 401) {
        setNotFound("اسم المستخدم او كلمة المرور غير صحيحة");
      } else {
        toast.error(response?.data?.message);
      }
    } finally {
      // write any code here
    }
  };

  return (
    <div
      className={` overflow-hidden ${
        morningNightMode === "morning"
          ? "systemLoginmorning"
          : "systemLoginNight"
      } systemLogin  relative w-100 h-screen   '   `}
    >
      <FormGroup className="absolute z-50">
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              onChange={handleNightMode}
              checked={checked}
              label={"dgffd"}
            />
          }
        />
      </FormGroup>
      <div className="layer  absolute  d-flex justify-content-center align-items-center top-0 bottom-0 right-0 end-0">
        <div
          className="signInCard 
                  rounded-[56.95px]
                 "
        >
          <Form onSubmit={handleSubmit(onSubmit)} className="  w-75 h-100">
            <Image
              src="../systemlogin.gif"
              style={{ width: "379px", height: "214px" }}
              alt="logo image"
            />
            <Form.Group>
              <Form.Label className="text-black">أسم المستخدم</Form.Label>
              <input
                {...register("userName")}
                onChange={() => setNotFound("")}
                className="form-control !bg-transparent mb-4 h-[48.99px] border !border-[#94713E] hover:!border-[#94713E]  focus:!border-[#94713E] "
                placeholder="ادخل اسم المستخدم "
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-black"> كلمة المرور</Form.Label>

              <input
                {...register("password")}
                onChange={() => setNotFound("")}
                className="form-control !bg-transparent mb-4 h-[48.99px] border !border-[#94713E] hover:!border-[#94713E]  focus:!border-[#94713E] "
                type="password"
                placeholder="ادخل كلمه مرور المستخدم "
              />
            </Form.Group>
            <p className="flex justify-center text-[#FF1C00]"> {notFound} </p>
            <Button
              type="submit"
              className="text-black mt-3 w-[379.646px] h-[48.987px] !bg-[#fff] hover:!bg-[#fff] !border-trasnparent shadow-lg shadow-neutral-600"
            >
              {" "}
              {isSubmitting ? <Progress isSmall /> : " الدخول الي الحساب"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SystemSignIn;
