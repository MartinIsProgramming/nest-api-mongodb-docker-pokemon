export const envConfiguration = () => ({
  environment: process.env.NODE_ENV || 'env',
  mongodb: process.env.MONGO_URL,
  port: process.env.PORT || 3000,
});
