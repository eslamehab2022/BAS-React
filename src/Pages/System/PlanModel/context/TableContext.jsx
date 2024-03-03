import { createContext, useState } from "react";

export const TableContext = createContext()
export default function TableContextProvder ({children}){
    const [fullWidthTable,setFullWidthTable] = useState(false)
    const toggleFullWidth = () => setFullWidthTable(!fullWidthTable)
    return (
        <TableContext.Provider value={{fullWidthTable,setFullWidthTable ,toggleFullWidth}}>
            {children}
        </TableContext.Provider>
    )
}

