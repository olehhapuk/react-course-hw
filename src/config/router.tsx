import { createBrowserRouter } from 'react-router';

import HomeView from '../views/home.view';
import RootLayout from '@/layouts/root.layout';
import NotFoundView from '@/views/not-found.view';
import { RoutePaths } from '@/constants/routes';
import PostsView from '@/views/posts.view';
import PostDetailsView from '@/views/post-details.view';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePaths.HOME,
        element: <HomeView />,
      },
      {
        path: RoutePaths.POSTS,
        element: <PostsView />,
      },
      {
        path: RoutePaths.POST_DETAILS,
        element: <PostDetailsView />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundView />,
  },
]);
