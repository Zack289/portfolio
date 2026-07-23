# portfolio

My personal site. React + TypeScript + Tailwind + Framer Motion, no backend (yet).

## running it

```bash
npm install
npm run dev
```

opens on localhost:5173 usually. `npm run build` for a production build, `npm run preview` to check it locally after.

## where stuff lives

I didn't want to touch components every time I add a project or fix a typo in my bio, so basically everything editable is in `src/data/`:

- `profile.ts` - name, intro text, email, resume link
- `education.ts` - the timeline on the education section
- `skills.ts` - tech stack cards. the `icon` field is just the react-icons/si export name (e.g. `SiReact`), lookup happens in `SkillCard.tsx`
- `projects.ts` - all the project cards + what shows up in the modal
- `certificates.ts`
- `socials.ts` - github/linkedin/instagram/twitter links, used in footer + contact
- `navigation.ts` - navbar items

Adding a new project = adding an object to the array in `projects.ts`. That's it, nothing else to touch. The homepage shows the first 4, "View all projects" takes you to `/projects` where everything's filterable and searchable.

## assets you need to swap in

None of these are committed since they're placeholders:

- `public/photo-placeholder.jpg` - hero photo (shows on the right side of the hero, not cropped to a circle)
- `public/resume.pdf`
- `public/og-image.png` - 1200x630, for link previews
- `public/projects/<name>/cover.jpg` per project

If one's missing it just hides itself instead of showing the ugly broken image icon (see the `onError` handlers scattered around).

## folder layout

```
src/
  components/
    ui/        buttons, cards, modal, badges — the small reusable bits
    layout/    navbar, footer, page shell, route transition
    sections/  hero, about, education, skills, projects, certificates, contact
  pages/       Home, AllProjects (the /projects route), NotFound
  hooks/       useTheme, useActiveSection, useScrollProgress, useClickOutside, etc
  context/     ThemeContext
  data/        all the editable content (see above)
  types/       shared types
  animations/  framer-motion variants I reuse everywhere so they stay consistent
  utils/       cn() helper, scroll helpers, gmail compose link builder
```

## theme

Dark/light toggle in the navbar (and footer). Respects your OS preference on first load, then remembers whatever you picked in localStorage.

## behavior notes

- section links (About, Projects, etc) smooth-scroll within the page. Route changes (like going to `/projects`) jump to the top instead — smooth scrolling is for anchors, not full navigations
- the email card opens Gmail's compose window directly (addressed to me), with a separate "copy email" button underneath in case someone's not on Gmail
- the mobile hamburger menu closes when you tap the toggle again, tap a link, or tap anywhere outside the header
- "View all projects" navigates to its own page instead of expanding the grid in place, so it doesn't get to search/filter without cluttering the homepage

## notes to future me

- swap the placeholder github/demo links in `projects.ts` before sending this to anyone
- probably want real project screenshots instead of the cover-image-only setup right now
- haven't hooked up a real contact form since there's no backend — Gmail link + copy button for now, might add a form service (Formspree or similar) later
- the custom cursor only kicks in on desktop with a fine pointer, mobile just gets the normal cursor
