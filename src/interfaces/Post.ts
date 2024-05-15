export interface Post {
    [key: string]: string | number;
    userId: number;
    id: number;
    title: string,
    body: string
}
