import * as React from "react";
import Tabs from "@mui/material/Tabs";
import "./tabs.css";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import PropTypes from 'prop-types';
export default function TabBar({loading ,shopByConcern}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  


  return (
    <>    {!loading &&  
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          color: "white",
          display: "flex",
          justifyContent: "center",
          my: 3,
        }}
      >
        <Tabs
          value={value}
          sx={{
            width: { sm : '280px' , md : '300px' , lg : '700px'  } ,
            borderRadius: 20,
            height: 30,
            backgroundColor: "#d3d3d3",
            "& .Mui-selected": { backgroundColor: "#01572e", color:"white" },
          }}
          onChange={handleChange}
          centered
        >
          <Tab label="Hair" sx={{ width:  { sm : '40px' , md : '140px' , lg : '240px'  } , borderRadius: 20 }} />
          <Tab label="Face" sx={{ width:  { sm : '40px' , md : '140px' , lg : '240px'  }, borderRadius: 20 }} />
          <Tab label="Body" sx={{ width:  { sm : '40px' , md : '140px' , lg : '240px'  }, borderRadius: 20 }} />
        </Tabs>
      </Box>
      <Box  >
        <CustomTabPanel
          value={value}
          index={0}
        >
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}  >
          {shopByConcern.healthCare?.concerns.map((data) => (
            <Box key={data.id} mx={5} my={2}  textAlign={"center"}>
              {" "}
              <Box
                component={"img"}
                src={data.concern_image_url}
                width={"200px"}
                height={"200px"}
                sx={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <Typography color={"black"} variant="h6" fontWeight={"bold"}>
                {data.concern_name}
              </Typography>
            </Box>
          ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel
          value={value}
          index={1}
          
        >
          {" "}
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} >
          {shopByConcern?.faceCare?.concerns.map((data) => (
            <Box key={data.id} mx={5} my={2} textAlign={"center"}>
              {" "}
              <Box
                component={"img"}
                src={data.concern_image_url}
                width={"200px"}
                height={"200px"}
                sx={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <Typography color={"black"} variant="h6" fontWeight={"bold"}>
                {data.concern_name}
              </Typography>
            </Box>
          ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"} >
          {shopByConcern?.bodyCare?.concerns.map((data) => (
            <Box key={data.id} mx={5} my={2} textAlign={"center"}>
              {" "}
              <Box
                component={"img"}
                src={data.concern_image_url}
                width={"200px"}
                height={"200px"}
                sx={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <Typography color={"black"} variant="h6" fontWeight={"bold"}>
                {data.concern_name}
              </Typography>
            </Box>
          ))}
          </Box>
        </CustomTabPanel>
      </Box>
    </>
    }
    </>

  );
}
