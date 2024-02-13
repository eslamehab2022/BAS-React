import React, { Fragment, useContext, useEffect, useState } from "react";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { IoMdMore } from "react-icons/io";
import Style from "./Orders.module.css";
import AddModal from "../AddModal";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchButton from "../SearchButton";
import SettingContext from "../../../../Context/SettingContext";

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <g clip-path="url(#clip0_2905_33423)">
        <path
          d="M2.24662 9.75056H4.75935C4.83734 9.75101 4.91465 9.73606 4.98686 9.70657C5.05906 9.67708 5.12473 9.63362 5.18011 9.5787L9.28107 5.47181L10.9641 3.82432C11.0197 3.76922 11.0638 3.70368 11.0938 3.63146C11.1239 3.55925 11.1394 3.48179 11.1394 3.40355C11.1394 3.32532 11.1239 3.24786 11.0938 3.17564C11.0638 3.10343 11.0197 3.03788 10.9641 2.98279L8.45139 0.440434C8.3963 0.384888 8.33076 0.3408 8.25854 0.310714C8.18632 0.280627 8.10886 0.265137 8.03063 0.265137C7.9524 0.265137 7.87494 0.280627 7.80272 0.310714C7.7305 0.3408 7.66496 0.384888 7.60987 0.440434L5.93867 2.11756L1.82586 6.22444C1.77093 6.27982 1.72748 6.34549 1.69799 6.41769C1.6685 6.4899 1.65355 6.56721 1.654 6.64521V9.15793C1.654 9.31511 1.71643 9.46584 1.82757 9.57698C1.93871 9.68812 2.08945 9.75056 2.24662 9.75056ZM8.03063 1.6968L9.70776 3.37392L8.86623 4.21545L7.1891 2.53832L8.03063 1.6968ZM2.83925 6.88818L6.3535 3.37392L8.03063 5.05105L4.51637 8.56531H2.83925V6.88818ZM11.7286 10.9358H1.06137C0.9042 10.9358 0.753464 10.9982 0.642325 11.1094C0.531187 11.2205 0.46875 11.3713 0.46875 11.5284C0.46875 11.6856 0.531187 11.8363 0.642325 11.9475C0.753464 12.0586 0.9042 12.1211 1.06137 12.1211H11.7286C11.8858 12.1211 12.0365 12.0586 12.1477 11.9475C12.2588 11.8363 12.3212 11.6856 12.3212 11.5284C12.3212 11.3713 12.2588 11.2205 12.1477 11.1094C12.0365 10.9982 11.8858 10.9358 11.7286 10.9358Z"
          fill="#757575"
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
const DeleteIcon = () => {
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
        fill="#757575"
      />
    </svg>
  );
};

const OptionsButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        }}
        classes="bg-red-200"
      >
        <MenuItem
          className="border min-w-[133px] text-right"
          sx={{ gap: 1 }}
          onClick={handleClose}
        >
          {" "}
          <EditIcon /> <span>تعديل</span>{" "}
        </MenuItem>
        <MenuItem
          className="border min-w-[133px] text-right"
          sx={{ gap: 1 }}
          onClick={handleClose}
        >
          {" "}
          <DeleteIcon /> <span>حذف</span>{" "}
        </MenuItem>
      </Menu>
    </div>
  );
};

const OrderBtn = ({ title, active, setActive, index, settingtype }) => {
  const { setSettingType } = useContext(SettingContext);
  return (
    <button
      onClick={() => {
        setActive(index);
        setSettingType(`settings/orders/${settingtype}`);
      }}
      className={`px-2 add-user-button px-2 text-right !w-full border hover:!border-[#EFAA20] rounded-md ${
        active === index
          ? "text-[#EFAA20] text-base  !border-[#EFAA20]"
          : "text-[#ffffff80] !text-xs !border-transparent"
      } `}
    >
      {title}
    </button>
  );
};

const CategoryBtn = ({ title, active, setActive, index }) => {
  return (
    <div
      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
        active === index ? "!border-[#EFAA20]" : "!border-transparent"
      }`}
    >
      <button onClick={() => setActive(index)} className="w-full">
        <p className="w-full text-white text-right my-3">{title}</p>
      </button>
      <OptionsButton />
    </div>
  );
};
const SubCategoryBtn = ({ title, active, setActive, index }) => {
  return (
    <div
      className={`flex w-full justify-between items-center px-2 text-[#ffffff80] border hover:!border-[#EFAA20] text-base ${
        active === index ? "  !border-transparent" : " !border-transparent"
      }`}
    >
      <button onClick={() => setActive(index)} className="w-full">
        <p className="w-full text-white text-right my-3">{title}</p>
      </button>
      <OptionsButton />
    </div>
  );
};

const OrdersData = [
  {
    id: 1,
    name: "استخدام المشروع",
    category: {
      name: "كل استخدمات المشروع",
      data: [
        {
          id: 1,
          name: "سكني",
          subCategories: [
            { id: 1, name: "مجمع سكنى" },
            { id: 2, name: "سكن ( افراد - عذاب )" },
            { id: 3, name: "عمارة سكنية" },
            { id: 4, name: "دبلكس" },
            { id: 5, name: "فيلا سكنية" },
            { id: 6, name: "فلتين متجاورتين" },
            { id: 7, name: "فلتين متلازمتبن" },
          ],
        },
        {
          id: 2,
          name: "سكني تجاري",
          subCategories: [
            { id: 1, name: "عمارة سكنية تجارية " },
            { id: 2, name: "مجمع سكنى تجاري" },
          ],
        },
        {
          id: 3,
          name: "تجاري",
          subCategories: [
            { id: 1, name: "صالات سينما و مسارح" },
            { id: 2, name: "المراكز التجارية الكبيرة" },
            { id: 3, name: "الابراج المبانى العالية" },
            { id: 4, name: "إستراحات" },
            { id: 5, name: "فنادق" },
            { id: 6, name: "مطاعم وجبات سريعه" },
            { id: 7, name: "محطات الوقود " },
            { id: 8, name: "مكاتب" },
            { id: 9, name: "مبنى تجاري" },
            { id: 10, name: "مبانى خدمات ترفهية" },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "خدمات المشروع",
    category: {
      name: "كل خدمات المشروع",
      data: [
        {
          id: 1,
          name: "رخص البناء",
          subCategories: [
            { id: 1, name: "مجمع سكنى" },
            { id: 2, name: "سكن ( افراد - عذاب )" },
            { id: 3, name: "عمارة سكنية" },
            { id: 4, name: "دبلكس" },
            { id: 5, name: "فيلا سكنية" },
            { id: 6, name: "فلتين متجاورتين" },
            { id: 7, name: "فلتين متلازمتبن" },
          ],
        },
        {
          id: 2,
          name: "قرارات مساحية",
          subCategories: [
            { id: 1, name: "قرار مساحى لكل الأغراض " },
            { id: 2, name: "قرار مساحى بغرض دمج" },
            { id: 3, name: "قرار مساحى بغرض تجزئة" },
            { id: 4, name: "قرار مساحى بغرض تحديث صك قديم" },
          ],
        },
        {
          id: 3,
          name: "نقل ملكية",
          subCategories: [
            { id: 1, name: "صالات سينما و مسارح" },
            { id: 2, name: "المراكز التجارية الكبيرة" },
            { id: 3, name: "الابراج المبانى العالية" },
            { id: 4, name: "إستراحات" },
            { id: 5, name: "فنادق" },
            { id: 6, name: "مطاعم وجبات سريعه" },
            { id: 7, name: "محطات الوقود " },
            { id: 8, name: "مكاتب" },
            { id: 9, name: "مبنى تجاري" },
            { id: 10, name: "مبانى خدمات ترفهية" },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "نوع المشروع",
    category: {
      name: "",
      data: [
        {
          id: 1,
          name: "سكني",
          subCategories: [
            { id: 1, name: "مجمع سكنى" },
            { id: 2, name: "سكن ( افراد - عذاب )" },
            { id: 3, name: "عمارة سكنية" },
            { id: 4, name: "دبلكس" },
            { id: 5, name: "فيلا سكنية" },
            { id: 6, name: "فلتين متجاورتين" },
            { id: 7, name: "فلتين متلازمتبن" },
          ],
        },
        {
          id: 2,
          name: "سكني تجاري",
          subCategories: [
            { id: 1, name: "عمارة سكنية تجارية " },
            { id: 2, name: "مجمع سكنى تجاري" },
          ],
        },
        {
          id: 3,
          name: "تجاري",
          subCategories: [
            { id: 1, name: "صالات سينما و مسارح" },
            { id: 2, name: "المراكز التجارية الكبيرة" },
            { id: 3, name: "الابراج المبانى العالية" },
            { id: 4, name: "إستراحات" },
            { id: 5, name: "فنادق" },
            { id: 6, name: "مطاعم وجبات سريعه" },
            { id: 7, name: "محطات الوقود " },
            { id: 8, name: "مكاتب" },
            { id: 9, name: "مبنى تجاري" },
            { id: 10, name: "مبانى خدمات ترفهية" },
          ],
        },
      ],
    },
  },
];
const settingtypes = ["uses", "service", "type"];
const Orders = () => {
  const [show, setShow] = useState(false);
  const { setSettingType } = useContext(SettingContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeOrder, setActiveOrder] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeMyHome, setActiveMyHome] = useState(1);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  useEffect(() => {
    setSettingType("uses");
  }, []);

  useEffect(() => {
    setCategory(OrdersData.find((order) => order.id == activeOrder));
  }, [activeOrder]);
  useEffect(() => {
    // console.log("subCategory: ",category?.category?.data?.find(order => order.id == activeCategory));
    setSubCategory(
      category?.category?.data?.find((order) => order.id == activeCategory)
    );
  }, [activeCategory, category]);
  // console.log("category: ",category?.category?.data);
  // console.log("subCategory: ",subCategory?.subCategories?.push({id:3,name:"new Val"}));
  // console.log("subCategory: ", subCategory);
  return (
    <section className="h-full">
      <div className="grid grid-cols-12 gap-2 h-full">
        <div className="bg-[#1E1E2D] col-span-3 rounded-[19px]">
          <div className="p-2 ">
            <p className="w-full text-white text-right my-2">الطلبات</p>
            <div className="flex flex-col gap-2">
              {OrdersData?.map(({ id, name }, index) => (
                <OrderBtn
                  title={name}
                  index={id}
                  active={activeOrder}
                  setActive={setActiveOrder}
                  key={id}
                  settingtype={settingtypes[index]}
                />
              ))}
            </div>
          </div>
        </div>

        {category && (
          <div className="bg-[#1E1E2D] col-span-3 rounded-[19px]">
            <div className=" flex flex-col gap-2">
              <div className="p-3">
                <SearchButton />
              </div>
              <p className="w-full px-2 text-white text-right mt-2">
                {category?.name}
              </p>

              {category?.category?.data?.map(({ id, name }) => (
                <CategoryBtn
                  title={name}
                  index={id}
                  active={activeCategory}
                  setActive={setActiveCategory}
                  key={id}
                />
              ))}
            </div>
          </div>
        )}

        {subCategory && (
          <div className="bg-[#1E1E2D] flex flex-col rounded-[19px] col-span-6 ">
            <div className="py-4 px-14">
              <button
                onClick={handleShow}
                className="flex flex-col justify-center items-center gap-1 w-full bg-[#2B2B40] p-2 border !border-[#EFAA20] !border-dashed rounded-xl"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1 8H8M8 8H15M8 8V15M8 8V1"
                      stroke="#EFAA20"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className=" text-white">أضافة جديدة</p>
              </button>
              <AddModal
                title={"اضافة جديدة"}
                show={show}
                handleClose={handleClose}
                arr={setSubCategory}
              />
            </div>
            <div className="p-2 flex-1">
              <div
                className={`relative h-full py-4  px-2 border !border-[#d5992133] ${Style["scrolled"]}`}
              >
                <p className="absolute p-2 left-1/2 top-0 -translate-x-1/2 -mt-1 -translate-y-1/2 bg-[#1E1E2D] text-white text-[13px] font-semibold">
                  {subCategory?.name}
                </p>
                <div className="h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#C8D0D0] scrollbar-track-transparent">
                  {subCategory?.subCategories?.map(({ id, name }) => (
                    <SubCategoryBtn
                      title={name}
                      index={id}
                      active={activeMyHome}
                      setActive={setActiveMyHome}
                      key={id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;
