export declare namespace domain {
    namespace v_1_0_0 {
        interface User {
            id: string;
            name: string;
        }
        interface Post {
            id: string;
            body: string;
            author: domain.v_1_0_0.User;
        }
        class NoPostsYetError extends Error {
            constructor(message: string);
        }
    }
}
export declare namespace postService {
    namespace v_1_0_0 {
        function getPosts(): Promise<domain.v_1_0_0.Post[]>;
    }
}
