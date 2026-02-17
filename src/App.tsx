import React from 'react'
import './styles/bayer-theme.css'

/*
 * 🤖 AI GENERATOR: REPLACE THIS ENTIRE FILE WITH USER'S REQUESTED UI 🤖
 * 
 * MANDATORY RULES:
 * 1. Use ONLY Bayer theme classes for colors (lmnt-theme-*)
 * 2. Use Tailwind ONLY for spacing/layout (NOT colors)
 * 3. Import Bayer theme: import './styles/bayer-theme.css'
 * 
 * COLOR CLASSES EXAMPLES:
 * Text: lmnt-theme-primary, lmnt-theme-secondary, lmnt-theme-on-surface
 * Background: lmnt-theme-primary-bg, lmnt-theme-surface-bg
 * 
 * EXAMPLES:
 * User: "Create a login page" → Generate login form with Bayer colors
 * User: "Build a landing page" → Generate hero + features with Bayer colors
 * User: "Make a dashboard" → Generate dashboard with Bayer colors
 * 
 * REFERENCE: See src/BayerColorDemo.tsx for all available colors (DO NOT COPY IT!)
 */

function App() {
  return (
    <div className="min-h-screen lmnt-theme-surface-bg flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold lmnt-theme-primary">
          Bayer Template
        </h1>
        <p className="lmnt-theme-on-surface text-xl">
          Ready for AI generation with Bayer Design System
        </p>
        <div className="lmnt-theme-background-bg p-8 rounded-lg shadow-lg">
          <p className="lmnt-theme-primary font-bold text-lg mb-4">
            🤖 AI Generator Instructions
          </p>
          <p className="lmnt-theme-on-surface text-left mb-4">
            When user requests UI (login, dashboard, landing page, etc.), replace this entire App.tsx file with the generated UI.
          </p>
          <div className="text-left space-y-2 lmnt-theme-on-surface text-sm">
            <p><strong>✅ Use:</strong> Bayer theme classes (lmnt-theme-*)</p>
            <p><strong>❌ Don't use:</strong> Tailwind color classes (bg-blue-500, text-red-600)</p>
            <p><strong>📚 Reference:</strong> Check src/BayerColorDemo.tsx for all colors</p>
          </div>
        </div>
        <p className="lmnt-theme-on-surface-variant text-sm">
          Start prompting to see magic happen :)
        </p>
      </div>
    </div>
  )
}

export default App
