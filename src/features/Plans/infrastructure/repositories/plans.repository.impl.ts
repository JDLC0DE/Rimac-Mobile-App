import HttpClient from "@/src/libs/http";
import IHttpClient from "@/src/libs/http/http.interface";
import { IGetPlanResponseDTO } from "../../domain/dtos/getPlans.response";
import IPlansRepository from "../../domain/repositories/plans.repository";

class PlanRepository implements IPlansRepository {
  private readonly http: IHttpClient;
  public static instance: PlanRepository;

  constructor(http: IHttpClient = HttpClient.getInstance()) {
    this.http = http;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new PlanRepository();
    }
    return this.instance;
  }

  async getPlans(): Promise<IGetPlanResponseDTO> {
    const path = "plans.json";
    const response = await this.http.get<IGetPlanResponseDTO>(path);
    return response;
  }
}

export default PlanRepository;
