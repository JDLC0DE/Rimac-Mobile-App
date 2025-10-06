import HttpClient from "@/src/libs/http";
import IHttpClient from "@/src/libs/http/http.interface";
import { IGetUserResponseDTO } from "../../domain/dtos/getUser.response";
import IHomeRepository from "../../domain/repositories/home.repository";

class HomeRepository implements IHomeRepository {
  private readonly http: IHttpClient;
  public static instance: HomeRepository;

  constructor(http: IHttpClient = HttpClient.getInstance()) {
    this.http = http;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new HomeRepository();
    }
    return this.instance;
  }

  async getUser(): Promise<IGetUserResponseDTO> {
    const path = "user.json";
    const response = await this.http.get<IGetUserResponseDTO>(path);
    return response;
  }
}

export default HomeRepository;
