'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input, Select } from '@headlessui/react';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Transition, Button } from '@headlessui/react'

const propertyTypes = [
  { id: 'all', name: 'Todos' },
  { id: 'casa', name: 'Casa' },
  { id: 'departamento', name: 'Departamento' },
];

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [city, setCity] = useState(searchParams.get('city') || '');
  const [type, setType] = useState(searchParams.get('type') || 'all');

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (city) params.set('city', city);
    if (type !== 'all') params.set('type', type);

    router.push(`/ownership?${params.toString()}`);
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <label>Ciudad</label>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Buscar por ciudad"
              className="border rounded-md w-full bg-white text-black text-sm p-2 focus:outline-none pl-10"
            />
          </div>
        </div>

        <div>
          <label>Tipo de propiedad</label>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-md w-full bg-white text-black text-sm p-2 focus:outline-none cursor-pointer "
          >
            {propertyTypes.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </Select>
        </div>

      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Transition show={true}>
          <Button
            onClick={applyFilters}
            className="w-10 h-10 flex items-center justify-center bg-black text-white cursor-pointer hover:bg-gray-800 rounded-full transition duration-300 ease-in data-closed:opacity-0"
          >
            <FunnelIcon className="w-5 h-5" />
          </Button>
        </Transition>

        <Button
          onClick={() => {
            setCity('');
            setType('all');
            router.push('/ownership');
          }}
          className="w-10 h-10 flex items-center justify-center bg-black text-white cursor-pointer hover:bg-gray-800 rounded-full transition duration-300 ease-in data-closed:opacity-0"
          >
          <XMarkIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
