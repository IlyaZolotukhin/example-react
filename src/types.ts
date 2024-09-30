export interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}


export interface LoginResponse {
    token: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}