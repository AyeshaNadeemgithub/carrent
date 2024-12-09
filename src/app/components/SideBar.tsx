'use client'
import React from 'react';


type FilterOption = {
  label: string;
  count: number;
};

type CheckboxFilterProps = {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (option: string) => void;
};

type PriceFilterProps = {
  maxPrice: number;
  value: number;
  onChange: (value: number) => void;
};

// Reusable Checkbox Filter Component
const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
}) => (
  <div className="  ml-8 mb-16">
    <h3 className="text-gray-500  font-medium mb-4">{title}</h3>
    <div className="space-y-4 text-gray-600">
      {options.map((option) => (
        <label key={option.label} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-500 border-gray-300 rounded"
            checked={selectedOptions.includes(option.label)}
            onChange={() => onChange(option.label)}
          />
          <span>
            {option.label} <span className="text-gray-500">({option.count})</span>
          </span>
        </label>
      ))}
    </div>
  </div>
);

// Reusable Price Filter Component
const PriceFilter: React.FC<PriceFilterProps> = ({ maxPrice, value, onChange }) => (
  <div className="mb-6">
    <h3 className="text-lg font-medium mb-4">Price</h3>
    <input
      type="range"
      className="w-full"
      min={0}
      max={maxPrice}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
    <div className="mt-2 text-sm text-gray-700">Max: ${value.toFixed(2)}</div>
  </div>
);

const Sidebar: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>(['Sport', 'SUV']);
  const [selectedCapacities, setSelectedCapacities] = React.useState<string[]>(['2 Person', '8 or More']);
  const [price, setPrice] = React.useState(100);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
    );
  };

  return (
    <aside className="w-72 p-4 bg-white border-r border-gray-200">
      <CheckboxFilter
        title="TYPE"
        options={[
          { label: 'Sport', count: 10 },
          { label: 'SUV', count: 12 },
          { label: 'MPV', count: 16 },
          { label: 'Sedan', count: 20 },
          { label: 'Coupe', count: 14 },
          { label: 'Hatchback', count: 14 },
        ]}
        selectedOptions={selectedTypes}
        onChange={handleTypeChange}
      />
      <CheckboxFilter
        title="CAPACITY"
        options={[
          { label: '2 Person', count: 10 },
          { label: '4 Person', count: 14 },
          { label: '6 Person', count: 12 },
          { label: '8 or More', count: 16 },
        ]}
        selectedOptions={selectedCapacities}
        onChange={handleCapacityChange}
      />
      <PriceFilter maxPrice={100} value={price} onChange={setPrice} />
    </aside>
  );
};

export default Sidebar;
