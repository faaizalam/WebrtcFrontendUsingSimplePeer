import { Box } from '@chakra-ui/react'
import React from 'react'
import ParticipentsLable from './ParticipentsLable'
import Participents from './Participents'

const ParticipentsSection = () => {

  return (
    <Box w="50%">
      <ParticipentsLable/>
      <Participents/>
    </Box>
  )
}

export default ParticipentsSection