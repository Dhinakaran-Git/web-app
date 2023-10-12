import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import { useNavigate } from "react-router-dom";
const HeaderTwo = () => {

  const navigate  = useNavigate();

  return (
    <Grid container mt={2} >
      <Grid item container xs={6} md={8}  >
        <Grid
          item
          container
          display={"flex"}
          xs={12}
          alignItems={"center"}
        >
          <Grid item xs={12} sm ={4} >
            <Box
              py={1.2}
              display={"flex"}
              alignItems={"center"}
              sx={{
                px: {xs : 1 , sm : 3 },
                bgcolor: "#DB3022",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <MenuIcon sx={{ px: 1, color: "white" }} />
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon style={{ color: "white" }} />
                )}
                variant="standard"
                disableUnderline
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={10}
                sx={{ color: "white", fontWeight: 500, width: "200px" }}
              >
                <MenuItem value={10}>All Categories</MenuItem>
                <MenuItem value={230}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={8} sx={{display  :  {xs  : "none" , md : "block"}}}  >
            <Box
            sx={{display :  "flex" }}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Select
              onClick={()=> navigate("/")}
                IconComponent={() => (
                  <ExpandMoreIcon style={{ color: "#Db3022" }} />
                )}
                variant="standard"
                disableUnderline
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={10}
                sx={{ color: "#Db3022" }}
              >
                <MenuItem value={10}>Home</MenuItem>
                <MenuItem value={230}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Typography>Shop</Typography>
              <Typography sx={{cursor : "pointer"}} onClick={()=> navigate("/about")} >About Us</Typography>
              <Typography>Contact Us</Typography>
              <Typography>Blog</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4}  display={"flex"} justifyContent={"end"} >
         <Box display={"flex"} alignItems={"center"} >
            <PhoneForwardedOutlinedIcon sx={{color:"green" ,fontSize : { xs : '20px' , md : '30px' } , mr : 2 }} />
            <Box display={"flex"}flexDirection={"column"} justifyContent={"center"} >
                <Typography sx={{ fontSize : { xs : '10px' , md : '13px' } }}>+91 7904697609</Typography>
                <Typography  sx={{ fontSize : { xs : '10px' , md : '13px' } }} >Customer Support</Typography>
            </Box>
         </Box>
        </Grid>
    </Grid>
  );
};

export default HeaderTwo;
