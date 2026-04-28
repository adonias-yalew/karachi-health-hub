# Karachi Health Care

A modern, responsive healthcare website built with React, TypeScript, and Tailwind CSS. Features multi-language support (English, Amharic, Oromo), online booking, service listings, and blog functionality.

## Features

- **Multi-language Support**: English, Amharic (አማርኛ), and Oromo (Afaan Oromo)
- **Service Showcase**: Display medical services with detailed descriptions
- **Online Booking**: Appointment scheduling system
- **Blog**: Healthcare articles and news
- **Contact Form**: Patient inquiries with WhatsApp integration
- **Google Maps**: Embedded clinic location
- **Responsive Design**: Mobile-first, works on all devices

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS 4
- TanStack Router
- Vite
- shadcn/ui components
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/karachi-health-care.git
cd karachi-health-care
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── assets/           # Images and static files
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/           # Reusable UI components
├── data/             # Content data
├── hooks/            # Custom React hooks
├── lib/
│   ├── i18n/         # Translation files
│   └── utils.ts      # Utility functions
├── routes/           # Page components
└── styles.css        # Global styles
```

## Deployment

The project is configured for Vercel deployment. Connect your GitHub repository to Vercel for automatic deployments.

## License

MIT License

## Contact

For questions or support, contact info@karachihealthcare.com
