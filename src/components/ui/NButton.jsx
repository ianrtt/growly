export default function DefaultButton({ text }){
    return (
        <>
        <a href="#" className=
        "inline-block rounded-sm bg-growly-main p-2 px-3.5 text-growly-white text-sm font-semibold hover:bg-growly-main-darker">
        {text}
        </a>
        </>
    );
}