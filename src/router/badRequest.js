const titleAppendText = '';

const routes = [
    { 
      path: '/:pathMatch(.*)*',
      name: 'badRequest',
      component: () => import('../views/utility/BadRequest.vue'),
      meta: {
        title: 'Sorry... This Page Doesn\'t Exist'.concat(titleAppendText),
        metaTags: [
          {
            name: 'name',
            content: 'viewport',
          },
          {
            name: 'content',
            content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
          },
        ],
        bad_request: true,
        requiresAuth: false,
      },
    },
];
  
export default routes;