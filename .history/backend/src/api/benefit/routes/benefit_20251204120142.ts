export default {
  routes: [
    {
      method: 'GET',
      path: '/benefits',
      handler: 'api::benefit.benefit.find',
    },
    {
      method: 'GET',
      path: '/benefits/:documentId',
      handler: 'api::benefit.benefit.findOne',
    },
    {
      method: 'POST',
      path: '/benefits',
      handler: 'api::benefit.benefit.create',
    },
    {
      method: 'PUT',
      path: '/benefits/:documentId',
      handler: 'api::benefit.benefit.update',
    },
    {
      method: 'DELETE',
      path: '/benefits/:documentId',
      handler: 'api::benefit.benefit.delete',
    },
  ],
};
