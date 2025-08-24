const gradients = {
    dark: "from-gray-700 via-gray-800 to-gray-900",
    light: "from-gray-200 via-gray-300 to-gray-400",
};

export default function ContentBlock({ variant, children }){
    return(
        <>
        <div className={`border border-gray-300 text-white shadow-lg w-4/5 min-h-max bg-radial ${gradients[variant]} rounded-4xl`}>
        {children}
        </div>
        </>
    );
}