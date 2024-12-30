import { setSearchQuery } from "@/redux/jobSlice";
import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const category = [
    "Frontend Developer",
    "Backend Devloper",
    "Data Science",
    "Graphic Design",
    "Full Stack Developer"
]

const CategoryCarousel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchQuery(query));
        navigate("/browse");
    }


    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Button onClick={() => searchJobHandler(cat)} className="bg-[#6A38C2] hover:bg-[black] text-white hover:text-white rounded-[10px]" variant="outline">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
