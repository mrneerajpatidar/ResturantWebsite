import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                textAlign: "center",
                p: 2,
                "& h4": {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: "2rem",
                },
                "& p": {
                    textAlign: "justify",
                },
            }}>
                <Typography variant='h4'>
                    Welcome To My Resturant
                </Typography>
                <p>
                    As a kid, I never had a very clear picture of what I wanted to do with my life. The only thing that sounded appealing was reading all day. But I didn’t want to be an editor. I just wanted to read and get paid for it…alas, that job still doesn’t exist.
                    "At Blanket Food, we believe the best dishes are the ones that remind you of childhood. A portion of great food should make you feel like you are wrapped in a warm blanket.

                    At our location in Boston or online, you will find the best dishes you didn't know you craved: extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.

                    Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!"
                </p>
                <br />
                <p>
                    I grew up in a musical family, and I’ve always had a pleasant singing voice. I loved to perform, and figured I had as good a shot as making it as anyone else.  So like many other wide-eyed teens, I decided I would become a singer.

                    I enrolled in music school, but there was a problem — while I enjoyed performing, I didn’t particularly like practicing. And if you’re trying to get great at something competitive, you have to put in the hours.
                </p>
            </Box>
        </Layout>
    );
}

export default About
