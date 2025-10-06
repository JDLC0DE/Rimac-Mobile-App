export interface IGetPlanResponseDTO {
  list: List[]
}

export interface List {
  name: string
  price: number
  description: string[]
  age: number
}
