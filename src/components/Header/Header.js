import { Box } from "@mui/material";
import HeaderOne from "./HeaderOne";
import HeaderTwo from "./HeaderTwo";

const Header = () => {
    return ( 
        <Box  sx={{ mx : {xs : .2 , md: 1 , lg : 35 , xl : 40 } , my : {xs : 1 , sm :2 ,md :2}  }} >
            <HeaderOne />
            <HeaderTwo />
        </Box>
     );
}
 
export default Header;