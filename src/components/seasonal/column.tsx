"use client"

import React from "react"
import ColumnCard from "./column-card"
import { IAdvancedInfo } from "types/types"
import { FaArrowRightLong } from "react-icons/fa6"
import Link from "next/link"
import { transformedTitle } from "@/lib/utils"

interface ColumnProps {
  results: IAdvancedInfo[]
  seasonalTitle: string
  browse: string
}

const Column: React.FC<ColumnProps> = ({ results, seasonalTitle, browse }) => (
  <div className="w-full">
    <div className="min-h-[300px] w-full">
      <Link
        href={browse}
        className="group relative mb-4 flex items-center text-[11px] font-medium uppercase transition-all xl:text-base"
      >
        <div className="mr-2 h-6 w-1 rounded-md bg-primary md:w-2"></div>
        {seasonalTitle}
        <FaArrowRightLong className="ml-2 transition-all group-hover:translate-x-1" />
      </Link>
      <div className="bg-transparent">
        <ul className="flex flex-col items-center gap-2">
          {results?.map((result) => (
            <li
              key={result?.id}
              className="relative w-full rounded-md bg-background"
            >
              <Link
                href={`/anime/${transformedTitle(result?.title?.english ?? result?.title?.romaji)}/${result?.id}`}
                aria-label={result?.title?.english ?? result?.title?.romaji}
                className="relation flex h-full w-full items-center justify-between rounded-md border-b bg-card/80 py-3 transition-all hover:scale-[1.02]"
              >
                <ColumnCard result={result} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Column
