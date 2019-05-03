export default {
  title: 'Technology',
  name: 'technology',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'String'
    },
    {
      title: 'Url',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image'
    },
    {
      title: 'How much do I like it',
      description:
        'Rate from 0 to 10 how much do you like this piece of software.',
      name: 'rating',
      type: 'number'
    }
  ]
};
