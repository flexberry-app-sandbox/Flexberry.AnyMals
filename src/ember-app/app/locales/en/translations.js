import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAnyMalsAnimalLForm from './forms/i-i-s-any-mals-animal-l';
import IISAnyMalsCountryLForm from './forms/i-i-s-any-mals-country-l';
import IISAnyMalsForestLForm from './forms/i-i-s-any-mals-forest-l';
import IISAnyMalsAnimalEForm from './forms/i-i-s-any-mals-animal-e';
import IISAnyMalsCountryEForm from './forms/i-i-s-any-mals-country-e';
import IISAnyMalsForestEForm from './forms/i-i-s-any-mals-forest-e';
import IISAnyMalsAnimalModel from './models/i-i-s-any-mals-animal';
import IISAnyMalsBurrowModel from './models/i-i-s-any-mals-burrow';
import IISAnyMalsCountryModel from './models/i-i-s-any-mals-country';
import IISAnyMalsForestModel from './models/i-i-s-any-mals-forest';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-any-mals-animal': IISAnyMalsAnimalModel,
    'i-i-s-any-mals-burrow': IISAnyMalsBurrowModel,
    'i-i-s-any-mals-country': IISAnyMalsCountryModel,
    'i-i-s-any-mals-forest': IISAnyMalsForestModel
  },

  'application-name': 'Any mals',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Any mals',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Any mals',
          title: 'Any mals'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'any-mals': {
          caption: 'AnyMals',
          title: 'AnyMals',
          'i-i-s-any-mals-animal-l': {
            caption: 'Animal',
            title: ''
          },
          'i-i-s-any-mals-forest-l': {
            caption: 'Forest',
            title: ''
          },
          'i-i-s-any-mals-country-l': {
            caption: 'Country',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-any-mals-animal-l': IISAnyMalsAnimalLForm,
    'i-i-s-any-mals-country-l': IISAnyMalsCountryLForm,
    'i-i-s-any-mals-forest-l': IISAnyMalsForestLForm,
    'i-i-s-any-mals-animal-e': IISAnyMalsAnimalEForm,
    'i-i-s-any-mals-country-e': IISAnyMalsCountryEForm,
    'i-i-s-any-mals-forest-e': IISAnyMalsForestEForm
  },

});

export default translations;
