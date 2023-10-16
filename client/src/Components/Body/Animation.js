import { useSpring } from "react-spring";

export const OpacityAnim = (startOpacity, endOpacity) => {
  const props = useSpring({
    from: {
      opacity: startOpacity, // Initial position outside the left end of the screen
    },
    to: {
      opacity: endOpacity, // Final position at 0% (default position)
    },
   
  });
  return props;
};

export const TranslateXAnim = (translateFrom,translateTo) => {
  const props = useSpring({
    from: {
      transform: translateFrom, // Initial position outside the left end of the screen
    },
    to: {
      transform: translateTo, // Final position at 0% (default position)
    },
    delay: 800,
  });
  return props;
};

