import React from "react";
// import Table from "react-bootstrap/Table";
import DataTable from "react-data-table-component";
import Progress from "./Progress";
const customStyles = {
  rows: {
    style: {
      backgroundColor: "#34344D",
      color: "#FFF",
      padding: "0px",
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      "&:nth-of-type(n)": {
        color: "#EFAA20",
        backgroundColor: "#EFAA20",
        borderBottomColor: "#EFAA20",
      },
    },
    stripedStyle: {
      color: "#FFF",
      backgroundColor: "#1E1E2D",
    },
  },
  cells: {
    style: {
      paddingLeft: "5px", // override the cell padding for data cells
      paddingRight: "5px",
      color: "#FFF",
      overFlow: "auto",
      maxWidth: 70,
    },
  },
  headCells: {
    style: {
      padding: "10px",
      color: "#FFF",
      overFlow: "auto",
      backgroundColor: "#34344D",
    },
  },

  bodyCells: {
    style: {
      padding: "10px",
      color: "#FFF",
      overFlow: "auto",
      maxWidth: 70,
    },
  },

  pagination: {
    style: {
      backgroundColor: "#34344D",
      color: "#FFF",
    },
  },
};

const DataTableComponent = ({ className, columns, data, title }) => {
  return (
    <>
      <DataTable
        sortIcon
        title={title}
        columns={columns}
        data={data}
        progressComponent={<Progress />}
        striped={true}
        className={`  ${className} !overflow-auto scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9]`}
        customStyles={customStyles}
      />
    </>
  );
};

export default DataTableComponent;
// export default DataTableComponent;

/**
 <Table striped hover>
      <thead className="bg-[#34344C] border !border-[#efaa207f]">
        <tr>
          <th className="text-[9px] !font-semibold p-2 !text-[#ffffff7f]">#</th>
          <th className="text-[9px] !font-semibold p-2 !text-[#EFAA20]">
            اسم الموظف{" "}
          </th>
          <th className="text-[9px] !font-semibold p-2 !text-[#EFAA20]">
            القسم
          </th>
          <th className="text-[9px] !font-semibold p-2 !text-[#EFAA20]">
            تاريخ الزيارة
          </th>
          <th className="text-[9px] !font-semibold p-2 !text-[#EFAA20]">عرض</th>
          <th className="text-[9px] !font-semibold p-2 !text-[#EFAA20]">
            تعديل
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({name,dep,date},index) => (
          <tr className={`my-2 border !border-[#efaa207f] ${index % 2 === 0 ? "bg-[#34344C]" : ""}`}>
            <td className="text-[9px] p-2 !text-[#ffffff7f]">{index+1}</td>
            <td className="text-[9px] p-2 !text-white">{name}</td>
            <td className="text-[9px] p-2 !text-white">{dep}</td>
            <td className="text-[9px] p-2 !text-white">{date}</td>
            <td className="text-[9px] p-2 !text-white">
              <button onClick={handleOpenViewVisit} className="bg-[#EFAA20] p-2 rounded-[2.487px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2941_32224)">
                    <path
                      d="M8.29925 1.73242H0.384696C0.17741 1.73242 0.0078125 1.90202 0.0078125 2.10931V7.951C0.0078125 8.15829 0.17741 8.32789 0.384696 8.32789H8.29925C8.50654 8.32789 8.67614 8.15829 8.67614 7.951V2.10931C8.67614 1.90202 8.50654 1.73242 8.29925 1.73242ZM7.92237 2.48619V5.64259L7.29109 5.11495C7.14976 5.00189 6.95189 5.00189 6.81056 5.11495L5.79298 5.96294L3.42803 3.90893C3.2867 3.78644 3.08884 3.78644 2.94751 3.8995L0.76158 5.66143V2.48619H7.92237ZM0.76158 7.57412V6.63191L3.17364 4.68154L5.53858 6.73555C5.67991 6.85804 5.8872 6.85804 6.02853 6.74497L7.04611 5.89699L7.92237 6.63191V7.57412H0.76158ZM4.91672 3.76759C4.91672 3.39071 5.22765 3.07978 5.61396 3.07978C6.00026 3.07978 6.31119 3.39071 6.31119 3.76759C6.31119 4.14448 6.00026 4.45541 5.61396 4.45541C5.22765 4.45541 4.91672 4.14448 4.91672 3.76759Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2941_32224">
                      <rect
                        width="8.66832"
                        height="8.66832"
                        fill="white"
                        transform="translate(0.0078125 0.696289)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </td>
            <td className="text-[9px] p-2 !text-white">
              <button onClick={handleOpenEditVisit} className="bg-[#67C100] p-2 rounded-[2.487px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2941_32210)">
                    <path
                      d="M1.70368 7.90431H3.61466C3.67398 7.90465 3.73278 7.89329 3.78769 7.87086C3.8426 7.84843 3.89255 7.81538 3.93466 7.77361L7.05353 4.65023L8.33353 3.39727C8.37578 3.35537 8.40931 3.30552 8.43219 3.2506C8.45507 3.19568 8.46685 3.13677 8.46685 3.07727C8.46685 3.01777 8.45507 2.95886 8.43219 2.90394C8.40931 2.84902 8.37578 2.79917 8.33353 2.75727L6.42255 0.823747C6.38065 0.781503 6.3308 0.747974 6.27588 0.725092C6.22096 0.70221 6.16205 0.69043 6.10255 0.69043C6.04305 0.69043 5.98414 0.70221 5.92922 0.725092C5.8743 0.747974 5.82445 0.781503 5.78255 0.823747L4.51156 2.09924L1.38368 5.22262C1.3419 5.26473 1.30886 5.31468 1.28643 5.36959C1.264 5.42451 1.25263 5.48331 1.25297 5.54262V7.45361C1.25297 7.57314 1.30046 7.68778 1.38498 7.7723C1.4695 7.85683 1.58414 7.90431 1.70368 7.90431ZM6.10255 1.77924L7.37804 3.05473L6.73804 3.69473L5.46255 2.41924L6.10255 1.77924ZM2.15438 5.72741L4.82706 3.05473L6.10255 4.33023L3.42987 7.0029H2.15438V5.72741ZM8.91494 8.80572H0.802267C0.682732 8.80572 0.568094 8.8532 0.483571 8.93773C0.399047 9.02225 0.351563 9.13689 0.351562 9.25642C0.351563 9.37596 0.399047 9.4906 0.483571 9.57512C0.568094 9.65964 0.682732 9.70713 0.802267 9.70713H8.91494C9.03448 9.70713 9.14912 9.65964 9.23364 9.57512C9.31816 9.4906 9.36565 9.37596 9.36565 9.25642C9.36565 9.13689 9.31816 9.02225 9.23364 8.93773C9.14912 8.8532 9.03448 8.80572 8.91494 8.80572Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2941_32210">
                      <rect
                        width="9"
                        height="9.42254"
                        fill="white"
                        transform="translate(0.359375 0.48877)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
 */
