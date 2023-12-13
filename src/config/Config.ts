export const CONFIG = {
    AWS_ACCESS_KEY : ()=> process.env.ACCESS_KEY,
    AWS_SECRET_ACCESS_ID : ()=> process.env.SECRET_ACCESS_ID,
    AWS_REGION: ()=> process.env.REGION,
    BUCKET_NAME :()=> process.env.BUCKET_NAME,
    BUCKET_OBJECT_KEY : ()=> process.env.BUCKET_OBJECT_KEY
};
  