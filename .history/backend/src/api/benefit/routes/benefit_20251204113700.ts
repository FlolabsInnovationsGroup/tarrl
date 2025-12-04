export default {
  routes: [
    {
      method: 'GET',
      path: '/benefits',
      handler: 'benefit.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/benefits/:id',
      handler: 'benefit.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
