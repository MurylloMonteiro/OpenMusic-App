import { useNavigate } from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="flex top-0 bg-slate-900 fixed w-full">
            <nav className="flex p-3 w-full h-30 justify-between">
                <h1 className="text-orange-500 text-2xl">OpenMusic</h1>

                <div className="flex gap-14 pr-1">
                    <button
                        className="flex justify-center items-center"
                        onClick={() => navigate('/search')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>

                    <button className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}