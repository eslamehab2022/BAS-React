// const development_domain_server = "http://bsa2011.com:5000/api/v1";
const production_domain_server = "http://bsa2011.com:5000/api/v1";
// export const staticImageSrc = "http://bsa2011.com:5000/";


const development_domain_server = "http://192.168.1.128:5000/api/v1";
export const staticImageSrc = "http://192.168.1.128:5000";
const development = {
  apiGateway: {
    URL: development_domain_server,
  },
};

const production = {
  apiGateway: {
    URL: production_domain_server,
  },
};

const config =
  process.env.NODE_ENV === "development" ? development : production;
// console.log("API URL", config.apiGateway.URL);
export default config;
