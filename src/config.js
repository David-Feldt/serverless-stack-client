export default {
  MAX_ATTACHMENT_SIZE: 5000000,
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
      IDENTITY_POOL_ID: "us-east-2:7089fcb5-05d7-40a9-8f63-559e8c08da8b"
    }
  };