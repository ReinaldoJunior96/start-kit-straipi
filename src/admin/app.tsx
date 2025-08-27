import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    tutorials: false, 
    notifications: { releases: false }, 
    locales: ['pt-BR'],
    locale: 'pt-BR',
    translations:{
     "HomePage.header.subtitle": "Bem vindo ao painel",
     "tours.overview.title": "trocou de titulo",
      "tours.overview.subtitle": "testandoooo",
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
