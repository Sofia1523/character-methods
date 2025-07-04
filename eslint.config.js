export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
          window: "readonly",
          document: "readonly",
          console: "readonly",
          process: "readonly",
          module: "readonly",
          require: "readonly",
          describe: "readonly",
          test: "readonly",
          expect: "readonly",
        },
      },
      rules: {
        // Твои правила, например:
        "no-unused-vars": "warn",
        "no-undef": "error",
      },
    },
  ];
  