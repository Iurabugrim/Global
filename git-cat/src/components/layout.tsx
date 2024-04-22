import NavigationMenu from "@/components/navigation-menu.tsx";
import {Outlet} from "react-router";
import {FaGithubAlt} from "react-icons/fa";


const MainLayout = () => {
    let events = 50

    return (
        <main className={"w-screen h-screen flex gap-10"}>
            <NavigationMenu/>
            <div className={"py-5 w-full pr-10"}>
                <div className={"flex items-center gap-7"}>
                    <div className={"bg-emerald-400 rounded-2xl p-5 text-white flex items-center gap-4"}>
                        <FaGithubAlt size={70}/>
                        <div>
                            <p className={"text-xl font-semibold"}>Welcome to</p>
                            <p className={"text-2xl font-bold"}>GitCat</p>
                        </div>
                    </div>
                    <div className={"bg-indigo-400 rounded-2xl p-5 text-white flex flex-col font-semibold"}>
                        <div className={"flex items-center gap-1"}>
                            <p>Received events:</p>
                            <p>{events}</p>
                        </div>
                        <div className={"flex items-center gap-1"}>
                            <p>Followers:</p>
                            <p>{events}</p>
                        </div>
                        <div className={"flex items-center gap-1"}>
                            <p>Forks:</p>
                            <p>{events}</p>
                        </div>
                    </div>
                </div>
                <div className={"py-10"}>
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}

export default MainLayout;