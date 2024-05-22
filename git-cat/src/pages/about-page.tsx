import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {FaGithub} from "react-icons/fa";
import {useUser} from "@/hooks/useUser.tsx";


const AboutPage = () => {
    const {user} = useUser()

    return (
        <div>
            <div className={"flex items-start mt-10 justify-center gap-20"}>
                <div className={"flex flex-col items-center justify-center gap-3"}>
                    <Avatar className={"w-[200px] h-[200px]"}>
                        <AvatarImage className={"w-[200px] h-[200px]"} src={user?.avatar_url}/>
                        <AvatarFallback>
                            <FaGithub size={100} color={"#fff"}/>
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <h2 className={"font-semibold text-2xl"}>{user?.login}</h2>
                    <p className={"text-zinc-200"}>{user?.id}</p>
                    <div className={"mt-5"}>
                        <p className={"text-indigo-500 uppercase font-semibold"}>Account Details</p>
                        <div className={"mt-5"}>
                            <p className={" font-light"}>Name: {user?.name}</p>
                            <p className={" font-light"}>repos: {user?.repos_url}</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;