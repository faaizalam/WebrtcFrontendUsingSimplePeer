import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const SingleParticipents = ({ lastItem, identity }) => {
    return (
      <Box
        sx={{
          ':hover': {
            backgroundColor: 'lightgray',
          },
        }}
        cursor="pointer"
      >
        {console.log(identity)}
        <Box className='participant'>{identity}</Box>
        {!lastItem && <span><hr /></span>}
      </Box>
    )
  }
const Participents = () => {
  const { Paricipents} = useSelector((state) => state.JoinReducer);
  // let dummyParticipents = [
  //   {
  //     identity: "faaiz"
  //   },
  //   {
  //     identity: "junaid"
  //   },
  //   {
  //     identity: "Afham"
  //   },
  //   {
  //     identity: "Afnan"
  //   },
  // ]

  return (
    <>
      {Paricipents.map((x, index) => (
        <SingleParticipents
          key={x.identity}
          lastItem={Paricipents.length === index + 1}
          identity={x.identity}
        />
      ))}
    </>
  )
}

export default Participents
