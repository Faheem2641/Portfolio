"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface RaceResult {
  round: string
  location: string
  flagImage: string
  date: string
  finish: string
  fastestLap: string
}

interface YearData {
  year: string
  podiums: string
  bestFinish: string
  results: RaceResult[]
}

const historicalData: YearData[] = []

const getRandomTrophy = (id: number | string) => {
  const val = typeof id === "string" ? Number.parseInt(id.replace(/\D/g, "") || "0") : id
  const trophyNum = (val % 9) + 1
  return `/images/trofeus/trofeu${trophyNum}.svg`
}

export function HistoricalResultsAccordion() {
  const [activeYear, setActiveYear] = useState<string | null>("2024")

  return (
    <div className="w-full bg-[#111111] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* </CHANGE> */}

        <div className="flex flex-col gap-4">
          {historicalData.map((data) => (
            <div key={data.year} className="border-b border-white/10 last:border-none">
              <button
                onClick={() => setActiveYear(activeYear === data.year ? null : data.year)}
                className={cn(
                  "w-full flex items-center justify-between p-4 md:p-6 transition-all duration-300 ease-out group",
                  activeYear === data.year
                    ? "bg-lorenzo-accent text-black"
                    : "bg-transparent text-white hover:bg-white/5",
                )}
              >
                <div className="flex items-center gap-6">
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 md:w-8 md:h-8 transition-transform duration-300",
                      activeYear === data.year ? "rotate-180 text-black" : "text-white -rotate-90",
                    )}
                  />
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-5xl md:text-7xl tracking-tighter leading-none">
                    {data.year}
                  </span>
                </div>

                <div className="flex items-center gap-8 md:gap-16 pr-4">
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Finish</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl italic leading-none">
                      {data.bestFinish}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Podiums</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl leading-none">
                      {data.podiums}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeYear === data.year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    className="overflow-hidden bg-zinc-900/30"
                  >
                    <div className="grid grid-cols-12 gap-4 py-4 px-6 text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-widest border-b border-white/10">
                      <div className="col-span-1">Round</div>
                      <div className="col-span-4">Location</div>
                      <div className="col-span-3 text-center">Date</div>
                      <div className="col-span-2 text-center">Finish</div>
                      <div className="col-span-2 text-right">Fastest Lap</div>
                    </div>

                    <div className="p-0">
                      {data.results.map((result, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-white/5 text-white hover:bg-white/5 transition-colors items-center group"
                        >
                          <div className="col-span-1 relative">
                            <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl text-white/40 relative z-10">
                              {result.round}
                            </span>
                          </div>

                          <div className="col-span-4 flex items-center gap-3">
                            <Image
                              src={result.flagImage || "/placeholder.svg"}
                              alt={`${result.location} flag`}
                              width={32}
                              height={24}
                              className="w-7 h-5 md:w-8 md:h-6 object-cover rounded-sm"
                            />
                            <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl uppercase tracking-tighter leading-none">
                              {result.location}
                            </span>
                          </div>

                          <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-2xl text-white/70 uppercase">
                            {result.date}
                          </div>

                          <div className="col-span-2 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-3xl italic flex items-center justify-center gap-2 md:gap-3">
                            <Image
                              src={getRandomTrophy(index + result.location) || "/placeholder.svg"}
                              alt="Trophy"
                              width={32}
                              height={32}
                              className="w-7 h-7 md:w-9 md:h-9"
                            />
                            <span className={result.finish === "1ST" ? "text-lorenzo-accent" : "text-white"}>
                              {result.finish}
                            </span>
                          </div>

                          <div className="col-span-2 text-right font-[family-name:var(--font-oswald)] font-bold text-lg">
                            {result.fastestLap}
                            <span className="text-xs ml-1 text-white/40">s</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
