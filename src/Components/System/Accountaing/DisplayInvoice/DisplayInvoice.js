import React from "react";
import { Button, Form, Modal, NavDropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DataTableComponent from "../../../DataTableComponent.jsx";
import { Document, Page } from "react-pdf";
import Input from "../../../FormHandler/Input";
import "./Invoice.css";
import EditRevenues from "../EditRevenues/EditRevenues";
import Image from "../../../Image.jsx";
import DownloadButton from "../../../Buttons/DownloadButton.jsx";

const DisplayInvoice = ({ setViewInvoices, viewInvoice }) => {
  // show img
  const [showImg, setShowImg] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `${process.env.PUBLIC_URL}/icons/show.png`
  );
  const [numPages, setNumPages] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [ConfirmDelete, setConfirmDelete] = useState(false);
  // Edit
  const [editInvoice, setEditInvoice] = useState(false);
  const [editRevenues, setEditRevenues] = useState(false);

  // Data table data
  const columns = [
    {
      name: "الدفعات  ",
      selector: (row) => row.Payments,
    },
    {
      name: " نوع الدفعة",
      selector: (row) => row.PaymentType,
    },
    {
      name: "  تاريخ الاستحقاق ",
      selector: (row) => row.recivedDate,
    },
    {
      name: "   الحالة",
      selector: (row) => row.status,
    },
    {
      name: "   المطالبة",
      selector: (row) => row.claim,
    },
    {
      name: "   الفاتوره",
      selector: (row) => row.bill,
    },
  ];
  const ShowProjectsData = Array.from({ length: 2 }).map((_, index) => {
    return {
      Payments: "1500 ريال",
      PaymentType: " القيمة الافتتاحية",
      recivedDate: " مع العقد",
      status: (
        <div className="d-flex flex-column justfiy-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g clipPath="url(#clip0_1768_33622)">
              <path
                d="M8.3161 15.5091C6.34949 15.5069 4.46407 14.7247 3.07347 13.3341C1.68287 11.9435 0.90066 10.0581 0.898438 8.09149C0.898438 7.91264 0.969483 7.74112 1.09594 7.61466C1.22241 7.4882 1.39393 7.41715 1.57277 7.41715C1.75161 7.41715 1.92313 7.4882 2.0496 7.61466C2.17606 7.74112 2.2471 7.91264 2.2471 8.09149C2.2471 9.29182 2.60304 10.4652 3.26991 11.4632C3.93678 12.4613 4.88463 13.2392 5.99359 13.6985C7.10256 14.1579 8.32283 14.278 9.5001 14.0439C10.6774 13.8097 11.7588 13.2317 12.6075 12.3829C13.4563 11.5342 14.0343 10.4528 14.2685 9.27549C14.5027 8.09822 14.3825 6.87795 13.9231 5.76898C13.4638 4.66002 12.6859 3.71217 11.6878 3.0453C10.6898 2.37843 9.51643 2.02249 8.3161 2.02249C8.13725 2.02249 7.96573 1.95145 7.83927 1.82499C7.71281 1.69852 7.64176 1.527 7.64176 1.34816C7.64176 1.16932 7.71281 0.997797 7.83927 0.871336C7.96573 0.744874 8.13725 0.673828 8.3161 0.673828C10.2834 0.673828 12.1701 1.45533 13.5612 2.84641C14.9523 4.23749 15.7338 6.1242 15.7338 8.09149C15.7338 10.0588 14.9523 11.9455 13.5612 13.3366C12.1701 14.7276 10.2834 15.5091 8.3161 15.5091Z"
                fill="#8C8C8C"
              />
              <path
                d="M8.31613 15.5091C7.5734 15.5097 6.83479 15.3989 6.12488 15.1805C5.9539 15.1279 5.81081 15.0096 5.72711 14.8514C5.64341 14.6933 5.62595 14.5085 5.67856 14.3375C5.73118 14.1665 5.84956 14.0234 6.00767 13.9397C6.16578 13.856 6.35066 13.8385 6.52164 13.8911C7.10291 14.0704 7.70784 14.1612 8.31613 14.1605C8.49498 14.1605 8.66649 14.2315 8.79296 14.358C8.91942 14.4845 8.99046 14.656 8.99046 14.8348C8.99046 15.0137 8.91942 15.1852 8.79296 15.3116C8.66649 15.4381 8.49498 15.5091 8.31613 15.5091ZM3.97314 13.9247C3.81397 13.9247 3.65998 13.8682 3.53851 13.7654C2.77917 13.1276 2.156 12.3436 1.70615 11.4599C1.6659 11.381 1.64158 11.295 1.63457 11.2068C1.62757 11.1185 1.63801 11.0298 1.66531 10.9456C1.69262 10.8614 1.73624 10.7833 1.79369 10.716C1.85115 10.6487 1.92131 10.5933 2.00016 10.5531C2.07904 10.5128 2.16509 10.4884 2.25338 10.4814C2.34168 10.4744 2.43049 10.4849 2.51474 10.5122C2.59898 10.5396 2.67702 10.5832 2.74437 10.6408C2.81173 10.6983 2.86709 10.7685 2.90728 10.8474C3.276 11.5708 3.78637 12.2126 4.40807 12.7348C4.5139 12.8239 4.58976 12.9433 4.62536 13.077C4.66097 13.2107 4.65459 13.3521 4.6071 13.482C4.55962 13.6119 4.47331 13.7241 4.3599 13.8033C4.24649 13.8825 4.11147 13.9249 3.97314 13.9247ZM1.66991 9.91627C1.51094 9.91639 1.35706 9.86026 1.23551 9.75781C1.11396 9.65537 1.03258 9.51321 1.00578 9.35652C0.838534 8.37924 0.866956 7.37847 1.0894 6.41225C1.12426 6.26441 1.2077 6.13254 1.32638 6.03775C1.44505 5.94295 1.5921 5.89071 1.74398 5.88937C1.79646 5.88925 1.84876 5.89544 1.89975 5.90781C2.07374 5.94831 2.22452 6.05625 2.31893 6.2079C2.41334 6.35955 2.44366 6.54249 2.4032 6.71649C2.22117 7.50791 2.19811 8.32761 2.33537 9.12801C2.36528 9.3042 2.32413 9.48505 2.22093 9.63095C2.11774 9.77685 1.96092 9.8759 1.78484 9.9064C1.74686 9.91281 1.70842 9.91611 1.66991 9.91627ZM2.85987 4.80213C2.73546 4.80206 2.61349 4.76758 2.50746 4.70251C2.40142 4.63744 2.31545 4.5443 2.25905 4.43341C2.20266 4.32252 2.17803 4.19819 2.18789 4.07418C2.19775 3.95016 2.24172 3.83128 2.31494 3.7307C2.75222 3.13065 3.27647 2.59909 3.87041 2.15354C3.98688 2.0657 4.12886 2.01829 4.27475 2.01854C4.41632 2.01842 4.55434 2.06286 4.66924 2.14557C4.78414 2.22828 4.87008 2.34507 4.9149 2.47936C4.95971 2.61365 4.96111 2.75864 4.9189 2.89378C4.87669 3.02891 4.79302 3.14733 4.67974 3.23225C4.19301 3.59732 3.76352 4.03302 3.40548 4.52494C3.34265 4.6107 3.26053 4.68047 3.16575 4.72862C3.07098 4.77677 2.96618 4.80194 2.85987 4.80213ZM6.6948 2.21876C6.53011 2.21868 6.37114 2.15833 6.24788 2.0491C6.12463 1.93988 6.0456 1.78932 6.02572 1.62583C6.00584 1.46234 6.04648 1.29723 6.13996 1.16165C6.23345 1.02606 6.37332 0.929372 6.5332 0.889825C7.11659 0.746035 7.71527 0.673507 8.31613 0.673829C8.49498 0.673829 8.66649 0.744875 8.79296 0.871337C8.91942 0.997799 8.99046 1.16932 8.99046 1.34816C8.99046 1.52701 8.91942 1.69853 8.79296 1.82499C8.66649 1.95145 8.49498 2.02249 8.31613 2.02249C7.82446 2.02213 7.33456 2.08139 6.85716 2.19898C6.80404 2.21207 6.74951 2.21873 6.6948 2.21876Z"
                fill="#8C8C8C"
              />
              <path
                d="M7.422 10.5642C7.24324 10.5638 7.07189 10.4928 6.94524 10.3666L5.14714 8.56819C5.08359 8.50578 5.03304 8.43141 4.9984 8.34937C4.96377 8.26732 4.94572 8.17923 4.94532 8.09017C4.94492 8.00111 4.96216 7.91285 4.99605 7.8305C5.02995 7.74814 5.07982 7.67332 5.1428 7.61034C5.20577 7.54737 5.2806 7.49749 5.36295 7.4636C5.44531 7.4297 5.53357 7.41246 5.62262 7.41286C5.71168 7.41327 5.79978 7.43131 5.88182 7.46595C5.96387 7.50059 6.03824 7.55114 6.10064 7.61468L7.42198 8.93637L10.5418 5.81623C10.6686 5.69168 10.8395 5.62225 11.0173 5.62305C11.1951 5.62386 11.3653 5.69483 11.491 5.82053C11.6167 5.94623 11.6877 6.11649 11.6885 6.29425C11.6893 6.47202 11.6199 6.64291 11.4953 6.76974L7.89876 10.3666C7.77211 10.4928 7.60075 10.5638 7.422 10.5642Z"
                fill="#136D01"
              />
            </g>
            <defs>
              <clipPath id="clip0_1768_33622">
                <rect
                  width="16.184"
                  height="16.184"
                  fill="white"
                  transform="translate(0.21875)"
                />
              </clipPath>
            </defs>
          </svg>
          <p>تم الدفع</p>
        </div>
      ),
      claim: (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
          >
            <path
              d="M14.6388 0H2.3611C1.7349 0 1.13434 0.251329 0.691551 0.698697C0.248758 1.14607 0 1.75283 0 2.3855V10.9733C0 11.0998 0.0497518 11.2212 0.13831 11.3107C0.226869 11.4001 0.34698 11.4504 0.472221 11.4504H3.77776V20.5153C3.77778 20.5995 3.79985 20.6822 3.84175 20.755C3.88364 20.8278 3.94386 20.8881 4.01628 20.9298C4.08871 20.9715 4.17076 20.993 4.25411 20.9923C4.33745 20.9916 4.41912 20.9686 4.49082 20.9256L6.58276 19.6565L8.21664 20.897C8.29838 20.9589 8.3978 20.9924 8.49997 20.9924C8.60215 20.9924 8.70156 20.9589 8.7833 20.897L10.3889 19.6756L12.0369 20.8731C12.1178 20.9328 12.2153 20.965 12.3155 20.965C12.4157 20.965 12.5132 20.9328 12.5941 20.8731L14.1902 19.6613L16.2822 20.9304C16.3543 20.9748 16.4369 20.9988 16.5214 21C16.6058 21.0011 16.689 20.9794 16.7624 20.937C16.8357 20.8946 16.8964 20.8331 16.9382 20.7589C16.98 20.6848 17.0013 20.6006 16.9999 20.5153V2.3855C16.9999 1.75283 16.7512 1.14607 16.3084 0.698697C15.8656 0.251329 15.265 0 14.6388 0ZM0.944441 10.4962V2.3855C0.944441 2.0059 1.0937 1.64184 1.35937 1.37342C1.62505 1.105 1.98538 0.9542 2.3611 0.9542C2.73682 0.9542 3.09716 1.105 3.36283 1.37342C3.62851 1.64184 3.77776 2.0059 3.77776 2.3855V10.4962H0.944441ZM16.0555 19.6708L14.4074 18.6737C14.3271 18.6255 14.2344 18.6026 14.1411 18.6077C14.0478 18.6127 13.958 18.6457 13.8833 18.7023L12.3108 19.8951L10.6627 18.6976C10.5819 18.6378 10.4843 18.6057 10.3841 18.6057C10.284 18.6057 10.1864 18.6378 10.1055 18.6976L8.49997 19.9189L6.89442 18.7023C6.81966 18.6457 6.72994 18.6127 6.63664 18.6077C6.54333 18.6026 6.45063 18.6255 6.37026 18.6737L4.72221 19.6708V2.3855C4.72498 1.8689 4.559 1.3658 4.24999 0.9542H14.6388C15.0146 0.9542 15.3749 1.105 15.6406 1.37342C15.9062 1.64184 16.0555 2.0059 16.0555 2.3855V19.6708ZM10.3889 2.8626C9.54828 2.8626 8.72659 3.11443 8.02769 3.58625C7.32878 4.05807 6.78405 4.72869 6.46238 5.5133C6.14071 6.29791 6.05654 7.16127 6.22053 7.9942C6.38452 8.82714 6.78929 9.59224 7.38366 10.1927C7.97803 10.7933 8.7353 11.2022 9.55972 11.3679C10.3841 11.5336 11.2387 11.4485 12.0153 11.1236C12.7918 10.7986 13.4556 10.2482 13.9226 9.54207C14.3896 8.83594 14.6388 8.00576 14.6388 7.1565C14.6388 6.01769 14.1911 4.92552 13.394 4.12026C12.597 3.31499 11.516 2.8626 10.3889 2.8626ZM10.3889 10.4962C9.73508 10.4962 9.09598 10.3003 8.55239 9.93336C8.0088 9.56639 7.58512 9.0448 7.33493 8.43455C7.08474 7.8243 7.01928 7.1528 7.14682 6.50496C7.27437 5.85712 7.58919 5.26204 8.05148 4.79498C8.51377 4.32791 9.10276 4.00984 9.74397 3.88097C10.3852 3.75211 11.0498 3.81825 11.6538 4.07102C12.2578 4.3238 12.7741 4.75185 13.1373 5.30106C13.5005 5.85028 13.6944 6.49597 13.6944 7.1565C13.6944 8.04225 13.3461 8.89171 12.7262 9.51803C12.1063 10.1443 11.2655 10.4962 10.3889 10.4962ZM10.8611 5.2481H11.8055V6.2023H9.91663V6.6794H11.3333C11.4585 6.6794 11.5786 6.72967 11.6672 6.81914C11.7558 6.90862 11.8055 7.02997 11.8055 7.1565V8.5878C11.8055 8.71434 11.7558 8.83569 11.6672 8.92516C11.5786 9.01464 11.4585 9.0649 11.3333 9.0649H10.8611V9.542H9.91663V9.0649H8.97219V8.1107H10.8611V7.6336H9.44441C9.31917 7.6336 9.19906 7.58334 9.1105 7.49386C9.02194 7.40439 8.97219 7.28304 8.97219 7.1565V5.7252C8.97219 5.59867 9.02194 5.47732 9.1105 5.38784C9.19906 5.29837 9.31917 5.2481 9.44441 5.2481H9.91663V4.771H10.8611V5.2481ZM6.13887 13.3588H14.6388V14.313H6.13887V13.3588ZM6.13887 16.2214H14.6388V17.1756H6.13887V16.2214Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      ),
      bill: (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
          >
            <path
              d="M14.6388 0H2.3611C1.7349 0 1.13434 0.251329 0.691551 0.698697C0.248758 1.14607 0 1.75283 0 2.3855V10.9733C0 11.0998 0.0497518 11.2212 0.13831 11.3107C0.226869 11.4001 0.34698 11.4504 0.472221 11.4504H3.77776V20.5153C3.77778 20.5995 3.79985 20.6822 3.84175 20.755C3.88364 20.8278 3.94386 20.8881 4.01628 20.9298C4.08871 20.9715 4.17076 20.993 4.25411 20.9923C4.33745 20.9916 4.41912 20.9686 4.49082 20.9256L6.58276 19.6565L8.21664 20.897C8.29838 20.9589 8.3978 20.9924 8.49997 20.9924C8.60215 20.9924 8.70156 20.9589 8.7833 20.897L10.3889 19.6756L12.0369 20.8731C12.1178 20.9328 12.2153 20.965 12.3155 20.965C12.4157 20.965 12.5132 20.9328 12.5941 20.8731L14.1902 19.6613L16.2822 20.9304C16.3543 20.9748 16.4369 20.9988 16.5214 21C16.6058 21.0011 16.689 20.9794 16.7624 20.937C16.8357 20.8946 16.8964 20.8331 16.9382 20.7589C16.98 20.6848 17.0013 20.6006 16.9999 20.5153V2.3855C16.9999 1.75283 16.7512 1.14607 16.3084 0.698697C15.8656 0.251329 15.265 0 14.6388 0ZM0.944441 10.4962V2.3855C0.944441 2.0059 1.0937 1.64184 1.35937 1.37342C1.62505 1.105 1.98538 0.9542 2.3611 0.9542C2.73682 0.9542 3.09716 1.105 3.36283 1.37342C3.62851 1.64184 3.77776 2.0059 3.77776 2.3855V10.4962H0.944441ZM16.0555 19.6708L14.4074 18.6737C14.3271 18.6255 14.2344 18.6026 14.1411 18.6077C14.0478 18.6127 13.958 18.6457 13.8833 18.7023L12.3108 19.8951L10.6627 18.6976C10.5819 18.6378 10.4843 18.6057 10.3841 18.6057C10.284 18.6057 10.1864 18.6378 10.1055 18.6976L8.49997 19.9189L6.89442 18.7023C6.81966 18.6457 6.72994 18.6127 6.63664 18.6077C6.54333 18.6026 6.45063 18.6255 6.37026 18.6737L4.72221 19.6708V2.3855C4.72498 1.8689 4.559 1.3658 4.24999 0.9542H14.6388C15.0146 0.9542 15.3749 1.105 15.6406 1.37342C15.9062 1.64184 16.0555 2.0059 16.0555 2.3855V19.6708ZM10.3889 2.8626C9.54828 2.8626 8.72659 3.11443 8.02769 3.58625C7.32878 4.05807 6.78405 4.72869 6.46238 5.5133C6.14071 6.29791 6.05654 7.16127 6.22053 7.9942C6.38452 8.82714 6.78929 9.59224 7.38366 10.1927C7.97803 10.7933 8.7353 11.2022 9.55972 11.3679C10.3841 11.5336 11.2387 11.4485 12.0153 11.1236C12.7918 10.7986 13.4556 10.2482 13.9226 9.54207C14.3896 8.83594 14.6388 8.00576 14.6388 7.1565C14.6388 6.01769 14.1911 4.92552 13.394 4.12026C12.597 3.31499 11.516 2.8626 10.3889 2.8626ZM10.3889 10.4962C9.73508 10.4962 9.09598 10.3003 8.55239 9.93336C8.0088 9.56639 7.58512 9.0448 7.33493 8.43455C7.08474 7.8243 7.01928 7.1528 7.14682 6.50496C7.27437 5.85712 7.58919 5.26204 8.05148 4.79498C8.51377 4.32791 9.10276 4.00984 9.74397 3.88097C10.3852 3.75211 11.0498 3.81825 11.6538 4.07102C12.2578 4.3238 12.7741 4.75185 13.1373 5.30106C13.5005 5.85028 13.6944 6.49597 13.6944 7.1565C13.6944 8.04225 13.3461 8.89171 12.7262 9.51803C12.1063 10.1443 11.2655 10.4962 10.3889 10.4962ZM10.8611 5.2481H11.8055V6.2023H9.91663V6.6794H11.3333C11.4585 6.6794 11.5786 6.72967 11.6672 6.81914C11.7558 6.90862 11.8055 7.02997 11.8055 7.1565V8.5878C11.8055 8.71434 11.7558 8.83569 11.6672 8.92516C11.5786 9.01464 11.4585 9.0649 11.3333 9.0649H10.8611V9.542H9.91663V9.0649H8.97219V8.1107H10.8611V7.6336H9.44441C9.31917 7.6336 9.19906 7.58334 9.1105 7.49386C9.02194 7.40439 8.97219 7.28304 8.97219 7.1565V5.7252C8.97219 5.59867 9.02194 5.47732 9.1105 5.38784C9.19906 5.29837 9.31917 5.2481 9.44441 5.2481H9.91663V4.771H10.8611V5.2481ZM6.13887 13.3588H14.6388V14.313H6.13887V13.3588ZM6.13887 16.2214H14.6388V17.1756H6.13887V16.2214Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      ),
    };
  });
  // functions to handle actions on the view

  const handleDelete = () => {
    // after ensuring  the Delete is done
    setOpenDelete(false);
    setConfirmDelete(true);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="DisplayFinancialClaims   ">
      {editInvoice && (
        <EditRevenues
          editRevenues={editRevenues}
          setEditRevenues={setEditRevenues}
        />
      )}

      <div className="border-golden">
        <div className="row px-4 py-3">
          <div className="col-md-8 mb-2">
            <p className="text-white">
              اسم المشروع : <span>BSA</span>{" "}
            </p>
          </div>
          <div className="col-md-4   mb-2">
            <div className=" d-flex gap-3 justify-content-start ">
              <DownloadButton>تصدير CSV </DownloadButton>
              <DownloadButton> تصدير Excel </DownloadButton>
            </div>
          </div>
          <div className="col-md-9 mb-3">
            <p className="text-white">
              نوع المشروع : <span>التصميم</span>{" "}
            </p>
          </div>
          <div className="col-md-3   mb-3">
            <p className="text-white">
              <p className="text-white"> الحالة : قيد التنفيذ</p>
            </p>
          </div>
          <div className="col-md-9 mb-2">
            <p className="text-white">
              {" "}
              رقم الطلب : <span> 0123</span>{" "}
            </p>
          </div>
          <div className="col-md-3 mb-2">
            <div className="d-flex align-items-center  gap-3">
              <Image
                className="pointer editIcon"
                onClick={() => {
                  setOpenDelete(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/delete.png"}
              />

              <Image
                className="pointer editIcon"
                onClick={() => {}}
                src={process.env.PUBLIC_URL + "/icons/edit.png"}
              />

              <NavDropdown
                title={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                  >
                    <path
                      d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z"
                      fill="white"
                    />
                  </svg>
                }
                className="fs-5 "
              >
                <NavDropdown.Item
                  className="text-end  d-flex justify-content-between  align-items-center"
                  href="#action/3.2"
                >
                  <span> المشروع</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-end  d-flex justify-content-between align-items-center"
                  href="#action/3.3"
                >
                  <span> العميل</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="text-end  d-flex justify-content-between align-items-center"
                  href="#action/3.3"
                >
                  <span> الحسابات</span>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>
      </div>
      <fieldset className="showProjectBorder w-90 mx-auto pb-3 ">
        <legend className="text-center"> بيانات العميل</legend>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            اسم المشروع :<span className="main-text"> BSA</span>
          </p>
          <p className="projectdetails text-white w-50">
            {" "}
            اسم العميل:
            <span className="main-text"> اسلام ايهاب</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            نوع المشروع :<span className="main-text"> التصميم</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            {" "}
            رقم الطلب :<span className="main-text"> : 0003</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            البريد الاكترونى :<span className="main-text"></span>
          </p>

          <p className="projectdetails text-white w-50 ">
            {" "}
            رقم الجوال:
            <span className="main-text"></span>
          </p>
        </div>
      </fieldset>
      <fieldset className="showProjectBorder w-90 mx-auto pb-3 ">
        <legend className="text-center"> تعريفات </legend>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-100">
            {" "}
            التعريف الضريبى:
            <span className="main-text">
              {" "}
              مكتب بدر عبد المحسن بن سليمان لاستشارات الهندسية
            </span>
          </p>
          <p className="projectdetails text-white w-50">
            {" "}
            اسم العميل:
            <span className="main-text"> اسلام ايهاب</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            الرقم الضريبي :<span className="main-text"> 300195565100003</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            {" "}
            الكود :<span className="main-text"> : 0003</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            العنوان :<span className="main-text">الرياض حي النخيل</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            <span className="main-text"></span>
          </p>
        </div>
      </fieldset>
      <fieldset className="showProjectBorder w-90 mx-auto pb-3 ">
        <legend className="text-center"> تعريفات العميل </legend>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-100">
            {" "}
            تاريخ الفاتورة :<span className="main-text">2023-10-20</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            الرقم الضريبي :<span className="main-text"> 300195565100003</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            {" "}
            السادة :<span className="main-text"> : .....</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            البريد الالكتروني :
            <span className="main-text"> Habeebnasr4@gmail.com</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            <span className="main-text"></span>
          </p>
        </div>
      </fieldset>
      <fieldset className="showProjectBorder w-90 mx-auto pb-3 ">
        <legend className="text-center"> معلومات الدفع </legend>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-100">
            {" "}
            المبلغ الاجمالي :<span className="main-text">1000 ريال</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            عدد الدفعات:
            <span className="main-text"> 2</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            {" "}
            المبلغ المتبقي :<span className="main-text"> : 500 ريال</span>
          </p>
        </div>
        <div className="d-flex w-90 m-auto justify-content-between">
          <p className="projectdetails text-white w-50">
            {" "}
            عدد الدفعات المتبقي :<span className="main-text"> 1</span>
          </p>

          <p className="projectdetails text-white w-50 ">
            <span className="main-text"></span>
          </p>
        </div>
      </fieldset>

      <fieldset className="showProjectBorder w-90 mx-auto pb-3 ">
        <legend className="text-center"> المرفقات </legend>
        <div className="d-flex w-90 m-auto justify-content-between">
          <div className="row">
            <div className="col-md-12">
              <div className="w-100 form-container">
                <Input
                  disabled={true}
                  placeholder="اكتب الوصف"
                  className="w-100"
                  label={"1-الوصف"}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-100 form-container mb-3">
                <Input
                  disabled={true}
                  placeholder=" الكميه"
                  className="w-100"
                  label={"الكمية"}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-100 form-container mb-3">
                <Input
                  disabled={true}
                  placeholder=" القيمة"
                  className="w-100"
                  label={"القيمة"}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-100 form-container mb-3">
                <Input
                  disabled={true}
                  placeholder=" ض .ق.م"
                  className="w-100"
                  label={" ال ض.ق.م"}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-100 form-container mb-3">
                <Input
                  disabled={true}
                  placeholder=" الخصم"
                  className="w-100"
                  label={" قيمة الخصم"}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-100 form-container mb-3">
                <Input
                  disabled={true}
                  placeholder=" اجمالي المبلغ"
                  className="w-100"
                  label={" اجمالي المبلغ "}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="w-100 form-container mb-3">
                <Input
                  disabled={true}
                  placeholder=" اجمالي المبلغ كتابة"
                  className="w-100"
                  label={" اجمالي المبلغ كتابة"}
                />
              </div>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="showProjectBorder w-90 mx-auto p-2 ">
        <legend className="text-center"> الملف المرفق </legend>

        <div className="w-90 p-3 m-auto d-flex  gap-5">
          <div className="pdfbg">
            <Image
              src={process.env.PUBLIC_URL + "/icons/Pdf.png"}
              alt="pdf"
              className="pdfImage"
            />
            <div
              style={{ borderRadius: "7px" }}
              className="bg-[#252538] d-flex justify-content-center "
            >
              <p className="text-white mx-auto   mt-2   "> المطالبة</p>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="d-flex my-5 w-90  justify-content-end">
        <Button
          onClick={() => {
            setViewInvoices(false);
          }}
          className="sumbmitAddUpdateUser"
        >
          حفظ
        </Button>
      </div>
    </div>
  );
};

export default DisplayInvoice;
