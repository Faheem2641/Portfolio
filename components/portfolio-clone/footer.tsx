"use client"

export default function PortfolioFooter() {
  return (
    <footer className="py-2 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Thin Container Card */}
        <div className="neu-raised rounded-[24px] sm:rounded-[32px] py-3.5 px-6 sm:px-8 text-center text-xs font-mono font-bold text-slate-700">
          © {new Date().getFullYear()} Faheem Ali. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
