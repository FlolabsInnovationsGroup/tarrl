export default {
  routes: [
    {
      method: 'GET',
      path: '/research-tracks',
      handler: 'research-track.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/research-tracks/:id',
      handler: 'research-track.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
