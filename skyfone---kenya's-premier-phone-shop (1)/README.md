# Skyfone - Kenya's Premier Phone Shop

A high-converting website for Skyfone, built with React, Vite, and Tailwind CSS.

## Deployment to Vercel

This project is ready to be deployed to Vercel.

### Steps:

1.  **Push to GitHub:** Push your code to a GitHub repository.
2.  **Import to Vercel:** Go to [Vercel](https://vercel.com) and import your repository.
3.  **Configure Environment Variables:** In the Vercel dashboard, add the following environment variables:
    *   `GEMINI_API_KEY`: Your Google Gemini API key (if you plan to use AI features).
4.  **Deploy:** Click "Deploy". Vercel will automatically detect the Vite project and build it.

### Features:

*   **SPA Routing:** Configured via `vercel.json` to handle client-side routing.
*   **Optimized Build:** Uses Vite for fast builds and optimized assets.
*   **Responsive Design:** Built with Tailwind CSS for all screen sizes.
*   **Animations:** Smooth transitions using Framer Motion.

## Development

To run the project locally:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```
