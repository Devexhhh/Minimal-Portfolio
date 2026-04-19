"use client";

export default function VerticalGrid() {
    // Only the outer boundaries
    const verticals = ["left-0", "right-0"];

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
            <div className="relative mx-auto h-full max-w-4xl px-6">
                {verticals.map((pos, i) => (
                    <div
                        key={`v-${i}`}
                        className={`absolute top-0 bottom-0 ${pos} w-px bg-[#ffffff06]`}
                    />
                ))}
            </div>
        </div>
    );
}