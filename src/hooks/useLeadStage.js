import { useEffect, useState } from "react";
import { userAPI } from "../services/api";

const useLeadStage = () => {
  const [leadStage, setLeadStage] = useState(null);
  const [isLoadingStage, setIsLoadingStage] = useState(true);
  const [errorStage, setErrorStage] = useState(null);

  useEffect(() => {
    const fetchJourneyStep = async () => {
      setIsLoadingStage(true);
      try {
        const data = await userAPI.getJourney();
        setLeadStage(data?.journey?.lead_stage || null);
      } catch (err) {
        console.error("Error fetching journey step:", err);
        setErrorStage("Failed to load journey step");
      } finally {
        setIsLoadingStage(false);
      }
    };

    fetchJourneyStep();
  }, []);

  return { leadStage, isLoadingStage, errorStage };
};

export default useLeadStage;
