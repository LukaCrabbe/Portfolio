import React, { lazy, Suspense } from 'react';

const LazyPicture = lazy(() => import('./Picture'));

const Picture = props => (
  <Suspense fallback={null}>
    <LazyPicture {...props} />
  </Suspense>
);

export default Picture;
