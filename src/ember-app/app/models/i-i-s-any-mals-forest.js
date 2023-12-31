import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ForestMixin
} from '../mixins/regenerated/models/i-i-s-any-mals-forest';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ForestMixin, Validations, {
});

defineProjections(Model);

export default Model;
