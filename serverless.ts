import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "light-pay",
  frameworkVersion: "*",
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "eu-west-1",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    lambdaHashingVersion: "20201221",
  },

  plugins: ["serverless-esbuild", "serverless-offline"],

  // custom: {
  //   esbuild: {
  //     minify: false,
  //   }
  // },

  functions: {
    register_tenant: {
      handler: "src/tenants/registration-manager/index.handler",
      events: [
        {
          httpApi: {
            method: "post",
            path: "/tenants",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
