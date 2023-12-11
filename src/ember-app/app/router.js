import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-any-mals-animal-l');
  this.route('i-i-s-any-mals-animal-e',
  { path: 'i-i-s-any-mals-animal-e/:id' });
  this.route('i-i-s-any-mals-animal-e.new',
  { path: 'i-i-s-any-mals-animal-e/new' });
  this.route('i-i-s-any-mals-country-l');
  this.route('i-i-s-any-mals-country-e',
  { path: 'i-i-s-any-mals-country-e/:id' });
  this.route('i-i-s-any-mals-country-e.new',
  { path: 'i-i-s-any-mals-country-e/new' });
  this.route('i-i-s-any-mals-forest-l');
  this.route('i-i-s-any-mals-forest-e',
  { path: 'i-i-s-any-mals-forest-e/:id' });
  this.route('i-i-s-any-mals-forest-e.new',
  { path: 'i-i-s-any-mals-forest-e/new' });
});

export default Router;
