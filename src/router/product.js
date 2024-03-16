const titleAppendText = ' - Product';

const routes = [
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/product/ProductView.vue'),
    meta: {
      title: 'LTShow24'.concat(titleAppendText),
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
      requiresAuth: false,
    },
  },
];

export default routes;