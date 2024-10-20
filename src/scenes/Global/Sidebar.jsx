
import {useState} from "react";
import { Menu ,MenuItem, ProSidebar} from "react-pro-sidebar";
import {Box, IconButton,Typography ,useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {tokens} from "../../theme";

import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarchartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimeLineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import {CalendarTodayOutlined} from "@mui/icons-material";

const Item =  ({title, to, icon, Selected,setSelected}) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
      <MenuItem active={Selected === title}
                style={{color : colors.grey[100]}}
                onClick={()=> setSelected(title)}
                icon={icon}>

        <Typography> {title} </Typography>
        <Link to={to}/>
      </MenuItem>
  )
}

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
              padding:"5px 35px 5px 20px !important",

            },
            "& .pro-inner-item:hover":{
              color: "#868dfb !important"
            },
            "& .pro-menu-item.active":{
              color:"#6870fa !important"
            },
          }}

      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* Header */}
            <MenuItem
                onClick={() => setisCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
            >
              {!isCollapsed && (
                  <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>
                      Admin
                    </Typography>
                    <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        alt="profile-user"
                        width="130px"
                        height="130px"
                        src={`../../assets/cropped_image.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                    >
                      Moncef Drew
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      VP Fancy Admin
                    </Typography>
                  </Box>
                </Box>
            )}


            {/* Menu Items (Now Vertically Aligned) */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item title="Dashboard"
                    to="/"
                    icon={<HomeOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{m : "15px 0 5px 20px"}}>
                Data
              </Typography>
              <Item title="Manage Team"
                    to="/team"
                    icon={<PeopleOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="Contacts Information"
                    to="/contacts"
                    icon={<ContactsOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="Invoices Balances"
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{m : "15px 0 5px 20px"}}>
                Pages
              </Typography>
              <Item title="Profile Form"
                    to="/form"
                    icon={<PersonOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="Calendar"
                    to="/calendar"
                    icon={<CalendarTodayOutlined/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="FAQ Page"
                    to="/faq"
                    icon={<HomeOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{m : "15px 0 5px 20px"}}>
                Charts
              </Typography>
              <Item title="Bar Chart"
                    to="/bar"
                    icon={<BarchartOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="Pie Chart"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="Line Chart"
                    to="/line"
                    icon={<TimeLineOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />
              <Item title="Geography Chart"
                    to="/geography"
                    icon={<MapOutlinedIcon/>}
                    setSelected={setSelected}
                    selected={Selected}
              />


            </Box>
          </Menu>
        </ProSidebar>

      </Box>

  )
}
export default Sidebar;