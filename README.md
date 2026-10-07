# Nova SLT recruitment workspace

A complete Next.js App Router, TypeScript and Tailwind CSS frontend prototype inspired by the four supplied design references.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell with restricted script execution, use `npm.cmd`.

```sh
npm run typecheck
npm run build
npm start
```

## Explore

- `/`: recruitment dashboard with live KPIs and interview summaries
- `/candidates`: searchable, filterable draggable recruitment pipeline and candidate details
- `/interviews`: monthly calendar and list with date, position, interviewer and status filters
- `/availability`: weekly hours, duration, buffer and live slot preview
- `/positions`: job cards, create and close/reopen positions
- `/settings`: profile, language, appearance, timezone and notification preferences
- `/book/c2`: private candidate invitation and complete booking flow

Theme, language, candidates, positions and scheduling preferences persist in browser localStorage. Candidate cards expose a private booking link to copy and share. Booking, rescheduling and cancellation update the recruiter workspace; reserved slots are removed and cancelled slots reopen. Calendar downloads use the configured timezone.

The demo calendar starts on 7 October 2026 to match the seeded interview data. Recruitment data and interview reminders are simulated. This is a frontend prototype, with no authentication, email service or LinkedIn integration; localStorage does not provide server-side concurrency guarantees.

Use the same browser profile to see bookings reflected in the workspace. Reset the prototype by removing the `nova-state`, `nova-lang` and `nova-theme` localStorage keys.
