import {useEffect, useState} from "react";
import {GitService} from "@/service/git.service.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Subscription} from "@/types/subscription.interface.ts";
import {useUser} from "@/hooks/useUser.tsx";


const SubscriptionsPage = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[] | []>([])
    const [filteredSubscriptions, setFilteredSubscriptions] = useState<Subscription[] | []>([])
    const [search, setSearch] = useState<string>("")
    const gitService = new GitService()
    const {user} = useUser()

    useEffect( () => {
        gitService.getSubscriptions(user?.login || "").then((res) => {
            setSubscriptions(res)
        })
    }, [user])


    useEffect(() => {
        setFilteredSubscriptions(
            subscriptions.filter((subscription) => {
                return subscription.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, subscriptions])

    return (
        <ScrollArea className={"h-screen"}>
            <div className={"w-full flex items-center justify-between py-5"}>
                <div>
                    <h3 className={"text-lg font-bold"}>Subscriptions</h3>
                    <p className={"text-zinc-500"}>Overview of GitHub subscriptions</p>
                </div>
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"Enter followers name"} className={"w-[300px]"}/>
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
                    {filteredSubscriptions.map((rep) => (
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
    );
}

export default SubscriptionsPage;