import { Box } from '@mui/material'
import React from 'react'
import BalanceAndExpences from './BalanceAndExpences'
import Cards from './Cards'

function Feed() {
  return (
    <><Box p={2} display={'flex'} flex={6} color={'whitesmoke'} gap={2}>
      <BalanceAndExpences />
      <Cards />
    </Box><Box p={2} display={'flex'} flex={6} color={'whitesmoke'} gap={2}>
        <BalanceAndExpences />
        <Cards />
      </Box></>

  )
}

export default Feed