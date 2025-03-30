import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './Header';
import FloatingIcon from './FloatingIcon';
import FlowChart from './FlowChart';
import '@xyflow/react/dist/style.css';


const App = () => (
  <div>
    <Header />
    {/* <FloatingIcon /> */}
    <Box sx={{ mt: 12, p: 3 }}> 
      <Typography variant="h4">Welcome to My Website</Typography>
      <Typography>This is the main content of the page.</Typography>
    </Box>

    <Box>
      This is for react flow
      <FlowChart/>
    </Box>
  </div>
);

export default App;