import { useState } from "react";
import { motion, useAnimationControls } from 'framer-motion';

export default function useItemAnimations(){
  const animationOverlay = useAnimationControls();
  const imgBlurAnimation = useAnimationControls();
  const textAnimation = useAnimationControls();

  
  return {
    animationOverlay,
    imgBlurAnimation,
    textAnimation,
  }
}