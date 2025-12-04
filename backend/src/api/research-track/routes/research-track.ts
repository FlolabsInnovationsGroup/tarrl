export default {
  routes: [
    {
      method: 'GET',
      path: '/research-tracks',
      handler: 'api::research-track.research-track.find',
    },
    {
      method: 'GET',
      path: '/research-tracks/:documentId',
      handler: 'api::research-track.research-track.findOne',
    },
    {
      method: 'POST',
      path: '/research-tracks',
      handler: 'api::research-track.research-track.create',
    },
    {
      method: 'PUT',
      path: '/research-tracks/:documentId',
      handler: 'api::research-track.research-track.update',
    },
    {
      method: 'DELETE',
      path: '/research-tracks/:documentId',
      handler: 'api::research-track.research-track.delete',
    },
  ],
};
