export declare namespace domain {
    namespace v_1_0_0 {
        class CountTooHighError extends Error {
            constructor(message: string, maxCount: number);
        }
    }
}
export declare namespace countService {
    namespace v_1_0_0 {
        function count(current: number): Promise<number>;
    }
}
