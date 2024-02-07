
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

import Select from '@mui/material/Select';
import { useState } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    className: "scrollbar-none !pr-0",
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      
    },
    sx:{
      "& ul":{
        paddingRight: "0px !important",
        width: "100% !important"

      }
    }
  },
  

};



export default function CustomSelect({children,...props}) {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedItem(value);
  };

  return (
    <div>
      
        <Select
          fullWidth
          displayEmpty
          value={selectedItem}
          onChange={handleChange}
          input={<OutlinedInput sx={{paddingRight: "0px !important"}} />}
          IconComponent={MdKeyboardArrowLeft}
          
          renderValue={(selected) => {
            if (!selected) {
              return <span className='text-white/50 '>ابحث عن ....</span>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 
            'aria-label': 'Without label' ,
            sx:{
              "& ul" :{

                paddingRight: "0px",
              }
            }
          
          }}
          size='small'
          sx={{
            color: "white",
            
            backgroundColor: '#2B2B40',
            borderRadius:'7px',
            "& fieldset": {
              border: "none"
            },
            "& MuiList-padding": {
              paddingRight: "0px !important",
            },
            "& svg": {
              right: 'auto',
              left: 7,
              color: "rgba(255,255,255,0.5)",
              transform: "none"
            },
          }}
          {...props}
        >
          {children}
          
        </Select>
      
    </div>
  );
}