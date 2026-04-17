import './globals.css'

export const metadata = {
  title: 'Smart Household Energy Advisor',
  description: 'AI-powered energy usage analyzer for Indian households — Team Nextech, Innovathon 2026',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a56db" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
