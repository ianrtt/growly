export default function Footer(){
    return (
        <footer className="bg-gray-600 text-white text-center font-semibold p-3">
          &copy; {new Date().getFullYear()} Growly. All rights reserved.
        </footer>
    );
}