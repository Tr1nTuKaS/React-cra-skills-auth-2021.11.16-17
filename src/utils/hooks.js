import { useLocation } from "react-router";
// custom hook
export function useQuery(param) {
  const { search } = useLocation();
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());
  // console.log('LoginPage.js: match ===', params);
  const value = params[param];

  return value;
}
