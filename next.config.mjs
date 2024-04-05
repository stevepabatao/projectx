/** @type {import('next').NextConfig} */
//import webpack from 'webpack';

const nextConfig = {

    images: {
      remotePatterns:[
        {
          protocol: "https",
          hostname: "images.pexels.com"
        }
      ]
    },
     
    webpack: (config) => {
      config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
       }

       return config
    },
    
};

export default nextConfig;
