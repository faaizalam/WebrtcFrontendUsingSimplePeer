import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

const LocalScreenSharing = ({ stream }) => {
  let videoRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (stream) {
      let video = videoRef.current
      video.srcObject = stream
      video.onloadedmetadata = () => {
        video.play()
      }
    }
  }, [stream])

  const handleMouseDown = (e) => {
    console.log(e,"eeee")
    setDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      })
    }
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging])

  return (
    <Box
      className='localScreenShare'
    //   draggable
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: 'move',
      }}
    >
      <video muted autoPlay ref={videoRef}></video>
    </Box>
  )
}

export default LocalScreenSharing
