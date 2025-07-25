# Frontend Mentor - Conference ticket generator

![Design preview for the Conference ticket generator coding challenge](./preview.jpg)

# Conference Ticket Generator

## Description

This is a simple **Conference Ticket Generator** built using **HTML**, **CSS**, and **JavaScript**. It allows users to input their personal details, upload an avatar, and generate a conference ticket. The ticket includes the user's details, avatar, and a unique ticket number. It is designed to be responsive, with an intuitive drag-and-drop interface for uploading avatars.

### Features

- **Avatar Upload**: Users can upload an image (JPG or PNG) as their avatar via a drag-and-drop or click-to-upload interface.
- **Form Validation**: Form fields such as full name, email address, and GitHub username are validated before submission.
- **Ticket Generation**: Upon successful form submission, a unique ticket number is generated, and the user is redirected to a "Congratulations" page with their ticket.
- **Data Storage**: User data (name, email, GitHub username, avatar, and ticket number) is stored in `localStorage` to persist the information across pages.
- **Responsive Design**: The application is fully responsive, ensuring it works well on both desktop and mobile devices.

---

## File Structure

```plaintext
/assets
  /images
    logo-full.svg
    logo-mark.svg
    icon-upload.svg
    icon-info.svg
    icon-github.svg
    pattern-lines.svg
    background-mobile.png
    pattern-squiggly-line-top.svg
    pattern-squiggly-line-bottom-mobile-tablet.svg

/style.css
/congrats.css
/script.js
/index.html
/congrats.html
```

### Files Description:

- **`index.html`**: The main HTML page where users fill out their personal details and upload an avatar.
- **`congrats.html`**: A page that displays the user's conference ticket with their information.
- **`style.css`**: Styles for the main page.
- **`congrats.css`**: Styles for the "congratulations" page.
- **`script.js`**: Contains the JavaScript for form validation, avatar upload, and ticket generation.

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/conference-ticket-generator.git
cd conference-ticket-generator
```

### 2. Open `index.html`

Open the `index.html` file in your browser to view the ticket generator.

---

## How to Use

1. **Upload Avatar**:
   - Drag and drop or click to upload a photo for your avatar (only JPG or PNG allowed, and max size is 500KB).
2. **Fill in the Form**:
   - Enter your **Full Name**, **Email Address**, and **GitHub Username**.
   - Ensure all required fields are filled.
3. **Generate Ticket**:
   - Once you complete the form, click the **"Generate My Ticket"** button.
   - If all fields are valid, a unique ticket number will be generated, and you will be redirected to the **congrats.html** page with your ticket.

---

## LocalStorage

The application uses **localStorage** to store the following:

- **Name**
- **Email**
- **GitHub Username**
- **Avatar Image** (as a Base64 string)
- **Ticket Number**

This ensures that your data persists across different pages and can be displayed on the "congratulations" page.

---

## Responsive Design

The page adjusts its layout based on the screen size. It has been optimized for both desktop and mobile devices:

- For **desktop**, the layout expands to provide more space.
- For **mobile devices**, the layout adjusts to ensure readability and usability.

---

## Customization

You can customize the following elements:

1. **Logo**: Replace `assets/images/logo-full.svg` with your own logo.
2. **Ticket Information**: Modify the ticket details in `congrats.html` to match your event information (date, location, etc.).
3. **Styling**: Customize the colors, fonts, and other styles in `style.css` and `congrats.css` to match your branding.

---

## Future Improvements

- **Backend Integration**: Currently, data is stored in `localStorage`. Implementing a backend (e.g., with Node.js, Express, and MongoDB) could store user data permanently.
- **Email Functionality**: Automatically email users their ticket upon submission.
- **Advanced Validation**: Add more complex validation for email format and GitHub username.

---

## License

MIT License
