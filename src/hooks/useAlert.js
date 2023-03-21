import { useEffect } from 'react';

const useAlert = (data, state) => {
  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      alert(data.message);
    }
  }, [data, state]);
};

export default useAlert;
