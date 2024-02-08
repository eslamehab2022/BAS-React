
import "./index.css"
import DataTableComponent from '../../../DataTableComponent';
import { useContext, useState } from "react";
import ShowHolidayComponent from "../../Hr/ShowHolidayComponent/ShowHolidayComponent";
import { AddHrType } from "../../../../Context/AddHr";
import PersonalAttachments from "../PersonalAttachments/PersonalAttachments";
import { TableCell } from "../../../Table/TableCell";
import { TableRow } from "../../../Table/TableRow";
import CustomTable from "../../../Table";
const Genralnformation = () => {
  const { openHr, HrType } = useContext(AddHrType)
  const [ShowHoliday, setShowHoliday] = useState(false)
  const data = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: 1,
      employeeName: ' حبيب ',
      employeeCode: '1234',
      holidayType: 'حج ان شاء الله',
      holidayDate: '15-10-2024',
      display: <div className=''
        onClick={() => {

          setShowHoliday(true)
        }}
      >
        <img src={process.env.PUBLIC_URL + "/icons/view.png"} className='pointer' alt="" />
      </div>,


    }
  });
  console.log(openHr)

  const columns = [
    {
      name: 'م',
      selector: row => row.id,
    },
    {
      name: 'اسم الموظف',
      selector: row => row.employeeName,
    },
    {
      name: 'الكود الوظيفي',
      selector: row => row.employeeCode,
    },
    {
      name: 'نوع الاجازة',
      selector: row => row.holidayType,
    },
    {
      name: 'تاريخ الاجازة',
      selector: row => row.holidayDate,
    },

    {
      name: 'عرض',
      selector: row => row.display,
    },



  ];


  return (
    <div className='genralnformation overflow-y-auto py-3 px-2'>
      <ShowHolidayComponent setShowHoliday={setShowHoliday} ShowHoliday={ShowHoliday} />

      <div className='flex flex-col gap-3'>
        <div className='w-full flex flex-col items-start justify-between gap-3 py-1 px-2 jutify-content-between inf-square golden-square '>
          <div className='w-full flex items-center justify-between gap-2'>
            <p className="w-full"> الاسم الاول : <span className='main-text'> اسلام </span></p> 
            <p className="w-full text-end"> الاسم الاخير: <span className='main-text'> اسلام </span></p> 
          </div>
          
          <div className='w-full flex items-center justify-between gap-2'>
            <p className="w-full"> اسم المستخدم: <span className='main-text'> اسلام_ايهاب</span></p> 
            <p className="w-full text-end"> النوع: <span className='main-text'> ذكر</span></p> 
          </div>
          
          <div className=''><p> البريد الالكتروني: <span className='main-text'> Islam@bsa.com</span></p> </div>
          
          <div className='w-full flex items-center justify-between gap-2'>
            <p className="w-full"> رقم الجوال  : <span className='main-text'> 010123456789</span></p> 
            <p className="w-full text-end">  البلد  : <span className='main-text'> مصر</span></p> 
          </div>
          
          
            <p>  تاريخ الميلاد  : <span className='main-text'> 15 - 10 -2023</span></p>
          <div className=''><p>  الكود الوظيفي   : <span className='main-text'>1235</span></p> </div>



        </div>
        <div className='w-full flex flex-col items-start justify-between gap-3 py-1 px-2 jutify-content-between inf-square golden-square '>
          <div className=''><p> الصلاحية:  <span className='main-text'> مدير قسم </span></p> </div>
          <div className=''><p>  القسم: <span className='main-text'> برمجة  </span></p> </div>
          <div className=''><p>بدأ العمل :   <span className='main-text'> 15  - 10 - 2023</span></p> </div>
          <div className=''><p> المستوي :   <span className='main-text'>خبير </span></p> </div>


        </div>
        <div className='w-full flex flex-col items-start justify-between gap-3 py-1  jutify-content-between inf-square golden-square '>
          <p className='text-xl my-3 p-2 '>
            جميع اجازات الشهر الحالي


          </p>
        <div className="mt-3 w-full !h-[400px] overflow-scroll scrollbar-none">

          {/* <DataTableComponent 
          className={"overflow-x-hidden w-100"} 
          data={data} 
          columns={columns} 
          /> */}
<CustomTable columns={columns} data={data}>
                  {data && data.length > 0
                    ? data.map(
                        (
                          {
                            id,
                            employeeName,
                            employeeCode,
                            holidayType,
                            holidayDate,
                            display
                            
                          },
                          index
                        ) => (
                          <TableRow
                            className={`my-2 border !border-[#efaa207f] ${
                              index % 2 === 0 ? "bg-[#151521]" : ""
                            }`}
                            key={index}
                          >
                            <TableCell textColor="#ffffff7f">{id}</TableCell>
                            <TableCell>{employeeName}</TableCell>
                            <TableCell>{employeeCode}</TableCell>
                            <TableCell>{holidayType}</TableCell>
                            <TableCell>{holidayDate}</TableCell>
                            <TableCell>{display}</TableCell>
                          </TableRow>
                        )
                      )
                    : null}
                </CustomTable>
        </div>


        </div>


          <PersonalAttachments />
        
        
      </div>
    </div>

  )
}

export default Genralnformation