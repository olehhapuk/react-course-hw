import { useParams } from 'react-router';

export function useTypedParams<Params extends Record<string, string>>() {
  return useParams() as Params;
}
