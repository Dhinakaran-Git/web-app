import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderOne = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", md: "center" },
        mb : 1
      }}
    >
      <Grid item xs={4} sm={1} md={2} >
        <img src="../images/logo.png" style={{ objectFit: "cover" }} />
      </Grid>
      <Grid item xs={8} md={6}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Product"
            InputProps={{
              style: {
                height: "45px",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
              },
            }}
          />
          <SearchIcon
            sx={{
              bgcolor: "#D30222",
              color: "white",
              height: "45px",
              width: "60px",
              px: 2,
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px",
            }}
          />
        </Box>
      </Grid>
      <Grid
        sx={{ display: { xs: "none", sm: "flex" }  }}
        item
        xs={2}
        md={4}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Box p={3}>
          <Typography fontWeight={400}> Register / Login </Typography>
        </Box>
        <Box display={"flex"}>
          <Box display={"flex"} alignItems={"center"} sx={{ mr:{ md : 3 , xs:0}}}>
            <FavoriteBorderIcon
              sx={{
                color: "gray",
                fontSize: { xs: "22px", md: "35px" },
                marginRight: 0.3,
              }}
            />
            <Typography
              sx={{
                bgcolor: "#D30222",
                color: "white",
                fontSize: { xs: "10px", md: 12 },
                fontWeight: 500,
                px: 0.8,
                py: 0.1,
                borderRadius: 3,
              }}
            >
              2
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <ShoppingCartIcon
              px={4}
              sx={{ color: "gray",  fontSize: { xs: "22px", md: "35px" }, marginRight: 0.3 }}
            />
            <Typography
              sx={{
                bgcolor: "#D30222",
                color: "white",
                fontSize: { xs: "10px", md: 12 },
                fontWeight: 500,
                px: 0.8,
                py: 0.1,
                borderRadius: 3,
              }}
            >
              2
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeaderOne;
