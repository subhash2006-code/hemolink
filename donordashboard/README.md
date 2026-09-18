# HEMOLINK Donor Registration

A beginner-friendly React frontend built with **React + Vite + React Router**.

## Folder structure
- `src/pages` – complete screens
- `src/components/common` – shared components
- `src/components/dashboard` – dashboard components
- `src/components/registration` – registration components
- `src/assets` – images
- `src/data` – sample data
- `src/utils` – helper functions
- `src/layouts` – shared page layouts

## Run
```bash
npm install
npm run dev
```


## Troubleshooting

If you previously saw a `Can't resolve 'tw-animate-css'` error, this project version removes that unnecessary external import, so a normal `npm install` followed by `npm run dev` is sufficient.

## Request Accept / Reject (Frontend Demo)

The **Requests** page now demonstrates the donor-side request flow using frontend state only:

1. A receiver's blood request appears in the Requests page.
2. The donor can open the request and choose **Accept Request** or **Reject**.
3. Before acceptance, receiver contact information is hidden.
4. After acceptance, the receiver's name, phone number, and email are displayed.
5. After rejection, the contact information remains hidden.

This is a frontend-only demonstration. Refreshing the browser resets the accept/reject state because no backend or database is used.


## Registration flow update
- Sidebar uses the Hemolink logo at the top and no longer shows the bottom illustration or donor-count message.
- The registration flow advances with Next/Back without requiring fields during the frontend phase.
- Dashboard routes remain protected and become accessible only after Complete Registration is clicked.
