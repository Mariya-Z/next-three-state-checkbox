module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.output.publicPath =
    configType === 'PRODUCTION' ? '/next-three-state-checkbox/' : '/';
  return defaultConfig;
};
