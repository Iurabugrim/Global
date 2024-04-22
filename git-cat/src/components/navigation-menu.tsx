import {IoGitBranchOutline, IoPeopleSharp, IoPerson} from "react-icons/io5";
import {IoIosLink} from "react-icons/io";
import {FaGithub} from "react-icons/fa";
import {cn} from "@/lib/utils.ts";
import {useLocation} from "react-router";


const navgationData = [
    {
        title: "Repositories",
        path: "/repositories",
        icon: IoGitBranchOutline
    },
    {
        title: "Followers",
        path: "/followers",
        icon: IoPeopleSharp
    },
    {
        title: "Subscriptions",
        path: "/subscriptions",
        icon: IoIosLink
    },
    {
        title: "About",
        path: "/about",
        icon: IoPerson
    }
]

const  NavigationMenu = () => {
    const pathname = useLocation().pathname

    return (
        <nav className={"w-[20%] h-full bg-indigo-500 rounded-r-3xl overflow-hidden"}>
            <div className={"flex flex-col items-center justify-between h-full py-20"}>
                <div className={"flex flex-col items-center justify-center gap-3"}>
                    <FaGithub size={100} color={"#fff"}/>
                    <div className={"text-white text-center"}>
                        <h2 className={"font-semibold text-2xl"}>John Doe</h2>
                        <p className={"text-zinc-200"}>johndoe@gmail.com</p>
                    </div>
                </div>
                <ul className={"w-full pl-12 flex flex-col gap-3"}>
                    {navgationData.map((item, index) => (
                        <li key={index} className={cn("bg-indigo-500 py-2 px-4 rounded-l-full text-white", {"bg-white text-indigo-500": item.path === pathname})}>
                            <a href={item.path} className={"flex items-center gap-3 "}>
                                <item.icon size={20}/>
                                <span className={"text-lg font-semibold"}>{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <p className={"text-sm font-semibold text-white"}>GL JS 2024</p>
                </div>
            </div>
        </nav>
    )
}

export default NavigationMenu;