import React from 'react'
import { EvervaultCard } from './ui/evervault';

export const Cards = ({
    title,
    description
  }: {
    title?: string;
    description?: string
  }) => {
  return (
    <div className="flex flex-col items-start max-w-sm mx-auto p-4 relative aspect-w-1 aspect-h-1 sm:aspect-w-1 sm:aspect-h-1 md:aspect-w-1 md:aspect-h-1">
        <EvervaultCard text={title} />
  
        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          {description}
        </h2>
      </div>
  )
}
