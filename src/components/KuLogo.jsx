import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import logo from './ku.jpg';

const KuLogo = () => {
    return (
        
        <Box sx={{ }}
        >   
            <Box
            sx={{
            "&.MuiBox-root": { display: "flex", flexDirection: "column" , padding: 2}}}>
                <Avatar 
                src={logo} 
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

export default KuLogo;