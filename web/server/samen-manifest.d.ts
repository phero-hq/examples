export declare namespace articleService {
    namespace v_1_0_0 {
        interface Article {
            id: string;
            text: string;
        }
        function get(id: string): Promise<Article>;
        function create(id: string): Promise<Article>;
        function save(id: string, text: string): Promise<Article>;
    }
}
