import React from 'react';
import { Search } from 'lucide-react';

interface SearchFilterProps {
  search: string;
  setSearch: (search: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  setSearch,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search backgrounds..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-purple-400 dark:focus:ring-purple-400"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === 'all'
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter('grid')}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === 'grid'
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => setActiveFilter('gradient')}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === 'gradient'
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Gradient
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;