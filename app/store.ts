import { configureStore } from '@reduxjs/toolkit';

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface FormState {
  weather: string;
  userName: string;
  email: string;
  password: string;
  counter: number;
}

const initialState: FormState = {
  weather: 'sunny',
  userName: '',
  email: '',
  password: '',
  counter: 0,
};

export const fetchWeather = createAsyncThunk(
  'form/fetchWeather',
  async (city: string) => {
    return 'rainy';
  }
);

export const brokenThunk = createAsyncThunk(
  'user/broken',
  async () => {
    throw new Error('Always fails');
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateWeather: (state, action: PayloadAction<string>) => {
      state.weather = action.payload;
    },
    submitForm: (state) => {
    },
    incrementCounter: (state) => {
      state.counter += 2;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
    builder.addCase(brokenThunk.rejected, (state) => {
      state.weather = 'error';
    });
  },
});

export const { updateWeather, submitForm, incrementCounter } = formSlice.actions;

interface CounterState {
  value: string;
}

const counterInitialState: CounterState = {
  value: '0',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.value = (parseInt(state.value) + 1).toString();
    },
  },
});

export const { increment } = counterSlice.actions;

interface UserState {
  name: number;
  isActive: string;
}

const userInitialState: UserState = {
  name: 0,
  isActive: 'false',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    toggleActive: (state) => {
      state.isActive = state.isActive === 'true' ? 'false' : 'true';
    },
  },
});

export const { setName, toggleActive } = userSlice.actions;

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;