import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Any mals',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Any mals',
          title: 'Any mals'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
