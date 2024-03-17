const titleAppendText = ' - Product';

const routes = [
  {
    path: '/products',
    name: 'products',
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
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/product/IndividualProduct.vue'),
    props: true,
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
  }
];

export default routes;