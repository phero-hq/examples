export declare namespace domain {
    namespace v_1_0_0 {
        interface User {
            uid: string;
            name: string;
        }
        interface Article {
            id: string;
            text: string;
        }
    }
}
export declare namespace phero {
    type PheroContext<T> = T;
}
export declare namespace articleService {
    namespace v_1_0_0 {
        function getArticle(context: phero.PheroContext<{
            idToken: string;
        }>, id: string): Promise<domain.v_1_0_0.Article>;
        function createArticle(context: phero.PheroContext<{
            idToken: string;
        }>, id: string, text: string): Promise<domain.v_1_0_0.Article>;
        function saveArticle(context: phero.PheroContext<{
            idToken: string;
        }>, id: string, text: string): Promise<domain.v_1_0_0.Article>;
    }
}
