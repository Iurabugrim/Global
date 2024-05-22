import {instance} from "@/api/axios.ts";
import {Repository} from "@/types/repositories.interface.ts";
import {Follower} from "@/types/followers.interface.ts";
import {Subscription} from "@/types/subscription.interface.ts";


export class GitService {
    async getRepositories(accountName: string) {
        return await instance.get<Repository[]>(`/users/${accountName}/repos`).then((res) => res.data)
    }

    async getFollowers(accountName: string) {
        return await instance.get<Follower[]>(`/users/${accountName}/followers`).then((res) => res.data)
    }

    async getSubscriptions(accountName: string) {
        return await instance.get<Subscription[]>(`/users/${accountName}/subscriptions`).then((res) => res.data)
    }

    async getAbout(accountName: string) {
        return await instance.get(`/users/${accountName}`).then((res) => res.data)
    }
}