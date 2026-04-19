"use client";

export default function HorizontalSeparator() {
    return (
        <div aria-hidden="true" className="relative w-full h-px bg-[#ffffff06] my-16 pointer-events-none">
            <div className="relative mx-auto h-full max-w-4xl px-6">
                {/* Left Crosshair */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-1/2 left-1/2 h-px w-[14px] -translate-x-1/2 -translate-y-1/2 bg-[#ffffff25]" />
                    <div className="absolute top-1/2 left-1/2 h-[14px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#ffffff25]" />
                </div>

                {/* Right Crosshair */}
                <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-1/2 left-1/2 h-px w-[14px] -translate-x-1/2 -translate-y-1/2 bg-[#ffffff25]" />
                    <div className="absolute top-1/2 left-1/2 h-[14px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#ffffff25]" />
                </div>
            </div>
        </div>
    );
}