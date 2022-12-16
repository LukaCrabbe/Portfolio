import React, { lazy, Suspense } from 'react';

const LazyInfo = lazy(() => import('./Info'));

const Info = props => (
  <Suspense fallback={null}>
    <LazyInfo {...props} />
  </Suspense>
);

export default Info;
