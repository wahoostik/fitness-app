import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';

function Home() {
    return (
        <Box>
            <HeroBanner />
            <SearchExercices />
        </Box>
    );
}

export default Home;