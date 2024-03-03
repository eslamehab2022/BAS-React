import Cookies from "js-cookie";
import config from "../Config/Config";

export function convertDateFormat(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export function convertTimeFormat(timeString) {
  const date = new Date(timeString);

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${minutes} ${period}`;
}

export function FilesUrl(url) {
  return `${config.apiGateway?.URL}/${url}`;
}

export function CheckRole(role) {
  return Cookies.get("role") && Cookies.get("role") === role;
}


export const statusEnum = {
  0: { title: "معلقة", color: "#2420EF" },
  1: { title: "قيد التنفيذ", color: "#EFAA20" },
  2: { title: "مكتملة", color: "#19b159" },
  3: { title: "موقوفة", color: "#19B159" },
  4: { title: "مقبول", color: "#19B159" },
  5: { title: "مرفوضة", color: "#FFFFFF" },
};
