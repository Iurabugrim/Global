import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {useEffect, useState} from "react";
import {GitService} from "@/service/git.service.ts";
import {Repository} from "@/types/repositories.interface.ts";
import {useUser} from "@/hooks/useUser.tsx";


const RepositoriesPage = () => {
    const [repos, setRepos] = useState<Repository[] | []>([])
    const [filteredRepos, setFilteredRepos] = useState<Repository[] | []>([])
    const [search, setSearch] = useState<string>("")
    const gitService = new GitService()
    const {user} = useUser()

    useEffect( () => {
        gitService.getRepositories(user?.login || "").then((res) => {
           setRepos(res)
        })
    }, [user])

    useEffect(() => {
        setFilteredRepos(
            repos.filter((repo) => {
                return repo.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, repos])


    return (
        <ScrollArea className={"h-screen"}>
            <div className={"w-full flex items-center justify-between py-5"}>
                <div>
                    <h3 className={"text-lg font-bold"}>Repositories</h3>
                    <p className={"text-zinc-500"}>Overview of GitHub repos</p>
                </div>
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"Enter repos name"} className={"w-[300px]"}/>
            </div>
            <Table  className={"w-full"}>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Owner</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Fork</TableHead>
                        <TableHead>Private</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody  className={"w-full overflow-y-scroll max-h-[100px]"}>
                        {filteredRepos.map((rep) => (
                            <TableRow key={rep.id} className={"w-full"}>
                                <TableCell className="font-medium">
                                    <div className={"flex items-center gap-3"}>
                                        <Avatar>
                                            <AvatarImage src={rep.owner.avatar_url}/>
                                            <AvatarFallback>{rep.name}</AvatarFallback>
                                        </Avatar>
                                        <div className={"flex flex-col gap-1"}>
                                            <p>{rep.owner.login}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{rep.name}</TableCell>
                                <TableCell>{rep.description}</TableCell>
                                <TableCell>{String(rep.forks)}</TableCell>
                                <TableCell>{String(rep.private)}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </ScrollArea>
    )
}

export default RepositoriesPage;