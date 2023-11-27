// SearchBar.tsx
import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded-l focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
