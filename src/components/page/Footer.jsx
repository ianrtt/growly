import ContentLarge from "@ui/ContentLarge";

export default function Footer(){
    return (
      <footer className="flex items-center justify-center">
          <ContentLarge variant={'light'} >
            <img src="assets/growly.webp" className="absolute h-24 mx-5" alt="Growly Logo" />
            <ul className="flex justify-center m-5 text-sm font-semibold text-black sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="inline-block hover:text-gray-500 me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="inline-block hover:text-gray-500 me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="inline-block hover:text-gray-500 me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="inline-block hover:text-gray-500">Contact</a>
                </li>
            </ul>
            <p className="my-3 text-black text-center font-semibold">&copy; {new Date().getFullYear()} Growly. All rights reserved.</p>
          </ContentLarge>
      </footer>
    );
}