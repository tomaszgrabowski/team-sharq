import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { createBrowserHistory } from "history";

type StoreStructure = {
  [key: string]: any;
};

export const renderWithProviders = (
  component: React.ReactChild,
  storeStructure?: StoreStructure
) => {
  const mockStore = configureStore([thunk]);
  const store = mockStore(storeStructure ?? {});

  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  );
};
