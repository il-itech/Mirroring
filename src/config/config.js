import FORMS from './forms';

const config = {
  DEFAULT_LANGUAGE: 'en',
  HTTP_API_URL: process.env.NEXT_PUBLIC_HTTP_API_URL,
  WEBSOCKET_API_URL: process.env.NEXT_PUBLIC_WEBSOCKET_API_URL,
  FORMS,
};

export default config;
