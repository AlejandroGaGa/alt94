'use client';

import { useState } from 'react';
import { Input, Select } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FilterBarProps } from '@/app/interfaces/Filters/FilterBarProps';




const propertyTypes = [
  { id: 'all', name: 'Todos los tipos' },
  { id: 'house', name: 'Casa' },
  { id: 'apartment', name: 'Departamento' },

];

const priceRanges = [
  { id: 'all', name: 'Cualquier precio', min: 0, max: 0 },
  { id: '0-100000', name: 'Hasta $100,000', min: 0, max: 100000 },
  { id: '100000-200000', name: '$100,000 - $200,000', min: 100000, max: 200000 },
  { id: '200000-300000', name: '$200,000 - $300,000', min: 200000, max: 300000 },
  { id: '300000-500000', name: '$300,000 - $500,000', min: 300000, max: 500000 },
  { id: '500000+', name: 'Más de $500,000', min: 500000, max: 999999999 },
];

export default function FilterBar({
  onCityChange,
  onTypeChange,
  onPriceRangeChange,
}: FilterBarProps) {
  const [selectedType, setSelectedType] = useState(propertyTypes[0]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [citySearch, setCitySearch] = useState('');

  const handleCityChange = (value: string) => {
    setCitySearch(value);
    onCityChange?.(value);
  };


  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <label htmlFor="city-search" className="block text-sm font-medium text-gray-700 mb-2">
            Ciudad
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="city-search"
              type="text"
              value={citySearch}
              onChange={(e) => handleCityChange(e.target.value)}
              placeholder="Buscar por ciudad..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none placeholder-gray-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de propiedad
          </label>
          <Select
            name="type-property"
            className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-sm border border-gray-300 focus:outline-none  sm:text-sm cursor-pointer"
          >
            {propertyTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rango de precio
          </label>
          <Select
            name="price-range"
            className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-sm border border-gray-300 focus:outline-none  sm:text-sm cursor-pointer"
          >
            {priceRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.name}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => {
            setCitySearch('');
            setSelectedType(propertyTypes[0]);
            setSelectedPriceRange(priceRanges[0]);
            onCityChange?.('');
            onTypeChange?.('all');
            onPriceRangeChange?.({ min: 0, max: 0 });
          }}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none cursor-pointer"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}

