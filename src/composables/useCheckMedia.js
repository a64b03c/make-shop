import { useMediaQuery } from "@vueuse/core";

export const useCheckMedia = () => {
  const isPc = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 576px) and (max-width: 1200px)");
  const isPhone = useMediaQuery("(max-width: 576px)");

  return {
    isPc,
    isTablet,
    isPhone,
  };
};
