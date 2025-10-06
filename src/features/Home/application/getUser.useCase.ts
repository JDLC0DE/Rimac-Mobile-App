import { UseCase } from "@/src/shared/application/base";
import GetUserMapper from "../domain/dtos/getUser.mapper";
import GetUserEntity from "../domain/entities/getUser.entity";
import IHomeRepository from "../domain/repositories/home.repository";
import HomeRepository from "../infrastructure/repositories/home.repository.impl";

class GetUserUseCaseClass implements UseCase<{}, Promise<GetUserEntity>> {
  private readonly repository: IHomeRepository;
  public static instance: GetUserUseCaseClass;

  static getInstance() {
    if (!this.instance) {
      this.instance = new GetUserUseCaseClass();
    }
    return this.instance;
  }

  constructor(repository = HomeRepository.getInstance()) {
    this.repository = repository;
  }

  public async execute(): Promise<GetUserEntity> {
    const response = await this.repository.getUser();
    const entity = GetUserMapper.toEntity(response);
    return entity;
  }
}

const GetUserUseCase = GetUserUseCaseClass.getInstance();
export default GetUserUseCase;
