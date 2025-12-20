const DecorativeElements = () => {
  return (
    <>
      {/* Floating leaf patterns - positioned absolute to parent sections */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top right decorative circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Bottom left decorative circle */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        
        {/* Middle right accent */}
        <div className="absolute top-1/2 -right-20 w-64 h-64 rounded-full bg-secondary/30 blur-2xl" />
      </div>
    </>
  );
};

export const SectionDecorator = ({ 
  variant = "default",
  className = "" 
}: { 
  variant?: "default" | "accent" | "primary";
  className?: string;
}) => {
  const variants = {
    default: "bg-primary/5",
    accent: "bg-accent/10",
    primary: "bg-primary/10",
  };

  return (
    <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
      <div className={`w-full h-full rounded-full blur-3xl ${variants[variant]}`} />
    </div>
  );
};

export const LeafPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 5C50 5 75 25 75 50C75 75 50 95 50 95C50 95 25 75 25 50C25 25 50 5 50 5Z"
      className="fill-primary/10"
    />
    <path
      d="M50 15C50 15 65 30 65 50C65 70 50 85 50 85"
      className="stroke-primary/20"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

export const DotPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none ${className}`}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" className="fill-primary/10" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

export default DecorativeElements;
