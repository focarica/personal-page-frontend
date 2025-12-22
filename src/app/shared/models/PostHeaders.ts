export class PostHeaders{
    id: string
    title: string
    description: string
    date: string
    tags: string[]

    constructor(
        id: string, 
        title: string,
        description: string, 
        date: string, 
        tags: string[]
    ){
        this.id = id
        this.title = title
        this.description = description
        this.date = date
        this.tags = tags
    }
}