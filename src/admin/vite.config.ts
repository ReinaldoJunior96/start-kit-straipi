import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    logLevel: 'error', // ou 'warn'
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
