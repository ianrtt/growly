export default function DefaultText({ page, text, Icon }){
    return (
        <a href={page ?? '#'} className="group relative inline-block text-sm p-2 px-4 mx-1 text-black rounded-sm font-bold bg-transparent hover:bg-gray-100">
        {text}
        {Icon && <Icon size={14} color="black" className="absolute top-1 right-1 translate-x-1 -translate-y-0 animate-bounce [animation-duration:5s]" />}
        </a>
    );
}