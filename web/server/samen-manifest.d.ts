export declare namespace samen {
    type SamenContext<T> = T;
}
export declare namespace articleService {
    namespace v_1_0_0 {
        interface User {
            uid: string;
            name: string;
        }
        interface Article {
            id: string;
            text: string;
        }
        function getArticle(context: samen.SamenContext<{
            idToken: string;
        }>, id: string): Promise<Article>;
        function createArticle(context: samen.SamenContext<{
            idToken: string;
        }>, id: string, text: string): Promise<Article>;
        function saveArticle(context: samen.SamenContext<{
            idToken: string;
        }>, id: string, text: string): Promise<Article>;
    }
}
