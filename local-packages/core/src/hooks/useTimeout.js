// @ts-ignore
import React, { useState, useEffect, useRef } from 'react'

function useTimeout(callback, delay) {
  const savedCallback = useRef()

  useEffect(
    () => {
      savedCallback.current = callback
    },
    [callback]
  )

  useEffect(
    () => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setTimeout(tick, delay)
        return () => clearTimeout(id)
      }
    },
    [delay]
  )
}

export default useTimeout