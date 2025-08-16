export default function DefaultText({ page, text }){
    return (
        <a href={page} className="text-sm p-2 px-2 text-black rounded-sm bg-transparent hover:bg-gray-100">
        {text}
        </a>
    );
}