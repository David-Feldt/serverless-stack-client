export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51I6U1yIDJpMLtBsSd6ZsW1SeWNzz6R7y6QQG8kthYw8Qig2CV97BvUiSqlymdVGn8v0z3koYzaFe7UgNN1ctyyrM00gmJ2ayJE",
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-lean"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://zpge2y31ig.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_lusI6erTJ",
      APP_CLIENT_ID: "6o49u2s8dmekv7u9v5v2pall50",
      IDENTITY_POOL_ID: "us-east-2:d64b7151-efce-4c6d-b0d7-73a2ca06613a"
    }
  };