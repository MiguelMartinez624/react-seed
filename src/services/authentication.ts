import { RegisterUserDTO } from "../core/dto/register";
import axios from 'axios';

const API_URL: string = "localhost:8000"

export class AuthenticationService {

    public static async RegisterUser(registerDTO: RegisterUserDTO) {
        const result = await axios.get(`${API_URL}/signup`);

        console.log(result);

    }
}