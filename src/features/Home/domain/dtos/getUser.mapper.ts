import GetUserEntity from "../entities/getUser.entity";
import { IGetUserResponseDTO } from "./getUser.response";

class GetUserMapperClass {
  public static instance: GetUserMapperClass;

  static getIntance() {
    if (!this.instance) {
      this.instance = new GetUserMapperClass();
    }
    return this.instance;
  }

  toEntity(payload: IGetUserResponseDTO): GetUserEntity {
    return new GetUserEntity(payload.name, payload.lastName, payload.birthDay);
  }
}

const GetUserMapper = GetUserMapperClass.getIntance();
export default GetUserMapper;
