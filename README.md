# Activity Timeline

A Vite + React single-page UI showcasing a vertical, continuous timeline for recent system activity. Tailwind CSS handles the styling, with subtle gradients to keep the layout crisp and modern.

## Setup

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview the production build: `npm run preview`

## Notes

- The thin vertical line is the backbone of the layout. Removing the connector span will break continuity between items.
- Dot alignment depends on the `-ml-1.5` class. Removing it will detach the dot from the line.
- Tailwind scans `index.html` and all files in `src/` for class names.
