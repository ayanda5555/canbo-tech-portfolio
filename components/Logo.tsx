import Image from "next/image";

export default function Logo({ className = "", width = 140 }: { className?: string; width?: number }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Canbo Tech Logo"
        width={width}
        height={width}
        className="object-contain"
        priority
      />
    </div>
  );
}