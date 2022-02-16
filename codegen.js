const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

module.exports = {
  overwrite: true,
  schema: {
    [process.env.CMS_URL]: {},
  },
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
  },
  hooks: {
    afterAllFileWrite: "eslint --fix",
  },
};
