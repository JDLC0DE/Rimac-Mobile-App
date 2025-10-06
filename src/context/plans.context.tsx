import { createContext, useContext, useState } from "react";
import GetPlanEntity from "../features/Plans/domain/entities/getPlans.entity";

type PlanState = DataState<GetPlanEntity>;

interface DataState<T> {
  isLoading: boolean;
  error: boolean;
  data: T[];
}

type Props = {
  children: React.ReactNode;
};

interface Context {
  plansData: PlanState;
  setPlansData: React.Dispatch<React.SetStateAction<PlanState>>;
}

const PlansContext = createContext<Context>({} as Context);

const initState = {
  isLoading: false,
  error: false,
  data: [],
};

export const PlansProvider: React.FC<Props> = ({ children }) => {
  const [plansData, setPlansData] = useState<PlanState>(initState);

  return (
    <PlansContext.Provider
      value={{
        plansData,
        setPlansData,
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export const usePlans = (): Context => useContext(PlansContext);
