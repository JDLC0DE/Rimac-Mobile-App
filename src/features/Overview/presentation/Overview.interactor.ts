import { useOverview } from "@/src/context/overview.context";

export default function useOverviewInteractor() {
  const {
    overviewData: { user, plan },
  } = useOverview();

  const overviewFormat = {
    userName: user.name,
    documentType: user.document.split(" | ")[0],
    documentNumber: user.document.split(" | ")[1],
    phoneNumber: user.phone,
    planName: plan.name,
    planCost: plan.price,
  };

  return { overviewFormat };
}
