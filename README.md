# Riri Beauty Center – Beauty Center Template

A modern web interface for a beauty center built with Next.js, TypeScript, and Tailwind CSS. Includes an admin dashboard, appointment booking, file uploads, and MongoDB integration via Prisma.

---

## 🖼️ Overview

This project offers a complete website for a beauty center, including:

- A homepage introducing services and promotions.
- An appointment booking page linked to available services.
- An admin dashboard to manage services and appointments.
- Image and PDF upload functionality via UploadThing.
- Fully responsive design with RTL (Arabic) support.

---

## 🏗️ Project Structure

```
.
├── app/             # Next.js pages (frontend and dashboard)
├── components/      # Reusable UI components
├── database/        # Prisma database queries
├── generated/       # Prisma Client generated files
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── prisma/          # Database schema (schema.prisma)
├── public/          # Static files (images, icons, etc.)
├── sections/        # Homepage sections (Hero, About, Services, Contact, etc.)
├── styles/          # CSS files
├── package.json     # Project metadata and scripts
└── README.md        # This file
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Configure the Database

Ensure the `.env` file contains the `DATABASE_URL` variable pointing to your MongoDB database.

### 3. Generate Prisma Client

```sh
npx prisma generate
```

### 4. Run Development Server

```sh
npm run dev
```

### 5. Build for Production

```sh
npm run build
```

### 6. Start Production Server

```sh
npm start
```

### 7. Run Linter

```sh
npm run lint
```

---

## ⚙️ Technologies Used

- **Next.js** – React framework for modern UIs
- **TypeScript** – Type-safe, maintainable code
- **Tailwind CSS** – Rapid, responsive styling
- **Prisma** – Modern ORM for MongoDB
- **UploadThing** – Easy file and image uploads
- **React Icons** – Ready-to-use icons
- **Sonner** – Interactive notifications
- **Radix UI** – Advanced UI components

---

## 🗃️ Database

Uses MongoDB with Prisma.  
Main models include:

- `Service`: Represents a beauty service (name, description, image, price, etc.)
- `Appointment`: Represents a booking (client name, phone, date, service, etc.)

See `prisma/schema.prisma` for full model definitions.

---

## 📦 npm Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm install`   | Install all dependencies           |
| `npm run dev`   | Start development server           |
| `npm run build` | Build for production               |
| `npm start`     | Start production server            |
| `npm run lint`  | Run linter and code quality checks |

---

## 📝 Notes

- Fully RTL-compatible (Arabic support)
- Customizable design and colors via Tailwind and `globals.css`
- Dashboard available at `/dashboard`
- File/image uploads handled by UploadThing (see `components/custom-dropzone.tsx`)

---

## 📄 License

This project is for educational purposes and can be modified as needed.

---

## ✨ Contributions

All contributions and suggestions are welcome!  
Feel free to open an issue or pull request via GitHub.
