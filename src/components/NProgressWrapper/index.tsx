import React, { useEffect } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';
import { useWindowSize } from 'hooks/useWindowSize';

const NProgressWrapper: React.FC = () => {
  const { width } = useWindowSize();

  NProgress.configure({
    showSpinner: width > 1024,
    trickleSpeed: 100,
    minimum: 0.3,
  });

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(config => {
      NProgress.start();
      return config;
    });

    const responseInterceptor = axios.interceptors.response.use(
      response => {
        NProgress.done();
        return response;
      },
      error => {
        NProgress.done();
        throw error;
      },
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return null;
};

export default NProgressWrapper;
