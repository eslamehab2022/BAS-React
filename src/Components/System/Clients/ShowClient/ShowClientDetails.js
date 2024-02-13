import React, { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import "./index.css";
import DataTableComponent from "../../../DataTableComponent.jsx";
import CustomTable from "../../../Table/index.jsx";
import { TableRow } from "../../../Table/TableRow.jsx";
import { TableCell } from "../../../Table/TableCell.jsx";
const ShowClientDetails = ({ showProject, setShowProject }) => {
  const [openCliam, setOpenClaim] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);

  const [showImg, setShowImg] = useState(false);
  const [ModalImgSrc, setModalImgSrc] = useState(false);
  const [identityImage, setIdentityImage] = useState(
    `${process.env.PUBLIC_URL}/icons/show.png`
  );
  const [instrumentImage, setInstrumentImage] = useState(
    `${process.env.PUBLIC_URL}/icons/show.png`
  );
  const [agencyImage, setAgencyImage] = useState(
    `${process.env.PUBLIC_URL}/icons/show.png`
  );
  const [clientStatusType, setClientStatusType] = useState("معلومات المشروع");

  console.log(clientStatusType);
  const ClientDetailsTable = Array.from({ length: 2 }).map((_, index) => {
    return {
      amount: "BSA",
      Payments: "53543",
      PaymentType: "تصميم",
      DeliverDate: "12-10-2023",
      status: (
        <div className="mt-2 flex flex-column justify-content-center align-iems-center gap-1 my-1">
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <g clip-path="url(#clip0_667_12027)">
              <path
                d="M9.5013 18.2082C7.19251 18.2056 4.97903 17.2872 3.34646 15.6547C1.7139 14.0221 0.795577 11.8086 0.792969 9.49984C0.792969 9.28987 0.876376 9.08851 1.02484 8.94004C1.17331 8.79158 1.37467 8.70817 1.58464 8.70817C1.7946 8.70817 1.99596 8.79158 2.14443 8.94004C2.29289 9.08851 2.3763 9.28987 2.3763 9.49984C2.3763 10.909 2.79418 12.2866 3.57708 13.4583C4.35999 14.63 5.47276 15.5432 6.77468 16.0825C8.07661 16.6218 9.50921 16.7629 10.8913 16.4879C12.2734 16.213 13.543 15.5344 14.5394 14.538C15.5359 13.5415 16.2145 12.272 16.4894 10.8899C16.7643 9.50774 16.6232 8.07514 16.0839 6.77322C15.5447 5.47129 14.6314 4.35852 13.4597 3.57562C12.288 2.79271 10.9105 2.37484 9.5013 2.37484C9.29134 2.37484 9.08998 2.29143 8.94151 2.14296C8.79304 1.9945 8.70963 1.79313 8.70963 1.58317C8.70963 1.37321 8.79304 1.17184 8.94151 1.02338C9.08998 0.874911 9.29134 0.791504 9.5013 0.791504C11.8109 0.791504 14.0259 1.70899 15.659 3.34212C17.2922 4.97524 18.2096 7.19024 18.2096 9.49984C18.2096 11.8094 17.2922 14.0244 15.659 15.6576C14.0259 17.2907 11.8109 18.2082 9.5013 18.2082Z"
                fill="#8C8C8C"
              />
              <path
                d="M9.50134 18.2082C8.62938 18.2088 7.76224 18.0787 6.92881 17.8224C6.72808 17.7606 6.5601 17.6216 6.46183 17.436C6.36357 17.2504 6.34307 17.0334 6.40484 16.8326C6.4666 16.6319 6.60559 16.4639 6.7912 16.3656C6.97682 16.2674 7.19388 16.2469 7.39461 16.3086C8.07702 16.5191 8.78721 16.6257 9.50134 16.6248C9.7113 16.6248 9.91267 16.7082 10.0611 16.8567C10.2096 17.0052 10.293 17.2065 10.293 17.4165C10.293 17.6265 10.2096 17.8278 10.0611 17.9763C9.91267 18.1248 9.7113 18.2082 9.50134 18.2082ZM4.40267 16.3481C4.21581 16.348 4.03502 16.2817 3.89241 16.161C3.00094 15.4123 2.26934 14.4918 1.74123 13.4543C1.69397 13.3617 1.66542 13.2608 1.65719 13.1572C1.64897 13.0536 1.66123 12.9494 1.69328 12.8505C1.72533 12.7517 1.77655 12.6601 1.844 12.581C1.91145 12.502 1.99382 12.437 2.08639 12.3897C2.179 12.3424 2.28002 12.3139 2.38367 12.3056C2.48733 12.2974 2.5916 12.3097 2.6905 12.3418C2.78941 12.3739 2.88102 12.4251 2.9601 12.4927C3.03917 12.5602 3.10416 12.6426 3.15135 12.7353C3.58423 13.5845 4.18341 14.338 4.91328 14.951C5.03752 15.0556 5.12658 15.1959 5.16838 15.3528C5.21018 15.5098 5.2027 15.6758 5.14694 15.8283C5.09119 15.9808 4.98987 16.1125 4.85672 16.2055C4.72358 16.2985 4.56507 16.3482 4.40267 16.3481ZM1.69867 11.6421C1.51205 11.6423 1.33139 11.5764 1.18869 11.4561C1.04599 11.3358 0.950455 11.1689 0.918993 10.985C0.722642 9.83765 0.756009 8.66275 1.01716 7.52841C1.05808 7.35485 1.15605 7.20004 1.29537 7.08875C1.4347 6.97746 1.60733 6.91612 1.78564 6.91456C1.84724 6.91441 1.90864 6.92167 1.96851 6.9362C2.17277 6.98374 2.34979 7.11046 2.46063 7.2885C2.57147 7.46654 2.60706 7.68131 2.55956 7.88558C2.34586 8.81472 2.31879 9.77704 2.47993 10.7167C2.51504 10.9236 2.46673 11.1359 2.34558 11.3072C2.22443 11.4785 2.04033 11.5947 1.83361 11.6305C1.78902 11.6381 1.74389 11.6419 1.69867 11.6421ZM3.09569 5.63813C2.94963 5.63805 2.80644 5.59757 2.68196 5.52117C2.55748 5.44478 2.45655 5.33544 2.39033 5.20526C2.32412 5.07507 2.2952 4.92911 2.30678 4.78351C2.31836 4.63791 2.36999 4.49836 2.45594 4.38027C2.96931 3.67581 3.58478 3.05176 4.28206 2.52869C4.4188 2.42556 4.58548 2.3699 4.75676 2.3702C4.92296 2.37005 5.085 2.42223 5.21989 2.51933C5.35478 2.61644 5.45568 2.75354 5.50829 2.9112C5.5609 3.06886 5.56254 3.23908 5.51299 3.39773C5.46344 3.55637 5.3652 3.6954 5.23221 3.79509C4.6608 4.22368 4.15658 4.7352 3.73624 5.31271C3.66248 5.41339 3.56607 5.4953 3.4548 5.55183C3.34353 5.60836 3.22049 5.63791 3.09569 5.63813ZM7.5979 2.60525C7.40455 2.60516 7.21792 2.53431 7.07322 2.40608C6.92851 2.27784 6.83574 2.10109 6.8124 1.90915C6.78906 1.71722 6.83677 1.52338 6.94652 1.3642C7.05627 1.20502 7.22048 1.09151 7.40817 1.04508C8.09308 0.876275 8.79593 0.791127 9.50134 0.791505C9.7113 0.791505 9.91267 0.874913 10.0611 1.02338C10.2096 1.17185 10.293 1.37321 10.293 1.58317C10.293 1.79313 10.2096 1.9945 10.0611 2.14296C9.91267 2.29143 9.7113 2.37484 9.50134 2.37484C8.92412 2.3744 8.34898 2.44398 7.78851 2.58203C7.72615 2.5974 7.66212 2.60522 7.5979 2.60525Z"
                fill="#8C8C8C"
              />
              <path
                d="M8.44474 12.403C8.23488 12.4025 8.03371 12.3191 7.88503 12.171L5.77405 10.0596C5.69945 9.98639 5.64011 9.89907 5.59944 9.80275C5.55877 9.70643 5.53759 9.603 5.53712 9.49845C5.53664 9.3939 5.55689 9.29028 5.59668 9.1936C5.63647 9.09691 5.69503 9.00907 5.76896 8.93513C5.84289 8.8612 5.93073 8.80265 6.02742 8.76286C6.12411 8.72307 6.22772 8.70282 6.33227 8.70329C6.43683 8.70377 6.54025 8.72495 6.63657 8.76562C6.7329 8.80628 6.82021 8.86563 6.89347 8.94023L8.44471 10.4919L12.1074 6.82885C12.2563 6.68262 12.4569 6.60111 12.6656 6.60206C12.8743 6.603 13.0742 6.68633 13.2218 6.8339C13.3693 6.98147 13.4526 7.18135 13.4536 7.39004C13.4545 7.59874 13.373 7.79937 13.2268 7.94827L9.00445 12.171C8.85577 12.3191 8.6546 12.4025 8.44474 12.403Z"
                fill="#136D01"
              />
            </g>
            <defs>
              <clipPath id="clip0_667_12027">
                <rect width="19" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-center">تم الدفع</p>
        </div>
      ),
      Claim: (
        <div
          className="pointer"
          onClick={() => {
            setOpenClaim(true);
          }}
        >
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
      Invoice: (
        <div className="pointer" onClick={() => setOpenInvoice(true)}>
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
  // const { id } = useParams()

  const columns = [
    {
      name: " القيمة",
      selector: (row) => row.amount,
    },
    {
      name: "  الدفعات ",
      selector: (row) => row.Payments,
    },
    {
      name: "    نوع الدفعة",
      selector: (row) => row.PaymentType,
    },
    {
      name: "تاريخ الاستحقاق",
      selector: (row) => row.DeliverDate,
    },

    {
      name: "الحالة",
      selector: (row) => row.status,
    },
    {
      name: "المطالبة",
      selector: (row) => row.status,
    },
    {
      name: "الفاتورة",
      selector: (row) => row.status,
    },
  ];

  return (
    <>
      {showImg && (
        <Modal
          size="lg"
          show={showImg}
          onHide={() => setShowImg(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="d-flex align-items-center   showRequestImg"
        >
          <Image
            className="pointer w-100 h-100  instrutmentimg"
            src={ModalImgSrc}
            alt="owner img"
          />
        </Modal>
      )}

      {showProject && (
        <Modal
          size="lg"
          show={showProject}
          onHide={() => setShowProject(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className=" systemModal     "
        >
          {" "}
          <div className="ShowClient">
            <div className="d-flex justify-content-between  w-90 mx-auto">
              <div className="d-flex gap-2 w-100">
                <div
                  onClick={() => {
                    setClientStatusType("معلومات المشروع");
                  }}
                  className={`d-flex justify-content-center align-items-center p-2 w-25 pointer   my-3 ${
                    clientStatusType === "معلومات المشروع"
                      ? "edit-clint-header-golden"
                      : "edit-clint-header-white"
                  } `}
                >
                  <p
                    className={`
                ${
                  clientStatusType === "معلومات المشروع"
                    ? "golden"
                    : "text-white"
                } my-auto text-center`}
                  >
                    {" "}
                    معلومات المشروع{" "}
                  </p>
                </div>
                <div
                  onClick={() => {
                    setClientStatusType("الدفعات");
                  }}
                  className={` w-25 pointer d-flex justify-content-center p-2 align-items-center  my-3 ${
                    clientStatusType === "الدفعات"
                      ? "edit-clint-header-golden"
                      : "edit-clint-header-white"
                  } `}
                >
                  <p
                    className={` text-center my-auto ${
                      clientStatusType === "الدفعات" ? "golden" : "text-white"
                    }
                
                text-center`}
                  >
                    {" "}
                    الدفعات{" "}
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="pointer"
                  src={process.env.PUBLIC_URL + "/Rejected.png"}
                  alt="close"
                  onClick={() => {
                    setShowProject(false);
                  }}
                />
              </div>
            </div>

            {clientStatusType == "معلومات المشروع" ? (
              <div>
                <div className="data-container w-90 m-auto border-golden p-3">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        اسم المشروع : <span className="main-text">BSA</span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        حالة المشروع :{" "}
                        <span className="main-text">قيد التنفيذ</span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        نوع المشروع :{" "}
                        <span className="main-text"> التصميم</span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        موقع المشروع:{" "}
                        <span className="main-text"> السعودية </span>
                      </p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        المدينة : <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        الحى : <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        رقم المخطط :{" "}
                        <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        رقم القطعه :{" "}
                        <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-12 mb-3">
                      <p className="text-white">
                        {" "}
                        رقم الشهادة الضربية :{" "}
                        <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        الوكيل : <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        رقم الوكالة :{" "}
                        <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        اسم الصك: <span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        رقم الصك :<span className="main-text"> ـــــــ </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        تاريخ الأستلام :{" "}
                        <span className="main-text"> 2023 - 04 - 10 </span>
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="text-white">
                        {" "}
                        تاريخ الأستلام :{" "}
                        <span className="main-text"> 2023 - 05 - 10 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="data-container my-4 w-90 mx-auto border-golden p-3">
                  <div className="row">
                    <div className="col-md-4 mt-3">
                      <img
                        className="pointer instrutmentimg "
                        onClick={() => {
                          setShowImg(true);
                          setModalImgSrc(identityImage);
                        }}
                        src={identityImage}
                        alt="owner img"
                      />

                      <p className="text-white"> صورة الهوية </p>
                    </div>
                    <div className="col-md-4 mt-3">
                      <img
                        className="pointer instrutmentimg "
                        onClick={() => {
                          setShowImg(true);
                          setModalImgSrc(instrumentImage);
                        }}
                        src={instrumentImage}
                        alt="owner img"
                      />

                      <p className="text-white"> صورة الصك </p>
                    </div>
                    <div className="col-md-4 mt-3">
                      <img
                        className="pointer instrutmentimg "
                        onClick={() => {
                          setShowImg(true);
                          setModalImgSrc(agencyImage);
                        }}
                        src={agencyImage}
                        alt="owner img"
                      />

                      <p className="text-white"> صوره الوكالة </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-golden w-90 mx-auto ">
                  <div className="row p-3">
                    <div className="col-md-6">
                      <p className="text-white">
                        المبلغ الاجمالى :{" "}
                        <span className="main-text"> 3000 ريال</span>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="text-white">
                        عدد الدفعات المتفق عليها :
                        <span className="main-text"> 4 دفعات </span>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="text-white">
                        المبلغ المتبقى :
                        <span className="main-text"> 1500 ريال</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-3     w-90  mx-auto ">
                  {/* <DataTableComponent className={" border-golden  datatableComponent"} columns={columns} data={ClientDetailsTable} /> */}
                  <CustomTable columns={columns} data={ClientDetailsTable}>
                    {ClientDetailsTable && ClientDetailsTable.length > 0
                      ? ClientDetailsTable.map(
                          (
                            {
                              amount,
                              Payments,
                              PaymentType,
                              DeliverDate,
                              status,
                              Claim,
                              Invoice,
                            },
                            index
                          ) => (
                            <TableRow
                              className={`my-2 border !border-[#efaa207f] ${
                                index % 2 === 0 ? "bg-[#151521]" : ""
                              }`}
                              key={index}
                            >
                              {/* <TableCell textColor="#ffffff7f">{id}</TableCell> */}
                              <TableCell>{amount}</TableCell>
                              <TableCell>{Payments}</TableCell>
                              <TableCell>{PaymentType}</TableCell>
                              <TableCell>{DeliverDate}</TableCell>
                              <TableCell>{status}</TableCell>
                              <TableCell>{Claim}</TableCell>
                              <TableCell>{Invoice}</TableCell>
                            </TableRow>
                          )
                        )
                      : null}
                  </CustomTable>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
      {openCliam && (
        <Modal
          className="d-flex claimModal align-items-center jusify-content-center"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenClaim(false)}
          show={openCliam}
        >
          <Modal.Body className="d-flex align-items-center">
            <Image
              src={`${process.env.PUBLIC_URL + "/FinancalRequest.png"}`}
              alt="FinancalRequest png"
              width={650}
              height={700}
            />
          </Modal.Body>
        </Modal>
      )}
      {openInvoice && (
        <Modal
          className="d-flex claimModal align-items-center jusify-content-center"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenInvoice(false)}
          show={openInvoice}
        >
          <Modal.Body className="d-flex align-items-center">
            <Image
              src={`${process.env.PUBLIC_URL + "/FinancalRequest.png"}`}
              alt="FinancalRequest png"
              width={650}
              height={700}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ShowClientDetails;
