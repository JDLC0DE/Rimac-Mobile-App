import { IGetUserResponseDTO } from "../dtos/getUser.response";

export default interface IHomeRepository {
  getUser(): Promise<IGetUserResponseDTO>
}