import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function SearchExercices() {

    const [search, setSearch] = useState('');

    const handleSearch = () => {
        
    };

    return (
        <div className='items-center mt-8 p-5'>
            <h2 className='font-bold lg:leading-banner md:leading-banner-small lg:text-5xl md:text-4xl vsm:text-3xl mb-12 text-center md:mt-10 text-blue-900'>
                Awesome Exercises You <br /> Should Know
            </h2>
            <div className='relative mb-16 flex justify-center'>
                <TextField
                    className='h-20 w-3/4'
                    label='Search Exercises'
                    variant='outlined'
                    value={search}
                    type='text'
                    onChange={(event) => setSearch(event.target.value.toLowerCase())}>
                    
                </TextField>
                <Button
                    variant='contained'
                    className='h-14 md:w-1/5 vsm:w-2/5 capitalize font-semibold text-xl'
                    onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </div>
    );
}

export default SearchExercices;