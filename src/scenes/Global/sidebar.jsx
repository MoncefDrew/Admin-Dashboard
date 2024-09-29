import {useState} from "react";
import { Menu ,MenuItem, ProSidebar} from "react-pro-sidebar";
 import {Box, IconButton,Typography ,useTheme} from "@mui/material";
import links from "react-router-dom";
import {tokens} from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
//import CalendarOutlinedIcon from '@mui/icons-material/CalendarOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarchartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
//import TimeLineOutlinedIcon from '@mui/icons-material/TimeLineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Sidebar = ( ) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isCollapsed, setisCollapsed] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Selected, setSelected] = useState("Dashboard");
    return (
        <Box 
            sx={{
                "& .pro-sidebar-inner":{
                    background : `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper":{
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item":{
                    padding:"5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover":{
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active":{
                    color:"#6870fa !important"
                },
            }}

        >
            <ProSidebar collapsed={isCollapsed} >
                <Menu iconShape="square">
                    {/* LGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setisCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}>
                        {!isCollapsed &&(
                            <Box display="flex"
                                 justifyContent="space-between"
                                 alignItems="center"
                                 ml="15px">
                                <Typography>
                                    ADMINIS
                                </Typography>
                                <IconButton>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                </Menu>
            </ProSidebar>
        </Box>

    )
}
export default Sidebar;