# MERN CMS — Frontend


This frontend is built with React + Vite + Tailwind to showcase a modern content management system. It connects to a MERN backend that exposes REST endpoints under `/api`:


- `POST /api/auth/login` — login
- `POST /api/auth/register` — register
- `GET /api/auth/me` — current user
- `GET /api/posts` — list posts
- `GET /api/posts/:id` — get post
- `POST /api/posts` — create post
- `PUT /api/posts/:id` — update post
- `DELETE /api/posts/:id` — delete post


## Run locally
1. `npm install`
2. Create `.env` with `VITE_API_BASE=http://localhost:5000/api`
3. `npm run dev`


## Deploy
- Vercel: connect your repo, set `VITE_API_BASE` in environment variables to your backend URL.
- Netlify: same; build command `npm run build`, publish `dist/`.


// =======================
// Extra notes (tips to impress recruiters)
// =======================
1. Replace textarea editor with a rich editor (TipTap, Quill or CKEditor) for a more polished experience.
2. Add image upload: integrate `/api/uploads` and allow drag-and-drop images for posts.
3. Add markdown support with preview and syntax highlighting.
4. Add unit tests for key components and show them in repo. Recruiters like tested code.
5. Make a short demo video (20–40s) showing how to create/edit posts and deploy link.


// =======================
// End of file
// =======================