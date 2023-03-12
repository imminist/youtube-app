import { userState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'



function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        {/* <SideBar /> */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Tayson
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          md={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  )
}

export default Feed
