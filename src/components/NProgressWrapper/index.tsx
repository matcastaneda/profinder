import React, { useEffect } from 'react';
import axios from 'axios';
import NProgress from 'nprogress';

const NProgressWrapper: React.FC = () => {
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
