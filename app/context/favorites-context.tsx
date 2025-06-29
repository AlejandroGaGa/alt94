'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Property } from '../interfaces/RecomendationEngin/Property';

interface FavoritesState {
  favorites: Property[];
  isLoading: boolean;
}

interface FavoritesContextType {
  state: FavoritesState;
  addFavorite: (property: Property) => void;
  removeFavorite: (propertyId: number) => void;
  toggleFavorite: (property: Property) => void;
  isFavorite: (propertyId: number) => boolean;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Property }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'CLEAR_FAVORITES' }
  | { type: 'LOAD_FAVORITES'; payload: Property[] }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
};

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.some(fav => fav.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload),
      };

    case 'CLEAR_FAVORITES':
      return {
        ...state,
        favorites: [],
      };

    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
        isLoading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    const loadFavorites = () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          const favorites = JSON.parse(storedFavorites);
          dispatch({ type: 'LOAD_FAVORITES', payload: favorites });
        }
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [state.favorites]);

  const addFavorite = (property: Property) => {
    dispatch({ type: 'ADD_FAVORITE', payload: property });
  };

  const removeFavorite = (propertyId: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: propertyId });
  };

  const toggleFavorite = (property: Property) => {
    if (isFavorite(property.id)) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  const isFavorite = (propertyId: number): boolean => {
    return state.favorites.some(fav => fav.id === propertyId);
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const getFavoritesCount = (): number => {
    return state.favorites.length;
  };

  const value: FavoritesContextType = {
    state,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    getFavoritesCount,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const useFavoritesList = (): Property[] => {
  const { state } = useFavorites();
  return state.favorites;
};

export const useIsFavorite = (propertyId: number): boolean => {
  const { isFavorite } = useFavorites();
  return isFavorite(propertyId);
};

export const useFavoritesCount = (): number => {
  const { getFavoritesCount } = useFavorites();
  return getFavoritesCount();
}; 