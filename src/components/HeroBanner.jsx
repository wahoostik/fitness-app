import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

function HeroBanner() {
    return (
        <Box className='lg:mt-56 sm:mt-16 vsm:mt-16 lg:ml-8 sm:ml-12 vsm:ml-12 relative'>
            <h1 className='text-sky-600 font-bold lg:text-6xl text-5xl'>
                Fitness Club
            </h1>
            <h2 className='text-blue-900 font-bold lg:text-5xl lg:leading-banner sm:text-4xl sm:leading-banner-small vsm:text-4xl vsm:leading-banner-small mt-8 mb-3'>
                Sweat, Smile <br /> And Repeat
            </h2>
            <h2 className='text-blue-900 font-medium lg:text-3xl sm:text-3xl vsm:text-3xl md:max-w-[45%] sm:max-w-[75%]'>
                Check out the most effective exercises personalized to you
            </h2>
            <Button variant='contained' className='rounded-full mt-8 ' href='#exercises'>
                Explore Exercises
            </Button>
            <Typography className='text-blue-900 opacity-10 font-semibold text-[12rem] lg:block sm:hidden vsm:hidden'>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt='hero-banner' className='image-banner' />
        </Box>
    );
}

export default HeroBanner;