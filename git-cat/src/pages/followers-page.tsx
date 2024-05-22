import {Input} from "@/components/ui/input.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {useEffect, useState} from "react";
import {GitService} from "@/service/git.service.ts";
import {Follower} from "@/types/followers.interface.ts";
import {useUser} from "@/hooks/useUser.tsx";


const FollowersPage = () => {
    const [followers, setFollowers] = useState<Follower[] | []>([])
    const [filteredFollowers, setFilteredFollowers] = useState<Follower[] | []>([])
    const [search, setSearch] = useState<string>("")
    const gitService = new GitService()
    const {user} = useUser()

    useEffect( () => {
        gitService.getFollowers(user?.login || "").then((res) => {
            setFollowers(res)
        })
    }, [user])


    useEffect(() => {
        setFilteredFollowers(
            followers.filter((follower) => {
                return follower.login.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, followers])

    return (
        <ScrollArea className={"h-screen"}>
            <div className={"w-full flex items-center justify-between py-5"}>
                <div>
                    <h3 className={"text-lg font-bold"}>Followers</h3>
                    <p className={"text-zinc-500"}>Overview of GitHub followers</p>
                </div>
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"Enter followers name"} className={"w-[300px]"}/>
            </div>
            <Table  className={"w-full"}>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead className="w-[300px]">Owner</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Site Admin</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody  className={"w-full overflow-y-scroll max-h-[100px]"}>
                    {filteredFollowers.map((rep) => (
                        <TableRow key={rep.id} className={"w-full"}>
                            <TableCell>{rep.id}</TableCell>
                            <TableCell className="font-medium">
                                <div className={"flex items-center gap-3"}>
                                    <Avatar>
                                        <AvatarImage src={rep.avatar_url}/>
                                        <AvatarFallback>{rep.login}</AvatarFallback>
                                    </Avatar>
                                    <div className={"flex flex-col gap-1"}>
                                        <p>{rep.login}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{rep.type}</TableCell>
                            <TableCell>{String(rep.site_admin)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    );
}

export default FollowersPage;