'use client'

import { useEffect, useState } from 'react'

function calculateTimeLeft() {
  const now = new Date()
  const currentYear = now.getFullYear()
  let target = new Date(currentYear, 11, 25)

  if (now.getTime() > target.getTime()) {
    target = new Date(currentYear + 1, 11, 25)
  }

  const difference = target.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="w-full flex flex-col items-center mt-4 mb-8 z-20">
      <h2 className="font-headline-sm text-surface text-2xl md:text-3xl tracking-wide mb-6 font-normal drop-shadow-md">
        Contagem Regressiva para o Natal
      </h2>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4 md:p-6 flex items-center justify-center gap-2 md:gap-4 w-full max-w-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

        {[
          { value: timeLeft.days, label: 'Dias' },
          { value: timeLeft.hours, label: 'Horas' },
          { value: timeLeft.minutes, label: 'Minutos' },
          { value: timeLeft.seconds, label: 'Segundos' },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-2 md:gap-4">
            {i > 0 && (
              <span className="font-display-lg text-xl md:text-3xl font-bold text-brand-gold relative z-10 pb-5 md:pb-6">:</span>
            )}
            <div className="flex flex-col items-center flex-1 relative z-10 w-16 md:w-20">
              <span className="font-display-lg text-3xl md:text-4xl font-bold text-surface drop-shadow-lg tabular-nums">
                {formatNumber(item.value)}
              </span>
              <span className="font-label-md text-brand-gold uppercase tracking-[0.1em] mt-1 text-[10px] md:text-xs font-bold border-t border-white/20 pt-1 w-full text-center">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
