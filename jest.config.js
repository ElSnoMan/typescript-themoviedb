module.exports = {
    testEnvironment: "node",
    preset: "ts-jest",
    "testMatch": [
        "**/tests/**/*.test.(ts|tsx)",
        "**/?(*.)+(spec|test).(ts|tsx)"
      ],
    //   "transform": {
    //     "^.+\\.(ts|tsx)$": "ts-jest"
    //   }
};
