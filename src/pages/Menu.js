import React from 'react'
import { myData } from '../data/myData';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Layout from '../components/Layout/Layout';
import ".././styles/MenuStyles.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../components/Layout/Redux/Cartslice';

const Menu = () => {

    const items=useSelector((state)=>state.allCart.items);

    const dispatch = useDispatch();

    return (
        <Layout>
            <Box className="Menu">
                {
                    myData.map(Menu => (
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia sx={{ minHeight: "400px" }} component={"img"} src={Menu.image} alt={Menu.image} />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={"div"}>
                                        {Menu.name}
                                        <div className="rupee"><CurrencyRupeeIcon />{Menu.price}</div>
                                    </Typography>
                                    <div className='descrition'>
                                        {Menu.description}
                                    </div>

                                    <div className="add-btn">
                                         <button onClick={() => dispatch(addToCart(items))}>Add To Cart</button>
                                    </div>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Layout>
    )
}

export default Menu;