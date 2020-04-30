import { RegisterUserDTO } from "../../../core/dto/register";
import axios from 'axios';

// const API_URL: string =   "http://localhost:8000"

export class AuthenticationService {

    public static async RegisterUser(registerDTO: RegisterUserDTO): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                var config = {
                    headers: { 'Access-Control-Allow-Origin': '*' }
                };
                const result = await axios.post(`/signup`, registerDTO, config);
                console.log(result);
                return resolve(result);

            } catch (error) {
                return reject(error);
            }
        });
    }

    public static async SignIn(creds: { username: string, password: string }): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                var config = {
                    headers: { 'Access-Control-Allow-Origin': '*' }
                };
                const result = await axios.post(`/signin`, creds, config);
                console.log(result);

                localStorage.setItem("my_market_token", JSON.stringify(result));

                return resolve(result);

            } catch (error) {
                return reject(error);
            }
        });
    }
}