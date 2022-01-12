import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"
type Links = {
    previous: string,
    next: string,
    HomeLeft:boolean,
    HomeRight:boolean,
  }
const Pagenation = ({previous,next,HomeLeft,HomeRight}:Links) => {
    return (
        <div>
             {/* Next Previous */}
        <div className="tex-xs flex justify-between my-6">
        <Link
          className="bg-gray-800 hover:text-blue-400 flex hover:bg-gray-900 text-white font-bold py-2 px-3 rounded text-lg"
          to={previous}
        >
          <ChevronLeftIcon className="h-7 w-7 -ml-2" />
          {HomeLeft ? "Home" :"Previous"}
        </Link>
        <Link
          className="bg-gray-800  hover:text-blue-400 flex hover:bg-gray-900 text-white font-bold py-2 px-3 rounded text-lg"
          to={next}
        >
          {HomeRight ? "Home" :"Next"}
          <ChevronRightIcon className="h-7 w-7" />
        </Link>
      </div>
      {/* Next Previous */}
        </div>
    )
}

export default Pagenation
