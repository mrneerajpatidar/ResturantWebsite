import React from 'react'
import { MenuList } from '../data/data'
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    MenuList.map(Menu => (
                        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                            <CardActionArea>
                                <CardMedia sx={{ minHeight: "400px" }} component={"img"} src={Menu.image} alt={Menu.image} />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={"div"}>
                                        {Menu.name}
                                    </Typography>
                                    <Typography variant="body2">{Menu.description}</Typography>
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