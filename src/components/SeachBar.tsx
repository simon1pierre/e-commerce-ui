import { Search } from 'lucide-react'
import React from 'react'
const SeachBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
        {/* seach icon */}
        <Search className='w-4 h-4 bg-grey-600'/>
        <input type="text" id='seach'  className='text-sm oultline-1' placeholder='Seach....'/>
        {/* seach input */}
    </div>
  )
}
export default SeachBar
