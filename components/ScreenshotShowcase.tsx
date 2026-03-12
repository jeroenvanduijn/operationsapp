'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  mobile?: boolean;
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

  const activeDot = accentColor === 'cinnabar' ? 'bg-cinnabar' : 'bg-teal';
  const activeTab = accentColor === 'cinnabar' ? 'bg-cinnabar/10 text-cinnabar border-cinnabar/30' : 'bg-teal/10 text-teal border-teal/30';
  const current = screenshots[activeIndex];
  const isMobile = current.mobile;

  return (
    <div>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-dark-300 text-base max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
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
      <div className="flex justify-center">
        <div className={`${isMobile ? 'max-w-[320px]' : 'max-w-5xl w-full'}`}>
          {isMobile ? (
            /* Phone frame for mobile screenshots */
            <div className="bg-dark-800 rounded-[2.5rem] p-3 shadow-2xl border border-white/[0.08]">
              {/* Phone notch */}
              <div className="flex justify-center mb-2">
                <div className="w-24 h-5 bg-dark-900 rounded-full" />
              </div>
              <div className="rounded-[2rem] overflow-hidden bg-white">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={375}
                  height={812}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              </div>
              {/* Phone home indicator */}
              <div className="flex justify-center mt-2">
                <div className="w-28 h-1 bg-dark-600 rounded-full" />
              </div>
            </div>
          ) : (
            /* Browser frame for desktop screenshots */
            <div className="glass-card rounded-xl p-1.5 md:p-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/[0.06] mb-1.5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-dark-600" />
                  <div className="w-2 h-2 rounded-full bg-dark-600" />
                  <div className="w-2 h-2 rounded-full bg-dark-600" />
                </div>
                <span className="text-dark-500 text-[9px] font-mono flex-1 text-center">
                  {current.alt}
                </span>
              </div>
              <div className="rounded-lg overflow-hidden bg-dark-900">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              activeIndex === index ? `${activeDot} scale-125` : 'bg-dark-600 hover:bg-dark-500'
            }`}
            aria-label={`Screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
