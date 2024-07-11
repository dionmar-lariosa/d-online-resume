import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { TokenPayload_i } from './auth.interface';

const initialState: TokenPayload_i = {
  id: 0,
  suffix: null,
  uuid: '',
  email: '',
  name: '',
  access_token: '',
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    init(data: TokenPayload_i) {
      patchState(store, () => ({ ...data }));
    },
  }))
);
