import { Box, Grid, Typography } from "@mui/material";

const OurBrands = () => {
    return ( 
        <Grid container my={3} display={"flex"} textAlign={"center"} justifyContent={"center"} >
            <Grid item xs={12} md={12}>
                <Typography variant="h3" fontWeight={500} > Our Brands</Typography>
                <Box display={"flex"} flexWrap={'wrap'} justifyContent={"center"}  my={3} >
                    { [1,2,3].map( data => (
                        <Box sx={{textAlign:"center", width:'280px' ,m:2 }} key={data} >
                            <img src="./images/logo.png" width={120}  />
                            <Box  >
                            <Typography variant="h6" fontWeight={500} >Krishna Naturals <br/> Hair care </Typography>
                                </Box>
                        </Box>
                    ) )  
                    }
                </Box>
            </Grid>
            
        </Grid>
     );
}
 
export default OurBrands;