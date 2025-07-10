# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d63c259e-61df-44b6-b054-90d78c479294

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d63c259e-61df-44b6-b054-90d78c479294) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Using Lovable
Simply open [Lovable](https://lovable.dev/projects/d63c259e-61df-44b6-b054-90d78c479294) and click on Share -> Publish.

### Option 2: Manual Deployment with Express Server
This project includes an Express server (`server.js`) to handle client-side routing properly. To deploy manually:

1. Build the project:
   ```sh
   npm run build
   ```

2. Start the production server:
   ```sh
   npm start
   ```

The server will serve the built files from the `dist` directory and handle all routes by serving `index.html`, allowing React Router to handle client-side routing properly.

**Note**: The server is configured to handle the "not found" issue when users directly access URLs like `/platform/insights` or refresh the page.

### Option 3: Static Hosting with Redirect Rules
For static hosting platforms (Vercel, Netlify, etc.), the project includes configuration files:
- `public/_redirects` - For Netlify and similar platforms
- `vercel.json` - For Vercel deployments
- `netlify.toml` - For Netlify deployments

These files tell the hosting platform to serve `index.html` for all routes, allowing client-side routing to work properly.

### For Render Deployment
If you're using Render, you have two options:

#### Option A: Web Service (Recommended)
1. Use the `render.yaml` configuration file
2. Set the build command to: `npm install && npm run build`
3. Set the start command to: `npm start`
4. Ensure the service type is set to "Web Service" (not "Static Site")

#### Option B: Static Site (Current Setup)
If you need to keep it as a "Static Site":
1. The project includes a `public/404.html` file that handles client-side routing
2. The `RedirectHandler` component manages redirects for direct URL access
3. Build command: `npm run build`
4. Publish directory: `dist`

The static site approach uses a custom 404.html page that loads the React app and handles routing through sessionStorage.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
