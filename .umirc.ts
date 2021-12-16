import { defineConfig } from 'umi';
import { routes } from './src/routes/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  ignoreMomentLocale: true,
});
