import { PostHeaders } from "./PostHeaders"

export class Post {
    headers: PostHeaders
    content: string

    constructor(headers: PostHeaders, content: string){
        this.headers = headers
        this.content = content
    }
}