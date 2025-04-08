# TROY Onboarding Flow

A modern, user-friendly onboarding flow for TROY's business phone number service. Built with React, TypeScript, and Tailwind CSS.

## Features

- Country selection with visual flags
- Area code-based phone number search
- Business type selection
- Business search and manual entry options
- Industry selection
- Responsive design
- Modern UI with animations

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Vite

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/troyyasir/onboardflow.git
cd onboardflow
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature-specific components
├── constants/         # Constants and configuration
├── types/            # TypeScript type definitions
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
└── App.tsx           # Main application component
```

## Deployment

The application can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 