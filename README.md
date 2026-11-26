# haly.dev – Personal Portfolio

A bilingual (Vietnamese / English) personal portfolio website presenting my background, technical skills, capstone projects and learning journey as an aspiring Backend Developer.

🔗 **Live demo:** https://haly-portfolio.vercel.app/

## Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **UI Utilities:** React Icons
- **Deployment:** Vercel

## Key Features

- **Bilingual Content:** Switch between Vietnamese and English instantly, with the preferred language remembered between visits.
- **Light & Dark Theme:** Theme toggle with a custom pink color palette, also persisted across sessions.
- **Featured & Other Projects:** Detailed case studies for the two main capstone projects, plus compact cards for smaller projects, each with repository and live demo links.
- **Experience & Education Timeline:** Clear timeline of work history, training and education.
- **Responsive Design:** Mobile-friendly navigation, smooth scrolling between sections and a custom 404 page.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/haly1911/haly-portfolio.git
cd haly-portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:5173 to view it in your browser.

## Project Structure

```
src/
├── components/   # Page sections and reusable UI components
├── context/      # Theme and language providers
├── data/         # Skills and project metadata
├── layouts/      # Page layout
└── locales/      # Vietnamese and English content
```