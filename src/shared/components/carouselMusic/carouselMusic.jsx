import { useEffect, useState } from "react";
import { searchMusic } from "../../../services/searchMusic";

import "./carousel.css";



export function CarouselMusic({ searchCategory, musicArray, }) {
  const [loading, setLoading] = useState(true)
  const [musics, setMusics] = useState()


  useEffect(() => {
    async function carregarMusicas() {
      try {
        const musicas = await searchMusic(searchCategory, 10);
        setMusics(musicas);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false)
      }
    }

    carregarMusicas();
  }, []);


  return (
    <div className="my-5">
      <div className="flex h-auto px-3 items-center justify-between">
        <h1 className="font-bold pl-3 text-[25px] text-gray-200">
          {searchCategory}
        </h1>

        <div className="flex items-center gap-5 mx-3">
          <button className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-zinc-800 transition">
            <p className="text-white">&lt;</p>
          </button>

          <button className="bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-zinc-800 transition">
            <p className="text-white">&gt;</p>
          </button>
        </div>
      </div>

      {loading ? null : (
        <div className="flex gap-4 overflow-x-auto px-3 py-2 scroll-smooth no-scrollbar">
          {musics.map((music) => (
            <div
              key={music.id}
              className="flex flex-col shrink-0 w-[110px] h-[180px] bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-[110px] object-cover"
                src={music.thumbnails[0]}
                alt={music.title}
              />

              <div className="flex flex-col p-2">
                <p className="text-white text-[10px] font-semibold ">
                  {music.title.slice(0,30)}
                </p>

                <p className="text-zinc-400 text-[11px] truncate">
                  {music.channel}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}



    </div>

  )
}





