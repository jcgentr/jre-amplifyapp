import React from 'react'

import SidebarButton from './SidebarButton'

import transcriptsMetaData from '../static/transcriptsMetaData'

const Sidebar = ({ podcast, setPodcast }) => {
  return (
    <div className="sidebar">
      {transcriptsMetaData.map((transcript) => 
        <SidebarButton 
          name={transcript.name} 
          isSelected={podcast === transcript.podcastNumber} 
          podcastNumber={transcript.podcastNumber}
          setPodcast={setPodcast} 
        />
      )}
    </div>
  )
}

export default Sidebar
