export interface FilterBarProps {
    onCityChange?: (city: string) => void;
    onTypeChange?: (type: string) => void;
    onPriceRangeChange?: (range: { min: number; max: number }) => void;
  }
  