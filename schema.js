import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import job from './job';
import technology from './technology';
import recipe from './recipe';
import snippet from './snippet';

export default createSchema({
  name: 'Portfolio',
  types: schemaTypes.concat([technology, job, snippet, recipe])
});
