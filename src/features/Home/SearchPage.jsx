import { NavBar } from '../../shared/components/Header'
import { CarouselMusic } from '../../shared/components/carouselMusic/carouselMusic'
export function SearchPage() {


  return (


    <div className='flex w-screen h-screen flex-col ' >

      <div className='flex bg-slate-900 py-2 px-2 justify-center items-center  w-screen  gap-10' >
        <input className='bg-gray-800 p-2 px-12 rounded-full text-white  border border-default-medium text-heading text-[15px] focus:ring-brand focus:border-brand block  placeholder:text-body' type="text" placeholder='Pesquisar' />
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="White" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>

      <CarouselMusic searchCategory="Musicas em alta" ></CarouselMusic>

      <div className='flex flex-row flex-wrap gap-5 justify-center items-center'>

        <div className="w-[180px] h-[110px] rounded-2xl p-3 text-white bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 shadow-lg hover:scale-105 transition">
          <p className="text-sm font-bold">Em alta</p>
          <p className="text-[10px] opacity-80 mt-1">
            As mais tocadas agora
          </p>
        </div>

        <div className="w-[180px] h-[110px] rounded-2xl p-3 text-white bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 shadow-lg hover:scale-105 transition">
          <p className="text-sm font-bold">Músicas antigas</p>
          <p className="text-[10px] opacity-80 mt-1">
            Clássicos que nunca morrem
          </p>
        </div>


        <div className="w-[180px] h-[110px] rounded-2xl p-3 text-white bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 shadow-lg hover:scale-105 transition">
          <p className="text-sm font-bold">Pop atual</p>
          <p className="text-[10px] opacity-80 mt-1">
            Hits mais recentes
          </p>
        </div>


        <div className="w-[180px] h-[110px] rounded-2xl p-3 text-white bg-gradient-to-br from-violet-500 via-purple-700 to-fuchsia-600 shadow-lg hover:scale-105 transition">
          <p className="text-sm font-bold">Descobrir</p>
          <p className="text-[10px] opacity-80 mt-1">
            Novos sons pra você
          </p>
        </div>

      </div>

      <CarouselMusic searchCategory="PodCasts" ></CarouselMusic>

    </div>





  )
}