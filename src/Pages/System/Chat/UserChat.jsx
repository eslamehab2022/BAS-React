import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { egypetUsers, saudiaUsers } from "./Chatconsts";
import Image from "../../../Components/Image";
import style from "./Chat.module.css";
import "./chatInput.css";
import { TextField } from "@mui/material";
import Input from "../../../Components/FormHandler/Input";
import { IoSend } from "react-icons/io5";
// import EmojiPicker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";
const UserChat = () => {
  const { country, id } = useParams();
  const [user, setUser] = useState();
  const [openEmojee, setOPenEmojee] = useState(false);
  const emojeeCase = Boolean(openEmojee);
  const Getuser = (country, id) => {
    let user;
    if (country === "egypet") {
      user = egypetUsers.filter((prev) => {
        return prev.id == id;
      });
    } else {
      user = saudiaUsers.filter((prev) => {
        return prev.id == id;
      });
    }
    setUser(user[0]);
    return user[0];
  };
  const handleEmojee = (emojes) => {
    console.log(emojes.emoji);
  };

  // handle input chat
  const [text, setText] = useState("");
  function handleOnEnter(text) {
    console.log("text is", text);
  }
  const handleSendMessage = () => {
    setText("");
  };
  useEffect(() => {
    Getuser(country, id);
  }, [country, id]);

  return (
    <div className="w-full h-full relative    p-2">
      <p className="text-[#D59921]  text-center ">{user?.poisition}</p>
      <div className="my-3 flex gap-3">
        <Image
          src={user?.img}
          alt="user img"
          className=" w-[81px] h-[81px] rounded-[50%]"
        />
        <div>
          <h2 className="text-white text-base">{user?.name}</h2>
          <p className="text-[#565674] text-base">{user?.email}</p>
          <p className="text-[#565674] text-base">{user?.phone}</p>
        </div>
      </div>
      <div className="chat-container mb-2 p-2 overflow-y-auto overflow-x-hidden h-[537px] border !border-[#D5992180]  scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9] mt-4">
        <div className="my-3 reciver  flex justify-end gap-3">
          <div
            className={`${style.userSenderMessage}  p-[14.22px] w-[241.67px] h-[41.43px] bg-[#151521] `}
          >
            <p className="text-white text-xs">السيستم هيجهز امتة يا حبيب ؟</p>
          </div>
          <Image
            src={user?.img}
            alt={"user img"}
            className={"w-[40px] h-[40px] rounded-[50%]"}
          />
        </div>
        <div className="my-3  sender flex justify-start gap-3">
          <Image
            src={"/People/habeeb.jpg"}
            alt={"user img"}
            className={"w-[40px] h-[40px] rounded-[50%]"}
          />
          <div
            className={`${style.userReciverMessage}  p-[14.22px] w-[241.67px] h-[41.43px] bg-[#414162] `}
          >
            <p className="text-white text-xs"> ابشر يا غالي</p>
          </div>
        </div>
      </div>
      <div
        className={`w-full mt-2  chatInputContainer  bg-[#151521] rounded-[20px] border !border-[#414162] h-[97px] overflow-x-hidden scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9] ${style.chatInput}`}
      >
        <InputEmoji
          value={text}
          onChange={(...prev) => {
            setText(prev + text);
          }}
          cleanOnEnter
          onEnter={handleOnEnter}
          language={"ar" | "en"}
          keepOpened
          shouldReturn
          borderRadius="26"
          borderColor="00FFFFFF"
          inputClass=" !border-transparent   text-white text-start   bg-[#151521]"
          placeholder="ارسل رسالة"
          theme="dark"
        />
        <div className="bg-[#414162] my-2 w-90 mx-auto h-[1px]"></div>
        <div className="mx-2 flex justify-between ">
          <IoSend
            onClick={handleSendMessage}
            color="#414162"
            className="pointer"
            size={25}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
