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

const repositories = [
    {
        id: 1,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "React App",
        description: "A simple React app",
        forks: true,
        private: false,
    },
    {
        id: 2,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "Node App",
        description: "A simple Node app",
        forks: false,
        private: true,
    },
    {
        id: 1,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "React App",
        description: "A simple React app",
        forks: true,
        private: false,
    },
    {
        id: 2,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "Node App",
        description: "A simple Node app",
        forks: false,
        private: true,
    },
    {
        id: 1,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "React App",
        description: "A simple React app",
        forks: true,
        private: false,
    },
    {
        id: 2,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "Node App",
        description: "A simple Node app",
        forks: false,
        private: true,
    },
    {
        id: 1,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "React App",
        description: "A simple React app",
        forks: true,
        private: false,
    },
    {
        id: 2,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "Node App",
        description: "A simple Node app",
        forks: false,
        private: true,
    },
    {
        id: 1,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "React App",
        description: "A simple React app",
        forks: true,
        private: false,
    },
    {
        id: 2,
        owner: {
            first_name: "John",
            last_name: "Doe",
            username: "john-d",
        },
        name: "Node App",
        description: "A simple Node app",
        forks: false,
        private: true,
    },

]

const RepositoriesPage = () => {
    return (
        <ScrollArea className={"h-screen"}>
            <div className={"w-full flex items-center justify-between py-5"}>
                <div>
                    <h3 className={"text-lg font-bold"}>Repositories</h3>
                    <p className={"text-zinc-500"}>Overview of GitHub repos</p>
                </div>
                <Input placeholder={"Enter repos name"} className={"w-[300px]"}/>
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
                        {repositories.map((rep) => (
                            <TableRow key={rep.id} className={"w-full"}>
                                <TableCell className="font-medium">
                                    <div className={"flex items-center gap-3"}>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png"/>
                                            <AvatarFallback>{rep.owner.first_name[0]}{rep.owner.last_name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className={"flex flex-col gap-1"}>
                                            <p>{rep.owner.first_name} {rep.owner.last_name}</p>
                                            <p>{rep.owner.username}</p>
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