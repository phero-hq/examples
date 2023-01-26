export declare namespace domain {
    namespace v_1_0_0 {
        interface Article {
            id: string;
            text: string;
        }
    }
}
export declare namespace articleService {
    namespace v_1_0_0 {
        function getArticle(id: string): Promise<domain.v_1_0_0.Article>;
    }
}
