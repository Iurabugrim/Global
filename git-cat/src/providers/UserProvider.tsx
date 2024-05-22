import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {User} from "@/types/user.interface.ts";
import {GitService} from "@/service/git.service.ts";

interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {
    }
})


export const UserProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null)
    const gitService = new GitService()


    useEffect(() => {
        gitService.getAbout("Iurabugrim").then((res) => {
            setUser(res)
        })
    }, [])


    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}