import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

export const Overlay = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      bg="rgba(0, 0, 0, 0.5)" // optional: to create an overlay effect
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
    >
      {/* <Spinner color="red" size="xl" /> */}
    </Box>
  );
};
