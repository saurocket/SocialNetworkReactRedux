import React, {Suspense} from 'react';

const renderLoader = () => <p>Loading</p>;

export const withSuspense= (Component:React.FC) => {
    return (props:any) => {
        return <Suspense  fallback={renderLoader()}>
                <Component {...props} />
            </Suspense>
    }
}