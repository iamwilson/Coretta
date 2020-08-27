declare namespace Definitions {
    export interface ApiResponse {
        code?: number; // int32
        type?: string;
        message?: string;
    }
    export interface Category {
        id?: number; // int64
        name?: string;
    }
    export interface Order {
        id?: number; // int64
        petId?: number; // int64
        quantity?: number; // int32
        shipDate?: string; // date-time
        /**
         * Order Status
         */
        status?: "placed" | "approved" | "delivered";
        complete?: boolean;
    }
    export interface Pet {
        id?: number; // int64
        category?: Category;
        /**
         * example:
         * doggie
         */
        name: string;
        photoUrls: string[];
        tags?: Tag[];
        /**
         * pet status in the store
         */
        status?: "available" | "pending" | "sold";
    }
    export interface Tag {
        id?: number; // int64
        name?: string;
    }
    export interface User {
        id?: number; // int64
        username: string;
        firstName?: string;
        lastName?: string;
        email: string;
        password?: string;
        phone?: string;
        /**
         * User Status
         */
        userStatus?: number; // int32
    }
}
declare namespace Paths {
    namespace AddPet {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.Pet;
        }
    }
    namespace CreateUser {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User;
        }
    }
    namespace CreateUsersWithArrayInput {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User[];
        }
    }
    namespace CreateUsersWithListInput {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User[];
        }
    }
    namespace FindPetsByStatus {
        namespace Responses {
            export type $200 = Definitions.Pet[];
        }
    }
    namespace FindPetsByTags {
        namespace Responses {
            export type $200 = Definitions.Pet[];
        }
    }
    namespace GetInventory {
        namespace Responses {
            export interface $200 {
                [name: string]: number; // int32
            }
        }
    }
    namespace GetOrderById {
        namespace Responses {
            export type $200 = Definitions.Order;
        }
    }
    namespace GetPetById {
        namespace Responses {
            export type $200 = Definitions.Pet;
        }
    }
    namespace GetUserByName {
        namespace Responses {
            export type $200 = Definitions.User;
        }
    }
    namespace LoginUser {
        namespace Responses {
            export type $200 = string;
        }
    }
    namespace PlaceOrder {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.Order;
        }
        namespace Responses {
            export type $200 = Definitions.Order;
        }
    }
    namespace UpdatePet {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.Pet;
        }
    }
    namespace UpdateUser {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.User;
        }
    }
    namespace UploadFile {
        namespace Responses {
            export type $200 = Definitions.ApiResponse;
        }
    }
}
