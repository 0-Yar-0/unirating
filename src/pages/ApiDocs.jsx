import React, { Suspense, useEffect } from 'react';
const SwaggerUI = React.lazy(() => import('swagger-ui-react'));

export default function ApiDocs() {
    useEffect(() => {
        // dynamically load CSS with the component to avoid adding it to the main bundle
        import('swagger-ui-react/swagger-ui.css');
    }, []);

    return (
        <div className="page docs-page">
            <h1>API Documentation</h1>
            <Suspense fallback={<div>Загрузка документации...</div>}>
                <SwaggerUI url="/openapi.yaml" deepLinking={true} />
            </Suspense>
        </div>
    );
}
