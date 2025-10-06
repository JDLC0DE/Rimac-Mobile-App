import { IGetPlanResponseDTO } from "../dtos/getPlans.response";

export default interface IPlansRepository {
  getPlans(): Promise<IGetPlanResponseDTO>
}