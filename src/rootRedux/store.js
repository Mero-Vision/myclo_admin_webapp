// import { configureStore } from "@reduxjs/toolkit";
// import { accountingFirmApi } from "../apis/accountingFirmApi";
// import { authApi, authSlice } from "../apis/authApi";
// import { settingsApi } from "../apis/settingApi";
// import utilsSlice from "./utilsSlice";

// export default configureStore({
//   reducer: {
//     // example: exampleSlice,
//     utils: utilsSlice,
//     authData: authSlice.reducer,
//     [authApi.reducerPath]: authApi.reducer,
//     [accountingFirmApi.reducerPath]: accountingFirmApi.reducer,
//     [settingsApi.reducerPath]: settingsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(authApi.middleware)
//       .concat(accountingFirmApi.middleware)
//       .concat(settingsApi.middleware),
// });

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../api/authApi";
import { mainApi } from "../api/mainApi";
import utilsSlice from "./utilsSlice";

export default configureStore({
   reducer: {
      utils: utilsSlice,
      auth: authSlice.reducer,
      [mainApi.reducerPath]: mainApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(mainApi.middleware),
});
