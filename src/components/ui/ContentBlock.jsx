const gradients = {
    dark: "from-gray-700 via-gray-800 to-gray-900",
    light: "from-gray-200 via-gray-300 to-gray-400",
};

export default function ContentBlock({ variant, children, h, w, round}){
    return(
        <>
        <div className={`border border-gray-300 shadow-lg w-${w ?? '1/2'} min-h-${h ?? 'screen'} bg-radial ${gradients[variant]} rounded-${round ?? '4xl'} text-white`}>
        {children}
        </div>
        </>
    );
}