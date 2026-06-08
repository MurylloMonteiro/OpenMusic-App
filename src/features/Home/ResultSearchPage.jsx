import { useEffect, useState } from "react"
import { searchMusic } from "../../services/searchMusic"
import { NavBar } from "../../shared/components/Header"

export function ResultSearch({ search }) {

    const [musicArray, setMusicArray] = useState([])

    useEffect(() => {
        async function LoadMusic() {
            const res = await searchMusic("Santana_cantador", 10)
            setMusicArray(res)
            console.log(res)
        }
        LoadMusic()
    }, [])

    return (
        <div>
            <NavBar></NavBar>

            <div className="mt-14 w-screen h-screen " >
                <div className="bg-slate-950 pt-3">
                    {musicArray.map((music) => (
                        <div key={music.id} className="flex gap-3 mb-3 justify-center">
                            <div className="p-0.5">
                                <img className="w-[180px] border border-black rounded-md" src={music.thumbnails[0]} alt=""/>
                            </div>

                            <div className="w-[200px] p-2">
                                <p className="text-[12px] text-white"> {music.title}</p>
                                <label className="text-gray-500 text-[12px]">{music.channel}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}