import { CarouselMusic } from '../../shared/components/carouselMusic/carouselMusic'
import { FooterNav } from '../../shared/components/FooterNav'
import { NavBar } from '../../shared/components/Header'


export function Home() {


    return (
        <div className="" >
        <NavBar></NavBar>

            <div className='flex w-screen h-screen flex-col pb-20 mt-14' >
                <CarouselMusic  searchCategory="Mpb" ></CarouselMusic>
                <CarouselMusic  searchCategory="Pagode" ></CarouselMusic>
                <CarouselMusic  searchCategory="Rock" ></CarouselMusic>
                <CarouselMusic  searchCategory="Lo-Fi" ></CarouselMusic>
            </div>

        </div>
    )
}