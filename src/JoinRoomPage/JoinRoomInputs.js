import { Box, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ConnectOnlywithaudioAction } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';


const JoinRoomInputs = ({ setroomidvalue, setNameValue, roomidvalue, nameValue, isRoomHost }) => {
    const [onlyAudio, setOnlyAudio] = useState(false);
    const [errorMessage, seterrorMessage] = useState("");
    const { connectOnlyWithaudioCheck } = useSelector((state) => state.JoinReducer);
    const dispatch = useDispatch();
   
    const handleAudioChange = () => {
        console.log("click", connectOnlyWithaudioCheck);
        setOnlyAudio(!connectOnlyWithaudioCheck);
        ConnectOnlywithaudioAction(!connectOnlyWithaudioCheck, dispatch);
    };


  
    return (
        <Box
            p={4}
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            width="400px"
            margin="0 auto"
            boxShadow="md"
        >
            <Box>

            
            {
                !isRoomHost && (
                    <Input
                        value={roomidvalue}
                        placeholder='Enter your room ID'
                        onChange={(e) => setroomidvalue(e.target.value)}
                        mb={4}
                        size="lg"
                        borderRadius="lg"
                    />
                )
            }
            <Input
                value={nameValue}
                placeholder='Enter your name'
                onChange={(e) => setNameValue(e.target.value)}
                mb={4}
                size="lg"
                borderRadius="lg"
            />
            <Box display="flex" alignItems="center">
                <Input 
                    type="checkbox" 
                    isChecked={onlyAudio} 
                    onChange={handleAudioChange}
                    mr={2} // Adds some margin to the right
                />
                <label>Connect with audio only</label>
            </Box>
            </Box>
            
        </Box>
    );
}

export default JoinRoomInputs;
