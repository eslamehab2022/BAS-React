
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { egypetUsers, saudiaUsers } from "../Chatconsts";
import Image from "../../../../Components/Image";
import style from "../Chat.module.css";
import "./chatInput.css";
import { IoSend } from "react-icons/io5";
import InputEmoji from "react-input-emoji";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const ConnectedBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const NotConnectedBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#FF0000",
    color: "#FF0000",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const UserChat = () => {
  const { country, id } = useParams();
  const [user, setUser] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const getUser = (country, id) => {
      const users = country === "egypet" ? egypetUsers : saudiaUsers;
      const currentUser = users.find((user) => user.id === parseInt(id));
      setUser(currentUser);
    };
    getUser(country, id);
  }, [country, id]);

  const handleSendMessage = () => {
    if (text.trim() === "") return;
    // Implement sending message functionality here
    setText("");
  };

  return (
    <div className="w-full h-full relative p-2">
      {user && (
        <>
          <p className="text-[#D59921] text-center">{user.position}</p>
          <div className="my-3 flex gap-3">
            <Image
              src={user.img}
              alt="user img"
              className="w-[81px] h-[81px] rounded-[50%]"
            />
            <div>
              <h2 className="text-white text-base">{user.name}</h2>
              <p className="text-[#565674] text-base">{user.email}</p>
              <p className="text-[#565674] text-base">{user.phone}</p>
            </div>
          </div>
        </>
      )}
      <div className="chat-container mb-2 p-2 overflow-y-auto overflow-x-hidden h-[537px] border !border-[#D5992180] scrollbar-none !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9] mt-4">
        <div className="my-3 reciver  flex justify-end gap-3">
          <div
            className={`${style.userSenderMessage}  p-[14.22px] w-[241.67px] h-[41.43px] bg-[#151521] `}
          >
            <p className="text-white text-xs"> وين السيرفر ؟</p>
          </div>
          <Stack direction="row" spacing={2}>
            {user?.status === "connected" ? (
              <ConnectedBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={user?.img} />
              </ConnectedBadge>
            ) : (
              <NotConnectedBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={user?.img} />
              </NotConnectedBadge>
            )}
          </Stack>
        </div>
        <div className="my-3  sender flex justify-start gap-3">
          <Stack direction="row" spacing={2}>
            <ConnectedBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt="badr img" src={"/People/Badr.png"} />
            </ConnectedBadge>
          </Stack>
          <div
            className={`${style.userReciverMessage}  p-[14.22px] w-[241.67px] h-[41.43px] bg-[#414162] `}
          >
            <p className="text-white text-xs"> ابشر يا غالي</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 chatInputContainer bg-[#151521] rounded-[20px] border !border-[#414162] h-[97px] overflow-x-hidden scrollbar-none !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9]">
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleSendMessage}
          shouldReturn
          borderRadius="26"
          borderColor="00FFFFFF"
          inputClass="!border-transparent text-white text-start bg-[#151521]"
          placeholder="ارسل رسالة"
          theme="dark"
        />
        <div className="bg-[#414162] my-2 w-90 mx-auto h-[1px]"></div>
        <div className="mx-2 flex justify-between">
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
