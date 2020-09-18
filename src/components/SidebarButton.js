import React from 'react'

const SidebarButton = ({name, podcastNumber, setPodcast, isSelected}) => {
  return (
    <button 
      onClick={() => setPodcast(podcastNumber)} 
      className={`epLink ${isSelected ? 'selected' : ''}`}
    >
      { name }
    </button>
  )
}

export default SidebarButton
