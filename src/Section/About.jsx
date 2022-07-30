import React from 'react'
import "./Section.css"
import { useLocation } from 'react-router-dom'

export default function About() {
  const loc = useLocation()
  
  return (
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita necessitatibus aspernatur numquam officiis illum cumque, aliquam facilis hic. Commodi aspernatur illo voluptas quo! Accusamus repudiandae optio dignissimos quibusdam fuga, possimus officiis eveniet perferendis id dicta! Explicabo, voluptate beatae mollitia numquam eaque inventore adipisci temporibus minus nemo, sapiente, reprehenderit doloremque.
      <h4>Id: {loc.state.id}</h4>
    </div>
  )
}
