
import React, { ReactNode } from 'react'

const MagicButton = ({
    title, icon, position, otherClasses, handleClick
}: {
    title: string;
    icon: ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string
}) => {

    return (
        <button
            onClick={handleClick}
            className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
            {/* Border Animation */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            {/* Inner Button with Shimmer Effect */}
            <span className="relative inline-flex gap-2 h-full w-full items-center justify-center rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer px-7 text-sm font-medium text-white">
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>

    )
}

export default MagicButton
