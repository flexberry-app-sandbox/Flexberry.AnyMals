import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.any-mals.caption'),
          title: i18n.t('forms.application.sitemap.any-mals.title'),
          children: [{
            link: 'i-i-s-any-mals-animal-l',
            caption: i18n.t('forms.application.sitemap.any-mals.i-i-s-any-mals-animal-l.caption'),
            title: i18n.t('forms.application.sitemap.any-mals.i-i-s-any-mals-animal-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-any-mals-forest-l',
            caption: i18n.t('forms.application.sitemap.any-mals.i-i-s-any-mals-forest-l.caption'),
            title: i18n.t('forms.application.sitemap.any-mals.i-i-s-any-mals-forest-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-any-mals-country-l',
            caption: i18n.t('forms.application.sitemap.any-mals.i-i-s-any-mals-country-l.caption'),
            title: i18n.t('forms.application.sitemap.any-mals.i-i-s-any-mals-country-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})