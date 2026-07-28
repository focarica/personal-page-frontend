export class PostHeaders{
    id: string
    title: string
    description: string
    date: string
    tags: string[]
    readingTimeMinutes: number

    constructor(
        id: string, 
        title: string,
        description: string, 
        date: string, 
        tags: string[],
        readingTimeMinutes: number
    ){
        this.id = id
        this.title = title
        this.description = description
        this.date = date
        this.tags = tags
        this.readingTimeMinutes = readingTimeMinutes
    }
}