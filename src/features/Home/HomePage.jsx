import { CarouselMusic } from '../../shared/components/carouselMusic'
import { FooterNav } from '../../shared/components/FooterNav'
import { NavBar } from '../../shared/components/Header'


export function Home() {


    return (
        <div className="flex w-screen h-screen flex-col pb-14" >
            <NavBar></NavBar>

            <CarouselMusic></CarouselMusic>
            <CarouselMusic></CarouselMusic>
            <CarouselMusic></CarouselMusic>

            <CarouselMusic></CarouselMusic>
            <CarouselMusic></CarouselMusic>
            <CarouselMusic></CarouselMusic>


            <FooterNav></FooterNav>
        </div>
    )
}