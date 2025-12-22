import { Headers } from "./Headers"

export class Post {
    headers: Headers
    content: string

    constructor(headers: Headers, content: string){
        this.headers = headers
        this.content = content
    }
}