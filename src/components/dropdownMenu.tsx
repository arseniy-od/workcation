import {useEffect, useRef, useState} from "react";

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);


    function Dropdown() {
        return (
            <div className="absolute mt-3 bg-white rounded-lg right-0 w-48 py-2 shadow-xl xl:border">
                <a href="#"
                   className="block hover:text-white mt-0 text-gray-800 px-4 py-2 hover:bg-indigo-500">
                    Account settings
                </a>
                <a href="#"
                   className="block hover:text-white mt-0 text-gray-800 px-4 py-2 hover:bg-indigo-500">
                    Support
                </a>
                <a href="#"
                   className="block hover:text-white mt-0 text-gray-800 px-4 py-2 hover:bg-indigo-500">
                    Sign out
                </a>
            </div>
        );
    }

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27) {
                setIsOpen(false);
            }
        };

        // const handleClickAway = (event) => {
        //     if (menuRef.current && !menuRef.current.contains(event.target)) {
        //         setIsDropOpen(false);
        //     }
        // };

        document.addEventListener("keydown", handleEscape);
        // document.addEventListener("click", handleClickAway);

        return () => {
            document.removeEventListener("keydown", handleEscape);
            // document.removeEventListener("click", handleClickAway);
        };
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div ref={menuRef}>
            <div className="relative">
                <button type="button" onClick={toggle}
                        className="flex items-center rounded-full hidden sm:block sm:h-8 sm:w-8 focus:outline-none sm:overflow-hidden sm:border-2 border-gray-600 focus:border-white xl:w-10 xl:h-10 xl:border-gray-300 xl:focus:border-indigo-500">
                    <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                        alt="profile photo"/>
                </button>
                <div className="block sm:hidden">
                    <div className="mt-5">
                        <a href="#" className="block text-gray-400 hover:text-white">
                            Account settings
                        </a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">
                            Support
                        </a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">
                            Sign out
                        </a>
                    </div>
                </div>

                <div className={`${!isOpen ? "hidden" : "block"}`}>
                    <button onClick={() => {
                        setIsOpen(false);}} className="z-30 fixed opacity-0 inset-0 cursor-default"></button>

                    <div className="relative z-40">
                        <Dropdown/>
                    </div>
                </div>
            </div>
        </div>
    );
}
