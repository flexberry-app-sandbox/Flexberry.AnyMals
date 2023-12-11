import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-any-mals-animal', 'Unit | Model | i-i-s-any-mals-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-any-mals-animal',
    'model:i-i-s-any-mals-burrow',
    'model:i-i-s-any-mals-country',
    'model:i-i-s-any-mals-forest',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
