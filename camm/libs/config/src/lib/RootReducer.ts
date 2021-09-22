import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { all, fork } from 'redux-saga/effects';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const AuthenticationPersistConfig = {
  key: 'authentication',
  storage,
  whitelist: ['authenticated'],
};

export const rootReducer = combineReducers({
  /*authentication: persistReducer(AuthenticationPersistConfig, authenticationReducer),
  temp: tempReducer,*/
});

export type RootState = StateType<typeof rootReducer>;

export function* rootSaga(): Generator {
/*yield all([fork(authenticationSaga)]);*/
}
