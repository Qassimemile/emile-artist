"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  images: string[]
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        // Preload different sizes for responsive images
        const sizes = [
          src.replace('/upload/', '/upload/c_scale,w_800,q_auto,f_auto/'),
          src.replace('/upload/', '/upload/c_scale,w_1200,q_auto,f_auto/'),
          src.replace('/upload/', '/upload/c_scale,w_1920,q_auto,f_auto/')
        ]
        
        sizes.forEach((sizeSrc) => {
          const img = new Image()
          img.src = sizeSrc
        })
      })
    }

    // Preload images after a short delay to not block initial render
    const timer = setTimeout(preloadImages, 1000)
    return () => clearTimeout(timer)
  }, [images])

  return null
}

