import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


const Categories = [
    {
        id: 1,
        name: "All",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <TiThSmallOutline className="w-full h-full icon-color" />
            </div>
        ),
    },
    {
        id: 2,
        name: "Breakfast",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <MdOutlineFreeBreakfast className="w-full h-full icon-color" />
            </div>
        ),
    },
    {
        id: 3,
        name: "Soups",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <TbSoup className="w-full h-full icon-color" />
            </div>
        ),
    },
    {
        id: 4,
        name: "Pasta",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <CiBowlNoodles className="w-full h-full icon-color" />
            </div>
        ),
    },
    {
        id: 5,
        name: "Main Course",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <MdOutlineFoodBank className="w-full h-full icon-color" />
            </div>
        ),
    },
    {
        id: 6,
        name: "Pizza",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <GiFullPizza className="w-full h-full icon-color" />
            </div>
        ),
    },
    {
        id: 7,
        name: "Burger",
        image: (
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12 flex justify-center items-center">
                <GiHamburger className="w-full h-full icon-color" />
            </div>
        ),
    },
];

export default Categories