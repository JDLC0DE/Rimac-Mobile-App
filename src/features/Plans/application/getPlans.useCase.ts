import { UseCase } from "@/src/shared/application/base";
import GetPlanMapper from "../domain/dtos/getPlans.mapper";
import GetPlanEntity from "../domain/entities/getPlans.entity";
import IPlansRepository from "../domain/repositories/plans.repository";
import PlanRepository from "../infrastructure/repositories/plans.repository.impl";

class GetPlanUseCaseClass implements UseCase<{}, Promise<GetPlanEntity[]>> {
  private readonly repository: IPlansRepository;
  public static instance: GetPlanUseCaseClass;

  static getInstance() {
    if (!this.instance) {
      this.instance = new GetPlanUseCaseClass();
    }
    return this.instance;
  }

  constructor(repository = PlanRepository.getInstance()) {
    this.repository = repository;
  }

  public async execute(): Promise<GetPlanEntity[]> {
    const response = await this.repository.getPlans();
    const entity = GetPlanMapper.toEntity(response);
    return entity;
  }
}

const GetPlanUseCase = GetPlanUseCaseClass.getInstance();
export default GetPlanUseCase;
