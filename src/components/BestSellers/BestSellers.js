import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Box, Grid } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useEffect, useState } from 'react';
import { getBestSellersLinks } from '../../services/bestSellerService';

const BestSellers = () => {

    const [bestSellers , setBestSellers] = useState([]);

    useEffect(()=>{
        getBestSellersLinks().then( data => setBestSellers(data))
    },[])

    return (
        <Grid container sx={{ display:'flex', flexDirection:'column' , p:3}} >
            <Grid item sx={{ display: 'flex' }}>
                <Grid container sx={{display:"flex" , justifyContent:'space-between' , alignItems :"center"}}>
                    <Grid item>
                        <Typography sx={{ fontSize  : {sm : '10px' , md : "30px"} , fontWeight : "bold" }}>Best Sellers</Typography>
                    </Grid>
                    <Grid item>
                        <Button  variant="contained" sx={{ backgroundColor: 'green', fontSize: {sm : '10px' , md : "30px"}, px: { sm : 2 , md : 5}, py: 1, borderRadius: 10 }}>VIEW ALL</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item display={"flex"} flexWrap={'wrap'} mt={2} justifyContent={"space-around"} >
                {
                    bestSellers.map(data => (
                        <Card key={data.id}  sx={{ textAlign:"center" , maxWidth: 300, my:2, borderRadius: 2 }} elevation={2}>
                        <Typography sx={{ backgroundColor: '#DB3022', color:"white" , width: 120 , pl:1 }}>BEST SELLER</Typography>
                        <img src={data?.product_details?.featured_image} width={"200px"}  />
                        <CardContent sx={{textAlign : "center"}} >
                            <Typography variant="body2" color="text.secondary">
                               {data.product_details.meta_title}
                            </Typography>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                            <Typography variant='h6' >Category:</Typography>
                            <Typography color={"gray"} pt={.3} pl={1}>{data.category_name}</Typography>
                            </Box>
                            <Typography variant="body2" color="green">
                                {data.product_details.meta_description}
                            </Typography>
                            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StarIcon sx={{ color: 'yellow' }} />
                                <Typography>{data.avg_rating !== "" ? data.avg_rating : '-' } |</Typography>
                                <ChatBubbleIcon sx={{ color: 'lightblue' }} />
                                <Typography>{data.product_details.review_count} reviews</Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography style={{ fontSize: '24px' }}><CurrencyRupeeIcon sx={{ height: '20px' }} />{data.sales_price}</Typography>
                                <Typography style={{ fontSize: '15px' }}><CurrencyRupeeIcon sx={{ height: '15px' }} />{data.regular_price}</Typography>
                            </Grid>
                        </CardContent>
                        <Typography sx={{ border: '1px solid red', padding: 1, color: 'red', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>ADD TO CART</Typography>
                    </Card>
                    ))

                }
               
            </Grid>

        </Grid>
    );
}

export default BestSellers;