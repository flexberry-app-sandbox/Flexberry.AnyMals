import { Serializer as BurrowSerializer } from
  '../mixins/regenerated/serializers/i-i-s-any-mals-burrow';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BurrowSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
