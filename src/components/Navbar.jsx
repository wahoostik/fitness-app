import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo-tony.png';

function Navbar() {
    return (
        /*<Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">*/
        <Stack className='flex flex-row justify-start md:gap-8 sm:gap-2 md:mt-2 sm:mt-1.5 ml-2'>
            <Link to='/'>
                <img src={Logo} className='w-28 mr-8 mt-5' />
            </Link>
            <Stack className='flex flex-row items-end text-2xl gap-10 font-semibold'>
                <Link to='/' className='navlink'>Home</Link>
                <a href='#exercises' className='navlink'>Exercises</a>
            </Stack>
        </Stack>
    );
}

export default Navbar;