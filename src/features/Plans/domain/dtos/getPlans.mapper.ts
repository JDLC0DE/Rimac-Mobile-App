import GetPlanEntity from "../entities/getPlans.entity";
import { IGetPlanResponseDTO } from "./getPlans.response";

class GetPlanMapperClass {
  public static instance: GetPlanMapperClass;

  static getIntance() {
    if (!this.instance) {
      this.instance = new GetPlanMapperClass();
    }
    return this.instance;
  }

  toEntity(payload: IGetPlanResponseDTO): GetPlanEntity[] {
    return payload.list.map(
      (plan) =>
        new GetPlanEntity(plan.name, plan.price, plan.description, plan.age)
    );
  }
}

const GetPlanMapper = GetPlanMapperClass.getIntance();
export default GetPlanMapper;
