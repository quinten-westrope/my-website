import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import headshot from './headshot.jpeg';

const MediaCard = () => {
    return (
        
        <Box sx={{ }}
        >   
            <Box
            sx={{
            "&.MuiBox-root": { display: "flex", flexDirection: "column" , padding: 2}}}>
                <Avatar 
                src={headshot} 
                sx={{ 
                    width: 150, 
                    height: 150, 
                    margin: "auto"
                }}
                />
            </Box>
        </Box>

);
    };

export default MediaCard;