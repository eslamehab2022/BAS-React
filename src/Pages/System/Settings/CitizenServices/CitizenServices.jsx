import { useContext, useState } from "react";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdMore } from "react-icons/io";
import { PiImageThin } from "react-icons/pi";
import RemoveModal from "../RemoveModal";
import ViewModel from "../ViewModel";
import UpdateModalTimeLine from "../TimeLine/UpdateModalTimeLine";
import UpdateCitizenModal from "./UpdateCitizenModal";
import SearchButton from "../SearchButton";
import SettingContext from "../../../../Context/SettingContext";
import { useDeleteVacationCategory, useGetAllVacationCategories } from "../../../../hooks/fetchers/VacationCategory";
import { useDeleteServiceCategory, useGetAllServiceCategories } from "../../../../hooks/fetchers/ServiceCategory";

const DownloadIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        d="M10.45 6.6C10.3041 6.6  10.1642 6.65795 10.0611 6.76109C9.95795 6.86424 9.9 7.00413 9.9 7.15V9.35C9.9 9.49587 9.84205 9.63577 9.73891 9.73891C9.63577 9.84205 9.49587 9.9 9.35 9.9H1.65C1.50413 9.9 1.36424 9.84205 1.26109 9.73891C1.15795 9.63577 1.1 9.49587 1.1 9.35V7.15C1.1 7.00413 1.04205 6.86424 0.938909 6.76109C0.835764 6.65795 0.695869 6.6 0.55 6.6C0.404131 6.6 0.264236 6.65795 0.161091 6.76109C0.0579462 6.86424 0 7.00413 0 7.15V9.35C0 9.78761 0.173839 10.2073 0.483274 10.5167C0.792709 10.8262 1.21239 11 1.65 11H9.35C9.78761 11 10.2073 10.8262 10.5167 10.5167C10.8262 10.2073 11 9.78761 11 9.35V7.15C11 7.00413 10.9421 6.86424 10.8389 6.76109C10.7358 6.65795 10.5959 6.6 10.45 6.6ZM5.1095 7.5405C5.16181 7.59057 5.22349 7.62982 5.291 7.656C5.35684 7.6851 5.42802 7.70013 5.5 7.70013C5.57198 7.70013 5.64316 7.6851 5.709 7.656C5.77651 7.62982 5.83819 7.59057 5.8905 7.5405L8.0905 5.3405C8.19407 5.23693 8.25225 5.09647 8.25225 4.95C8.25225 4.80353 8.19407 4.66307 8.0905 4.5595C7.98693 4.45593 7.84647 4.39775 7.7 4.39775C7.55353 4.39775 7.41307 4.45593 7.3095 4.5595L6.05 5.8245V0.55C6.05 0.404131 5.99205 0.264236 5.88891 0.161091C5.78576 0.0579462 5.64587 0 5.5 0C5.35413 0 5.21424 0.0579462 5.11109 0.161091C5.00795 0.264236 4.95 0.404131 4.95 0.55V5.8245L3.6905 4.5595C3.63922 4.50822 3.57834 4.46754 3.51134 4.43979C3.44434 4.41203 3.37252 4.39775 3.3 4.39775C3.22748 4.39775 3.15567 4.41203 3.08866 4.43979C3.02166 4.46754 2.96078 4.50822 2.9095 4.5595C2.85822 4.61078 2.81754 4.67166 2.78979 4.73866C2.76203 4.80567 2.74775 4.87748 2.74775 4.95C2.74775 5.02252 2.76203 5.09434 2.78979 5.16134C2.81754 5.22834 2.85822 5.28922 2.9095 5.3405L5.1095 7.5405Z"
        fill={`${color ? color : "#757575"}`}
      />
    </svg>
  );
};
const ViewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
    >
      <g clipPath="url(#clip0_5150_37806)">
        <path
          d="M12.5644 1.43457H1.36159C1.06819 1.43457 0.828125 1.66935 0.828125 1.95631V10.0433C0.828125 10.3302 1.06819 10.565 1.36159 10.565H12.5644C12.8578 10.565 13.0979 10.3302 13.0979 10.0433V1.95631C13.0979 1.66935 12.8578 1.43457 12.5644 1.43457ZM12.031 2.47805V6.84761L11.1374 6.11718C10.9374 5.96066 10.6573 5.96066 10.4572 6.11718L9.01687 7.29109L5.66935 4.44761C5.4693 4.27805 5.18923 4.27805 4.98918 4.43457L1.89506 6.8737V2.47805H12.031ZM1.89506 9.52153V8.21718L5.30926 5.51718L8.65677 8.36066C8.85682 8.53022 9.15023 8.53022 9.35028 8.3737L10.7906 7.19979L12.031 8.21718V9.52153H1.89506ZM7.77655 4.25196C7.77655 3.73022 8.21666 3.29979 8.76347 3.29979C9.31027 3.29979 9.75038 3.73022 9.75038 4.25196C9.75038 4.7737 9.31027 5.20414 8.76347 5.20414C8.21666 5.20414 7.77655 4.7737 7.77655 4.25196Z"
          fill="#757575"
        />
      </g>
      <defs>
        <clipPath id="clip0_5150_37806">
          <rect
            width="12.2698"
            height="12"
            fill="white"
            transform="translate(0.828125)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const EditIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <g clipPath="url(#clip0_2905_33423)">
        <path
          d="M2.24662 9.75056H4.75935C4.83734 9.75101 4.91465 9.73606 4.98686 9.70657C5.05906 9.67708 5.12473 9.63362 5.18011 9.5787L9.28107 5.47181L10.9641 3.82432C11.0197 3.76922 11.0638 3.70368 11.0938 3.63146C11.1239 3.55925 11.1394 3.48179 11.1394 3.40355C11.1394 3.32532 11.1239 3.24786 11.0938 3.17564C11.0638 3.10343 11.0197 3.03788 10.9641 2.98279L8.45139 0.440434C8.3963 0.384888 8.33076 0.3408 8.25854 0.310714C8.18632 0.280627 8.10886 0.265137 8.03063 0.265137C7.9524 0.265137 7.87494 0.280627 7.80272 0.310714C7.7305 0.3408 7.66496 0.384888 7.60987 0.440434L5.93867 2.11756L1.82586 6.22444C1.77093 6.27982 1.72748 6.34549 1.69799 6.41769C1.6685 6.4899 1.65355 6.56721 1.654 6.64521V9.15793C1.654 9.31511 1.71643 9.46584 1.82757 9.57698C1.93871 9.68812 2.08945 9.75056 2.24662 9.75056ZM8.03063 1.6968L9.70776 3.37392L8.86623 4.21545L7.1891 2.53832L8.03063 1.6968ZM2.83925 6.88818L6.3535 3.37392L8.03063 5.05105L4.51637 8.56531H2.83925V6.88818ZM11.7286 10.9358H1.06137C0.9042 10.9358 0.753464 10.9982 0.642325 11.1094C0.531187 11.2205 0.46875 11.3713 0.46875 11.5284C0.46875 11.6856 0.531187 11.8363 0.642325 11.9475C0.753464 12.0586 0.9042 12.1211 1.06137 12.1211H11.7286C11.8858 12.1211 12.0365 12.0586 12.1477 11.9475C12.2588 11.8363 12.3212 11.6856 12.3212 11.5284C12.3212 11.3713 12.2588 11.2205 12.1477 11.1094C12.0365 10.9982 11.8858 10.9358 11.7286 10.9358Z"
          fill={`${color ? color : "#757575"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_2905_33423">
          <rect
            width="11.834"
            height="12.3895"
            fill="white"
            transform="translate(0.476562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const DeleteIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
    >
      <path
        d="M10.3559 5.1838L10.1222 12.2586C10.1022 12.8645 9.847 13.4388 9.4106 13.8596C8.97419 14.2804 8.39098 14.5146 7.78475 14.5124H3.34367C2.73782 14.5146 2.15495 14.2807 1.71861 13.8604C1.28227 13.4401 1.02676 12.8664 1.00626 12.2609L0.772514 5.1838C0.7674 5.02882 0.824061 4.87815 0.930032 4.76495C1.036 4.65175 1.1826 4.58528 1.33758 4.58016C1.49256 4.57505 1.64323 4.63171 1.75643 4.73768C1.86964 4.84365 1.93611 4.99025 1.94122 5.14523L2.17496 12.2217C2.1866 12.5238 2.31485 12.8097 2.53278 13.0192C2.7507 13.2287 3.04135 13.3457 3.34367 13.3455H7.78475C8.08746 13.3457 8.37844 13.2284 8.59642 13.0184C8.81441 12.8083 8.9424 12.5219 8.95345 12.2194L9.18719 5.14523C9.19231 4.99025 9.25878 4.84365 9.37198 4.73768C9.48519 4.63171 9.63585 4.57505 9.79083 4.58016C9.94581 4.58528 10.0924 4.65175 10.1984 4.76495C10.3044 4.87815 10.361 5.02882 10.3559 5.1838ZM11.129 2.82944C11.129 2.98442 11.0674 3.13305 10.9578 3.24264C10.8483 3.35223 10.6996 3.41379 10.5446 3.41379H0.584353C0.429373 3.41379 0.28074 3.35223 0.171153 3.24264C0.0615654 3.13305 0 2.98442 0 2.82944C0 2.67446 0.0615654 2.52583 0.171153 2.41624C0.28074 2.30665 0.429373 2.24509 0.584353 2.24509H2.39585C2.581 2.24559 2.75971 2.17718 2.89721 2.05319C3.03471 1.92919 3.12115 1.75847 3.13973 1.57425C3.18285 1.14211 3.38531 0.741509 3.70766 0.450488C4.03001 0.159466 4.44915 -0.00112389 4.88344 5.92118e-06H6.24498C6.67926 -0.00112389 7.09841 0.159466 7.42076 0.450488C7.74311 0.741509 7.94556 1.14211 7.98869 1.57425C8.00726 1.75847 8.09371 1.92919 8.2312 2.05319C8.3687 2.17718 8.54742 2.24559 8.73257 2.24509H10.5441C10.699 2.24509 10.8477 2.30665 10.9573 2.41624C11.0668 2.52583 11.1284 2.67446 11.1284 2.82944H11.129ZM4.15416 2.24509H6.97542C6.89863 2.06963 6.84841 1.88372 6.82641 1.69346C6.81193 1.54942 6.74451 1.41588 6.63719 1.31872C6.52988 1.22156 6.39033 1.16769 6.24556 1.16754H4.88402C4.73926 1.16769 4.5997 1.22156 4.49239 1.31872C4.38508 1.41588 4.31765 1.54942 4.30317 1.69346C4.28099 1.88375 4.23115 2.06966 4.15416 2.24509ZM4.74261 11.0986V6.12285C4.74261 5.96787 4.68104 5.81924 4.57145 5.70965C4.46187 5.60007 4.31323 5.5385 4.15825 5.5385C4.00327 5.5385 3.85464 5.60007 3.74505 5.70965C3.63547 5.81924 3.5739 5.96787 3.5739 6.12285V11.101C3.5739 11.2559 3.63547 11.4046 3.74505 11.5142C3.85464 11.6237 4.00327 11.6853 4.15825 11.6853C4.31323 11.6853 4.46187 11.6237 4.57145 11.5142C4.68104 11.4046 4.74261 11.2559 4.74261 11.101V11.0986ZM7.55568 11.0986V6.12285C7.55568 5.96787 7.49412 5.81924 7.38453 5.70965C7.27494 5.60007 7.12631 5.5385 6.97133 5.5385C6.81635 5.5385 6.66772 5.60007 6.55813 5.70965C6.44854 5.81924 6.38698 5.96787 6.38698 6.12285V11.101C6.38698 11.2559 6.44854 11.4046 6.55813 11.5142C6.66772 11.6237 6.81635 11.6853 6.97133 11.6853C7.12631 11.6853 7.27494 11.6237 7.38453 11.5142C7.49412 11.4046 7.55568 11.2559 7.55568 11.101V11.0986Z"
        fill={`${color ? color : "#757575"}`}
      />
    </svg>
  );
};

const holidaysData = [
  { id: 1, name: "مرضي" },
  { id: 2, name: "عارضة" },
  { id: 3, name: "سفر" },
  { id: 4, name: "اجازة حج" },
];
const servicesData = [
  { id: 1, name: "طلب اجازة" },
  { id: 2, name: "طلب توظيف" },
  { id: 3, name: "عرض عمل" },
  { id: 4, name: "اشعار مباشرة عمل" },
  { id: 5, name: "اشعار مباشرة عمل" },
];
const OptionsButton = ({ setHolidays, id }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const {mutate:deleteVacationCategoryMutate} = useDeleteVacationCategory()




  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => {
    setShowUpdate(true);
    // handleCloseDelete();
    // console.log("Delete");
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
    // handleCloseDelete();
    // console.log("Delete");
  };
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => {
    setShowView(true);
    // handleCloseDelete();
    // console.log("Delete");
  };
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoMdMore className="text-white" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx:{
            bgcolor: "white"
          }
        }}
      >
        <MenuItem
          className="border min-w-[133px] text-right text-black"
          sx={{ gap: 1 }}
          onClick={handleShowUpdate}
        >
          {" "}
          <EditIcon /> <span>تعديل</span>{" "}
        </MenuItem>
        <MenuItem
          className="border min-w-[133px] text-right text-black"
          sx={{ gap: 1 }}
          onClick={handleShowDelete}
        >
          {" "}
          <DeleteIcon /> <span>حذف</span>{" "}
        </MenuItem>
      </Menu>
      <RemoveModal
        title={"التأكيد"}
        show={showDelete}
        handleClose={handleCloseDelete}
        onSave={()=>{
          deleteVacationCategoryMutate(id)
        }}
      />
      <ViewModel
        title={"عرض البند"}
        show={showView}
        handleClose={handleCloseView}
        arr={setHolidays}
        id={id}
      />
      <UpdateCitizenModal
        title={"تعديل "}
        show={showUpdate}
        handleClose={handleCloseUpdate}
        type={"vacations"}
        id={id}
      />
    </div>
  );
};
const OptionsButtonServices = ({ setHolidays, id }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const {mutate: deleteServiceCategoryMutate} = useDeleteServiceCategory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => {
    setShowUpdate(true);
    // handleCloseDelete();
    // console.log("Delete");
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
    // handleCloseDelete();
    // console.log("Delete");
  };
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => {
    setShowView(true);
    // handleCloseDelete();
    // console.log("Delete");
  };
  return (
    <div>
      {/* <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoMdMore className="text-white" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          className="border min-w-[133px] text-right"
          sx={{ gap: 1 }}
          onClick={handleShowView}
        >
          {" "}
          <ViewIcon /> <span>عرض</span>{" "}
        </MenuItem>
        <MenuItem
          className="border min-w-[133px] text-right"
          sx={{ gap: 1 }}
          onClick={handleClose}
        >
          {" "}
          <DownloadIcon /> <span>تحميل</span>{" "}
        </MenuItem>
        <MenuItem
          className="border min-w-[133px] text-right"
          sx={{ gap: 1 }}
          onClick={handleShowUpdate}
        >
          {" "}
          <EditIcon /> <span>تعديل</span>{" "}
        </MenuItem>
        <MenuItem
          className="border min-w-[133px] text-right"
          sx={{ gap: 1 }}
          onClick={handleShowDelete}
        >
          {" "}
          <DeleteIcon /> <span>حذف</span>{" "}
        </MenuItem>
      </Menu> */}

      <div className="flex gap-3">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleShowUpdate}
          sx={{
            width: "25px",
            height: "25px",
            backgroundColor: "#136D01",
            borderRadius: "2.487px",
            "&:hover": {
              backgroundColor: "#136D01",
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <g clipPath="url(#clip0_2945_32876)">
              <path
                d="M1.8599 8.76125H3.99168C4.05785 8.76164 4.12345 8.74895 4.1847 8.72393C4.24596 8.69891 4.30168 8.66204 4.34866 8.61545L7.82789 5.13119L9.25578 3.73346C9.30291 3.68672 9.34031 3.63111 9.36584 3.56984C9.39136 3.50857 9.4045 3.44286 9.4045 3.37649C9.4045 3.31011 9.39136 3.2444 9.36584 3.18313C9.34031 3.12186 9.30291 3.06625 9.25578 3.01951L7.124 0.862588C7.07726 0.815464 7.02165 0.77806 6.96038 0.752534C6.89912 0.727009 6.8334 0.713867 6.76703 0.713867C6.70065 0.713867 6.63494 0.727009 6.57367 0.752534C6.5124 0.77806 6.45679 0.815464 6.41005 0.862588L4.99222 2.28545L1.50293 5.76972C1.45633 5.81669 1.41946 5.87241 1.39444 5.93367C1.36942 5.99493 1.35674 6.06052 1.35712 6.12669V8.25847C1.35712 8.39182 1.41009 8.5197 1.50438 8.61399C1.59867 8.70828 1.72655 8.76125 1.8599 8.76125ZM6.76703 1.92848L8.18989 3.35135L7.47594 4.06529L6.05308 2.64243L6.76703 1.92848ZM2.36268 6.33283L5.34416 3.35135L6.76703 4.77421L3.78554 7.75569H2.36268V6.33283ZM9.90437 9.76681H0.854342C0.720996 9.76681 0.593112 9.81978 0.498823 9.91407C0.404534 10.0084 0.351563 10.1362 0.351562 10.2696C0.351563 10.4029 0.404534 10.5308 0.498823 10.6251C0.593112 10.7194 0.720996 10.7724 0.854342 10.7724H9.90437C10.0377 10.7724 10.1656 10.7194 10.2599 10.6251C10.3542 10.5308 10.4071 10.4029 10.4071 10.2696C10.4071 10.1362 10.3542 10.0084 10.2599 9.91407C10.1656 9.81978 10.0377 9.76681 9.90437 9.76681Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2945_32876">
                <rect
                  width="10.0399"
                  height="10.5112"
                  fill="white"
                  transform="translate(0.359375 0.48877)"
                />
              </clipPath>
            </defs>
          </svg>
        </IconButton>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleShowDelete}
          sx={{
            width: "25px",
            height: "25px",
            backgroundColor: "#9E0C1E",
            borderRadius: "2.487px",
            "&:hover": {
              backgroundColor: "#9E0C1E",
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="13"
            viewBox="0 0 10 13"
            fill="none"
          >
            <path
              d="M9.28725 4.95775L9.08574 11.0569C9.06857 11.5793 8.84853 12.0744 8.4723 12.4372C8.09607 12.8 7.59328 13.0018 7.07064 13H3.24197C2.71967 13.0019 2.21717 12.8003 1.841 12.4379C1.46482 12.0756 1.24455 11.581 1.22687 11.0589L1.02536 4.95775C1.02095 4.82414 1.0698 4.69425 1.16116 4.59666C1.25252 4.49906 1.3789 4.44176 1.51251 4.43735C1.64612 4.43294 1.77601 4.48179 1.8736 4.57315C1.9712 4.66451 2.0285 4.79089 2.03291 4.9245L2.23442 11.0252C2.24445 11.2856 2.35502 11.5321 2.54289 11.7127C2.73077 11.8933 2.98134 11.9941 3.24197 11.994H7.07064C7.33161 11.9941 7.58247 11.893 7.7704 11.712C7.95832 11.5309 8.06867 11.284 8.07819 11.0232L8.2797 4.9245C8.28411 4.79089 8.34141 4.66451 8.43901 4.57315C8.5366 4.48179 8.66649 4.43294 8.8001 4.43735C8.93371 4.44176 9.06009 4.49906 9.15145 4.59666C9.24281 4.69425 9.29166 4.82414 9.28725 4.95775ZM9.95374 2.92805C9.95374 3.06165 9.90066 3.18979 9.80619 3.28427C9.71171 3.37874 9.58358 3.43182 9.44997 3.43182H0.863148C0.729539 3.43182 0.601403 3.37874 0.506927 3.28427C0.412451 3.18979 0.359375 3.06165 0.359375 2.92805C0.359375 2.79444 0.412451 2.6663 0.506927 2.57182C0.601403 2.47735 0.729539 2.42427 0.863148 2.42427H2.42485C2.58447 2.4247 2.73854 2.36573 2.85707 2.25883C2.97561 2.15193 3.05014 2.00476 3.06615 1.84594C3.10333 1.47339 3.27787 1.12803 3.55576 0.877137C3.83366 0.626246 4.19501 0.487801 4.56941 0.488775H5.7432C6.1176 0.487801 6.47895 0.626246 6.75685 0.877137C7.03475 1.12803 7.20929 1.47339 7.24646 1.84594C7.26247 2.00476 7.337 2.15193 7.45554 2.25883C7.57408 2.36573 7.72815 2.4247 7.88777 2.42427H9.44946C9.58307 2.42427 9.71121 2.47735 9.80568 2.57182C9.90016 2.6663 9.95324 2.79444 9.95324 2.92805H9.95374ZM3.9407 2.42427H6.37292C6.30672 2.27301 6.26342 2.11273 6.24446 1.94871C6.23198 1.82453 6.17385 1.70941 6.08133 1.62565C5.98882 1.54188 5.86851 1.49544 5.74371 1.49531H4.56991C4.44511 1.49544 4.3248 1.54188 4.23229 1.62565C4.13977 1.70941 4.08164 1.82453 4.06916 1.94871C4.05004 2.11276 4.00707 2.27304 3.9407 2.42427ZM4.448 10.0569V5.76731C4.448 5.6337 4.39492 5.50557 4.30045 5.41109C4.20597 5.31662 4.07784 5.26354 3.94423 5.26354C3.81062 5.26354 3.68248 5.31662 3.58801 5.41109C3.49353 5.50557 3.44045 5.6337 3.44045 5.76731V10.059C3.44045 10.1926 3.49353 10.3207 3.58801 10.4152C3.68248 10.5097 3.81062 10.5627 3.94423 10.5627C4.07784 10.5627 4.20597 10.5097 4.30045 10.4152C4.39492 10.3207 4.448 10.1926 4.448 10.059V10.0569ZM6.87317 10.0569V5.76731C6.87317 5.6337 6.82009 5.50557 6.72561 5.41109C6.63114 5.31662 6.503 5.26354 6.36939 5.26354C6.23578 5.26354 6.10765 5.31662 6.01317 5.41109C5.91869 5.50557 5.86562 5.6337 5.86562 5.76731V10.059C5.86562 10.1926 5.91869 10.3207 6.01317 10.4152C6.10765 10.5097 6.23578 10.5627 6.36939 10.5627C6.503 10.5627 6.63114 10.5097 6.72561 10.4152C6.82009 10.3207 6.87317 10.1926 6.87317 10.059V10.0569Z"
              fill="white"
            />
          </svg>
        </IconButton>
      </div>

      <RemoveModal
      title={"التأكيد"}
      show={showDelete}
      handleClose={handleCloseDelete}
      onSave={()=>{
        deleteServiceCategoryMutate(id)
      }}
        
      />
      <ViewModel
        title={"عرض البند"}
        show={showView}
        handleClose={handleCloseView}
        arr={setHolidays}
        id={id}
      />
      <UpdateCitizenModal
        title={"تعديل خدمة "}
        show={showUpdate}
        handleClose={handleCloseUpdate}
        type={"services"}
        id={id}
      />
    </div>
  );
};
const OrderBtn = ({ title, active, setActive, index , settingtype}) => {
  const { 
    citizenServicesType,
    setCitizenServicesType ,

  } = useContext(SettingContext);
  return (
    <button
      type="button"
      onClick={() => {
        setActive(index);
        setCitizenServicesType(index)
      
      }}
      className={`px-2 add-user-button text-right !w-full border hover:!border-[#EFAA20] rounded-md ${
        active === index
          ? "text-[#EFAA20] text-base  !border-[#EFAA20]"
          : "text-[#ffffff80] !text-xs !border-transparent"
      } `}
    >
      {title}
    </button>
  );
};
const SubCategoryBtn = ({ title, active, setActive, index, setHolidays }) => {
  return (
    <div
      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
        active === index ? "  !border-transparent" : " !border-transparent"
      }`}
    >
      <button type="button" onClick={() => setActive(index)} className="w-full">
        <p className="w-full text-white text-right my-3">{title}</p>
      </button>
      <OptionsButton setHolidays={setHolidays} id={index} />
    </div>
  );
};
const ServicesBtn = ({ title, active, setActive, index, setHolidays }) => {
  return (
    <div
      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
        active === index ? "  !border-transparent" : " !border-transparent"
      }`}
    >
      <button type="button" onClick={() => setActive(index)} className="w-full">
        <p className="w-full text-white text-right my-3">{title}</p>
      </button>
      <OptionsButtonServices setHolidays={setHolidays} id={index} />
    </div>
  );
};
function CitizenServices() {
  const {
    citizenServicesType,
    setCitizenServicesType,
  } = useContext(SettingContext);

  const {data: vacationCategories} = useGetAllVacationCategories()
  const {data: serviceCategories} = useGetAllServiceCategories()

  const [holidays, setHolidays] = useState([...holidaysData]);
  const [services, setServices] = useState([...servicesData]);
  const [active, setActive] = useState(1);



  console.log(serviceCategories?.data?.services);

  return (
    <section className="h-full">
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="col-span-3 text-white bg-[#1E1E2D] rounded-[19px]">
          <div className="px-2 py-3 flex flex-col gap-3">
            <p className="w-full text-white text-right">كل الخدمات </p>
            <div className="flex flex-col gap-2">
              <OrderBtn
                title={"الاجازات"}
                index={1}
                active={active}
                setActive={setActive}
                settingtype={"vacations"}
              />
              <OrderBtn
                title={"الخدمات"}
                index={2}
                active={active}
                setActive={setActive}
                settingtype={"services"}
              />
            </div>
          </div>
        </div>
        <div className="col-span-9 bg-[#1E1E2D] flex flex-col rounded-[19px]">
          <div className="p-3">
            <SearchButton />
          </div>
          <div className="p-3 mt-3 flex-1">
            <div
              className={`relative h-full py-4  px-2 border !border-[#d5992133]
                 
                 `}
            >
              <p className="absolute p-2 left-1/2 top-0 -translate-x-1/2 -mt-1 -translate-y-1/2 bg-[#1E1E2D] text-white text-[15px] font-semibold">
                {"كل بنود التقارير"}
              </p>
              <div className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#C8D0D0] scrollbar-track-transparent">
                {active == 1
                  ? vacationCategories?.data?.vacations?.map(({ _id, name }) => (
                      <SubCategoryBtn
                        title={name}
                        index={_id}
                        active={active}
                        setActive={setActive}
                        key={_id}
                        setHolidays={setHolidays}
                      />
                    ))
                  : null}
                {active == 2
                  ? serviceCategories?.data?.services?.map(({ _id, name }) => (
                      <ServicesBtn
                        title={name}
                        index={_id}
                        active={active}
                        setActive={setActive}
                        key={_id}
                        setHolidays={setServices}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CitizenServices;
