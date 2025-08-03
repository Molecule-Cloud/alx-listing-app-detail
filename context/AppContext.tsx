import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the shape of our application state
export interface AppState {
  // User state
  user: {
    isAuthenticated: boolean;
    profile: {
      name: string;
      email: string;
      avatar?: string;
    } | null;
  };
  
  // Search state
  search: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    isSearching: boolean;
  };
  
  // UI state
  ui: {
    showMobileMenu: boolean;
    showSearchModal: boolean;
    theme: 'light' | 'dark';
    loading: boolean;
  };
  
  // Booking state
  booking: {
    selectedProperty: string | null;
    currentStep: 'search' | 'details' | 'booking' | 'confirmation';
    dates: {
      checkIn: string;
      checkOut: string;
    };
    guests: number;
  };
}

// Define action types
export type AppAction =
  | { type: 'SET_USER'; payload: AppState['user'] }
  | { type: 'SET_SEARCH'; payload: Partial<AppState['search']> }
  | { type: 'SET_UI'; payload: Partial<AppState['ui']> }
  | { type: 'SET_BOOKING'; payload: Partial<AppState['booking']> }
  | { type: 'RESET_SEARCH' }
  | { type: 'RESET_BOOKING' }
  | { type: 'LOGIN'; payload: { name: string; email: string; avatar?: string } }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_MOBILE_MENU' }
  | { type: 'TOGGLE_SEARCH_MODAL' }
  | { type: 'SET_LOADING'; payload: boolean };

// Initial state
const initialState: AppState = {
  user: {
    isAuthenticated: false,
    profile: null,
  },
  search: {
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    isSearching: false,
  },
  ui: {
    showMobileMenu: false,
    showSearchModal: false,
    theme: 'light',
    loading: false,
  },
  booking: {
    selectedProperty: null,
    currentStep: 'search',
    dates: {
      checkIn: '',
      checkOut: '',
    },
    guests: 1,
  },
};

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    
    case 'SET_SEARCH':
      return {
        ...state,
        search: {
          ...state.search,
          ...action.payload,
        },
      };
    
    case 'SET_UI':
      return {
        ...state,
        ui: {
          ...state.ui,
          ...action.payload,
        },
      };
    
    case 'SET_BOOKING':
      return {
        ...state,
        booking: {
          ...state.booking,
          ...action.payload,
        },
      };
    
    case 'RESET_SEARCH':
      return {
        ...state,
        search: initialState.search,
      };
    
    case 'RESET_BOOKING':
      return {
        ...state,
        booking: initialState.booking,
      };
    
    case 'LOGIN':
      return {
        ...state,
        user: {
          isAuthenticated: true,
          profile: action.payload,
        },
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: {
          isAuthenticated: false,
          profile: null,
        },
      };
    
    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        ui: {
          ...state.ui,
          showMobileMenu: !state.ui.showMobileMenu,
        },
      };
    
    case 'TOGGLE_SEARCH_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          showSearchModal: !state.ui.showSearchModal,
        },
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        ui: {
          ...state.ui,
          loading: action.payload,
        },
      };
    
    default:
      return state;
  }
};

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Action creators for common operations
export const useAppActions = () => {
  const { dispatch } = useAppContext();
  
  return {
    // User actions
    login: (user: { name: string; email: string; avatar?: string }) => {
      dispatch({ type: 'LOGIN', payload: user });
    },
    
    logout: () => {
      dispatch({ type: 'LOGOUT' });
    },
    
    // Search actions
    updateSearch: (searchData: Partial<AppState['search']>) => {
      dispatch({ type: 'SET_SEARCH', payload: searchData });
    },
    
    resetSearch: () => {
      dispatch({ type: 'RESET_SEARCH' });
    },
    
    // UI actions
    toggleMobileMenu: () => {
      dispatch({ type: 'TOGGLE_MOBILE_MENU' });
    },
    
    toggleSearchModal: () => {
      dispatch({ type: 'TOGGLE_SEARCH_MODAL' });
    },
    
    setLoading: (loading: boolean) => {
      dispatch({ type: 'SET_LOADING', payload: loading });
    },
    
    // Booking actions
    updateBooking: (bookingData: Partial<AppState['booking']>) => {
      dispatch({ type: 'SET_BOOKING', payload: bookingData });
    },
    
    resetBooking: () => {
      dispatch({ type: 'RESET_BOOKING' });
    },
  };
};
