"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
  theme={theme as ToasterProps["theme"]}
  className="toaster group"
  icons={{
    success: <CircleCheckIcon className="w-4 h-4" />,
    info: <InfoIcon className="w-4 h-4" />,
    warning: <TriangleAlertIcon className="w-4 h-4" />,
    error: <OctagonXIcon className="w-4 h-4" />,
    loading: <Loader2Icon className="w-4 h-4 animate-spin" />,
  }}
  style={{
    "--normal-bg": theme === "dark" ? "#111827" : "#fff", 
    "--normal-text": theme === "dark" ? "#f9fafb" : "#111827", 
    "--normal-border": theme === "dark" ? "#374151" : "#d1d5db",
    "--border-radius": "0.5rem",
  } as React.CSSProperties}
  {...props}
/>

  )
}

export { Toaster }
