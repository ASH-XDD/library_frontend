import { Carousel } from "./components/Carousel"
import { ExploreTopBooks } from "./components/ExploreTopBooks"
import { Heros } from "./components/Heros"
import { Libraryservices } from "./components/LibraryServices"

export const HomePage=()=>{

    return(
        <>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <Libraryservices/></>
    );
}