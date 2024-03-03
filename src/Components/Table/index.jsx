import Table from "react-bootstrap/Table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";

export default function CustomTable({
  columns,
  data,
  children,
  TableHeaderProps,
  TableRowProps,
  TableHeadProps,
  ...props
}) {
  return (
    <>
      <Table bordered hover responsive {...props}>
        <TableHeader
          className="bg-[#151521] border !border-[#efaa207f]"
          {...TableHeaderProps}
        >
          <TableRow {...TableRowProps}>
            {columns?.map(({ name }, index) => (
              <TableHead
                className="text-end text-[11px] border-none !font-semibold p-2 !text-[#EFAA20]"
                {...TableHeadProps}
              >
                {name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <tbody>
          {children}
          {/* {data && data.length > 0
            ? data.map(
                (
                  {
                    id,
                    projectName,
                    projectType,
                    projectPlace,
                    clientType,
                    DeliverDate,
                    status,
                    owner,
                    view,
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
                    <TableCell>{projectName}</TableCell>
                    <TableCell>{projectType}</TableCell>
                    <TableCell>{projectPlace}</TableCell>
                    <TableCell>{clientType}</TableCell>
                    <TableCell>{DeliverDate}</TableCell>
                    <TableCell>{status}</TableCell>
                    <TableCell>{owner}</TableCell>
                    <TableCell>{view}</TableCell>
                  </TableRow>
                )
              )
            : null} */}
        </tbody>
      </Table>
      {!data || data.length === 0 ? (
        <div className="text-center">
          <p className="w-full text-center text-xl border-none min-w-[50px] p-2 !text-[#ffffff7f]">
            لا يوجد بيانات لعرضها{" "}
          </p>
        </div>
      ) : null}
    </>
  );
}
