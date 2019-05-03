export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'number'
    },
    {
      name: 'cooking_time',
      title: 'Cooking time',
      type: 'number'
    },
    {
      name: 'content',
      Title: 'Content',
      type: 'array',
      of: [{ type: 'richText' }, { type: 'snippet' }]
    }
  ]
};
