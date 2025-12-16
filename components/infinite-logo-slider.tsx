"use client"

const logos = [
  "NEXT.JS",
  "AUTODESK INVENTOR",
  "AUTOCAD",
  "ANSYS",
  "LATEX",
]

export default function InfiniteLogoSlider() {
  // Create a sequence of logos that is definitely wide enough (4 sets)
  const singleSequence = [...logos, ...logos, ...logos, ...logos]

  // We need two copies of this sequence to loop seamlessly by moving -50%
  // This creates a very long strip: [Seq 1][Seq 2]
  const sliderContent = [...singleSequence, ...singleSequence]

  return (
    <div className="w-full overflow-hidden py-10 relative mask-gradient bg-transparent">
      {/* Inject CSS keyframes locally to ensure it works without global dependencies */}
      <style jsx>{`
        @keyframes infinite-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-slide {
          animation: infinite-slide 40s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-infinite-slide">
        {sliderContent.map((text, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center flex-shrink-0 mx-12"
          >
            <span className="text-lorenzo-text-light/80 font-black text-2xl md:text-3xl uppercase tracking-tighter whitespace-nowrap hover:text-lorenzo-accent transition-colors duration-300">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
