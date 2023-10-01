    import React, { Suspense, useEffect, useRef, useState } from 'react';

    const LazyMyComponent = React.lazy(() => import('./myComp'));

    const Test = () => {
    const lazyComponentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust the threshold as needed
        };

        const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            // Set the flag to indicate visibility
            setIsVisible(true);
            observer.unobserve(entry.target);
            }
        });
        };

        const observer = new IntersectionObserver(callback, options);

        if (lazyComponentRef.current) {
        // If the lazy component is already loaded (e.g., on subsequent renders), disconnect the observer
        observer.disconnect();
        } else {
        // Start observing the element
        observer.observe(lazyComponentRef.current);
        }

        return () => {
        // Clean up the observer when the component unmounts
        observer.disconnect();
        };
    }, []);

    return (
        <div>
        <h1>My App</h1>
        <Suspense fallback={<div>Loading...</div>}>
            {isVisible ? <LazyMyComponent ref={lazyComponentRef} /> : null}
        </Suspense>
        </div>
    );
    };

    export default Test;