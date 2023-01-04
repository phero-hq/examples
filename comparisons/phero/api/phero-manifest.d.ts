export declare namespace domain {
    namespace v_1_0_0 {
        interface UserProfile {
            firstName: string;
            lastName: string;
        }
        enum Theme {
            Minimal = "Minimal",
            Advanced = "Advanced"
        }
        interface UserSettings {
            recieveNewsletter: boolean;
            preferredTheme: domain.v_1_0_0.Theme;
        }
        interface User {
            id: string;
            profile: domain.v_1_0_0.UserProfile;
            settings: domain.v_1_0_0.UserSettings;
        }
        class UserNotFoundError extends Error {
            constructor(message: string);
        }
    }
}
export declare namespace users {
    namespace v_1_0_0 {
        function get(id: string): Promise<domain.v_1_0_0.User>;
        function updateProfile(id: string, profile: domain.v_1_0_0.UserProfile): Promise<void>;
        function updateSettings(id: string, settings: domain.v_1_0_0.UserSettings): Promise<void>;
    }
}
