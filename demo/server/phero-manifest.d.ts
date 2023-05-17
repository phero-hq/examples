export interface Doc {
    id: string;
    author?: User;
    content: Component[];
}
export interface User {
    id: string;
    name: string;
    email?: string;
}
export type Component = TextComponent | ImageComponent;
export interface TextComponent {
    type: "text";
    content: string;
}
export interface ImageComponent {
    type: "image";
    src: string;
}
export abstract class PheroService<TContext = {}> {
}
export class docService extends PheroService {
    getDoc(id: string): Promise<Doc>;
}