import React from 'react'

const SimpleButton = ({
    text,
    link,
    className,
}: {
    text: string;
    link: string;
    className?: string;
}) => {
    return (
<div className={className}>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="group relative z-0 h-12 overflow-hidden rounded-3xl bg-violet-950 px-10 py-2 text-neutral-50 flex items-center space-x-2">
            <div className="relative z-10">{text}</div>
            <span className="absolute inset-0">
                <span className="absolute top-0 left-0 w-full h-full bg-blue-500 transition-all duration-500 transform scale-0 group-hover:scale-150"></span>
            </span>
        </button>
    </a>
</div>

    )
}

export default SimpleButton
