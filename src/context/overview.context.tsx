import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface Context {
  overviewData: any;
  setOverviewData: React.Dispatch<React.SetStateAction<any>>;
}

const OverviewContext = createContext<Context>({} as Context);

export const OverviewProvider: React.FC<Props> = ({ children }) => {
  const [overviewData, setOverviewData] = useState<any>({});

  return (
    <OverviewContext.Provider
      value={{
        overviewData,
        setOverviewData,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
};

export const useOverview = (): Context => useContext(OverviewContext);
