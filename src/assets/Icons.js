const FillHeartIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  height={size} width={size} fill="currentColor" viewBox="0 0 52 52" >
            <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z"/>
        </svg>
    )
}

const HeartIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} fill='currentColor' viewBox="0 0 52 52" className='active:scale-125 active:text-orange-500 transition-all hover:text-gray-500 z-10'>
            <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z"/>
        </svg>
    )
}
const DeleteIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor" viewBox="0 0 52 52" className="hover:text-red-600 transition-colors">
            <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/>
        </svg>
    )
}
const FavDeleteIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill='currentColor' viewBox="0 0 52 52" className='text-orange-400'>
            <path d="M16.65 32.45 24 25.1l7.35 7.35 1.1-1.1L25.1 24l7.35-7.35-1.1-1.1L24 22.9l-7.35-7.35-1.1 1.1L22.9 24l-7.35 7.35ZM24 42q-3.7 0-6.975-1.425Q13.75 39.15 11.3 36.7 8.85 34.25 7.425 31 6 27.75 6 24t1.425-7.025q1.425-3.275 3.875-5.7 2.45-2.425 5.7-3.85Q20.25 6 24 6t7.025 1.425q3.275 1.425 5.7 3.85 2.425 2.425 3.85 5.7Q42 20.25 42 24q0 3.7-1.425 6.975-1.425 3.275-3.85 5.725-2.425 2.45-5.7 3.875Q27.75 42 24 42Z"/>
        </svg>
    )
}

const Bookmark = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} fill='currentColor'  viewBox="0 0 52 52">
            <path d="M10 42V8.75q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1V42l-14-6Zm3-4.55 11-4.65 11 4.65V8.75H13Zm0-28.7h22-11Z"/>
        </svg>
    )
}

const Star = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} fill='currentColor' viewBox="0 0 52 52">
            <path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z"/>
        </svg>
    )
}

const ArrowUp = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} fill='currentColor' viewBox="0 0 52 52" className="text-white inline-flex items-center">
            <path d="M22.5 40V13.7L10.1 26.1 8 24 24 8l16 16-2.1 2.1-12.4-12.4V40Z"/>
        </svg>
    )
}

const Icon = ({name, size}) => {

    const icons = {
        fillHeart: FillHeartIcon,
        heart: HeartIcon,
        delete: DeleteIcon,
        favdelete: FavDeleteIcon,
        bookmark: Bookmark,
        star: Star,
        arrow: ArrowUp,
    }

    const Component = icons[name]
    return <Component size={size} />
}

export {
    Icon
}