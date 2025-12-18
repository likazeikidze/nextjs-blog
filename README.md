# Lika's Next.js Blog

Next.js blog with dynamic Markdown content and MongoDB integration for interactive features.

## Features

- Dynamic blog posts from Markdown files
- Featured posts section on the homepage
- Contact form with backend storage in MongoDB
- Responsive design with CSS Modules
- Incremental Static Regeneration (ISR) for dynamic posts

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies**

```bash
npm install

# or

yarn
```

3. **Run the development server**

```bash
npm run dev

# or

yarn dev
```

4. **Open the app in your browser**

Go to [http://localhost:3000](http://localhost:3000) to see the project running.

5. **Set up environment variables for the contact form**

Create a `.env.local` file in the project root and add your MongoDB connection string:

```env
MONGODB_URI=your-mongodb-connection-string-here
```

## Notes

> Note: The contact form requires MongoDB credentials; without them, it will not work and may show an error.
