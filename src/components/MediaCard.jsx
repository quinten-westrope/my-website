import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import headshot from './headshot.jpeg';

const MediaCard = () => {
    return (
        
        <Box
        sx={{
        "&.MuiBox-root": { display: "flex", flexDirection: "column" , padding: 2, marginTop: 3}}}>
            <Avatar 
            src={headshot} 
            sx={{ 
                width: 200, 
                height: 200, 
                margin: "auto"
            }}
            />
        </Box>

);
    };

export default MediaCard;