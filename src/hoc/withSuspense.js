import React, { lazy, Suspense } from 'react';

const renderLoader = () => <p>Loading</p>;

export const withSuspense= (Component) => {
    return (props) => {
        return <Suspense  fallback={renderLoader()}>
                <Component {...props} />
            </Suspense>
    }
}