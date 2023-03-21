import { useState, useEffect, useRef } from 'react';

export default function useBumpAnimation(dependency, duration) {
  const [isBump, setIsBump] = useState(false);
  const dependencyRef = useRef(dependency);

  useEffect(() => {
    if (dependencyRef.current !== dependency) {
      setIsBump(true);
      const timeoutId = setTimeout(() => {
        setIsBump(false);
      }, duration);
      dependencyRef.current = dependency;
      return () => clearTimeout(timeoutId);
    }
  }, [dependency, duration]);

  return isBump;
}
