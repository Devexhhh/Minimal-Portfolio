"use client";

export default function DotPatternGrid() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            {/* This wrapper constrains the dots to your specific layout width.
              The border-x adds subtle boundary lines left and right (optional).
            */}
            <div className="relative mx-auto h-full max-w-4xl border-x border-[#ffffff06]">

                {/* The dot pattern now ONLY fills the center column */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                        // Using 'center top' keeps dots locked to the top edge when scrolling
                        backgroundPosition: 'center top'
                    }}
                />

            </div>
        </div>
    );
}