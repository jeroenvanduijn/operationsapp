'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

interface ScreenshotShowcaseProps {
  title: string;
  subtitle?: string;
  screenshots: Screenshot[];
  accentColor?: 'cinnabar' | 'teal';
}

export default function ScreenshotShowcase({
  title,
  subtitle,
  screenshots,
  accentColor = 'cinnabar',
}: ScreenshotShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const borderColor = accentColor === 'cinnabar' ? 'border-cinnabar/30' : 'border-teal/30';
  const activeDot = accentColor === 'cinnabar' ? 'bg-cinnabar' : 'bg-teal';
  const activeTab = accentColor === 'cinnabar' ? 'bg-cinnabar/10 text-cinnabar border-cinnabar/30' : 'bg-teal/10 text-teal border-teal/30';

  return (
    <div>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
              activeIndex === index
                ? activeTab
                : 'border-white/[0.06] text-dark-400 hover:text-white hover:border-white/[0.12]'
            }`}
          >
            {screenshot.caption}
          </button>
        ))}
      </div>

      {/* Screenshot display */}
      <div className={`glass-card rounded-2xl p-2 md:p-3 ${borderColor}`}>
        {/* Browser mockup header */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] mb-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-dark-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-dark-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-dark-600" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-dark-500 text-[10px] font-mono">
              {screenshots[activeIndex].alt}
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-lg bg-dark-900">
          <Image
            src={screenshots[activeIndex].src}
            alt={screenshots[activeIndex].alt}
            width={1200}
            height={700}
            className="w-full h-auto object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index ? `${activeDot} scale-125` : 'bg-dark-600 hover:bg-dark-500'
            }`}
            aria-label={`Screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
