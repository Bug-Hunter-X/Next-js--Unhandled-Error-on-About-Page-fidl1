```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function About() {
  throw new Error('Something went wrong');
}

function MyErrorBoundary({ error }) {
  // You can customize the error display here
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <ErrorBoundary
      FallbackComponent={MyErrorBoundary}
    >
      <About />
    </ErrorBoundary>
  );
}
```