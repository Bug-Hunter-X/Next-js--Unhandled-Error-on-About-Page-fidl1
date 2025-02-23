# Next.js Unhandled Error on About Page

This repository demonstrates a common error in Next.js applications where an unhandled error on a page prevents the entire application from rendering correctly. The error is thrown within the `About` page component. This example shows how to implement error boundaries in Next.js to handle such situations gracefully.

## Problem

The `About` page throws an error using `throw new Error('Something went wrong');`.  This causes the entire application to crash and display an error message rather than just affecting the `About` page.

## Solution

The solution involves using Next.js's built-in `ErrorBoundary` component.  This component wraps the problematic component and catches any errors it throws, preventing the entire app from crashing.  It allows you to display a custom fallback UI when an error occurs.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`. You will see the error.

## How to fix

Refer to the `aboutSolution.js` file for the implementation of the error boundary.