export const job = {
  title: 'Job',
  name: 'job',
  type: 'document',
  fields: [
    {
      title: 'Company',
      name: 'company',
      type: 'String'
    },
    {
      title: 'From',
      name: 'from',
      type: 'Date'
    },
    {
      title: 'To',
      name: 'to',
      type: 'Date'
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }]
        }
      ]
    }
  ]
};
