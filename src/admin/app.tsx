import type { StrapiApp } from '@strapi/strapi/admin';
import logo from "./images/logo.png";

export default {
  config: {
    auth: { logo },
    head: { favicon: logo },
    menu: { logo },
    tutorials: false,
    notifications: { releases: false },

    locales: ['pt-BR'],
    
    locale: 'pt-BR',

    translations: {
      'pt-BR': {
        'global.localeToggle.label': 'Idioma da interface',
      },
      en: {
        'global.localeToggle.label': 'Interface language',
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
