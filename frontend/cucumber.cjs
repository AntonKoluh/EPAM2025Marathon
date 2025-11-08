// cucumber.cjs
module.exports = {
  default: {
    // Use ts-node ESM loader and import your step files
    import: [
      'ts-node/esm',
      'tests/steps/world.ts',
      'tests/steps/hooks.ts',
      'tests/steps/**/*.ts'
    ],
    format: ['progress', 'json:reports/cucumber.json'],
    paths: ['tests/features/**/*.feature'],
    parallel: 2,
    publishQuiet: true,
    worldParameters: {
      baseUrl: process.env.BASE_URL || 'http://localhost:5173'
    }
  }
};
