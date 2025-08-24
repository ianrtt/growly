const gradients = {
    dark: "from-gray-700 via-gray-800 to-gray-900",
    light: "from-gray-200 via-gray-300 to-gray-400",
};

export default function Badge({ variant, children }){
    return(
        <>
        <div className={`border border-gray-300 shadow-lg w-max px-5 bg-radial ${gradients[variant]} rounded-4xl text-white`}>
        {children}
        </div>
        </>
    );
}