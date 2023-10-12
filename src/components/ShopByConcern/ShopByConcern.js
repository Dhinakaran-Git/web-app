import { Box, Grid, Typography } from "@mui/material";
import TabBar from "./TabsBar";
import { useEffect, useState } from "react";
import { getShopByConcern } from "../../services/shopByConecrnService";

const ShopByConcern = () => {

    const [shopByConcern , setShopByConcern] = useState({
        hairCare : {},
        faceCare : {},
        bodyCare : {}
    })

    const [loading , setLoading] = useState(true);

    useEffect(()=>{

        getShopByConcern().then(data => {
            setShopByConcern({
                healthCare : data[0],
                faceCare : data[1],
                bodyCare : data[2]
            });
            setLoading(false);
        })
    },[])

    return (
        <Grid container sx={{display:'flex',flexDirection:'column' , my:3}}>
            <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item textAlign={"center"} >
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>Shop By Concern</Typography>
                    <Typography>We provide Problem faced</Typography>
                    <Typography>solution</Typography>
                </Grid>
            </Grid>
            <Grid item>
                <TabBar loading={loading} shopByConcern={shopByConcern} />
            </Grid>
        </Grid>
    );
}

export default ShopByConcern;