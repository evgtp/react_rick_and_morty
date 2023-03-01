import React from 'react'
import ContentLoader from 'react-content-loader'
import '../Cutaway.css'

const CutawaySkeleton = () => (
  <ContentLoader
    className="Cutaway"
    speed={2}
    width={1170}
    height={164}
    viewBox="0 0 1170 164"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="322" y="90" rx="5" ry="5" width="4" height="0" />
    <rect x="178" y="14" rx="5" ry="5" width="262" height="24" />
    <rect x="280" y="85" rx="5" ry="5" width="11" height="3" />
    <rect x="178" y="51" rx="5" ry="5" width="107" height="14" />
    <rect x="178" y="72" rx="5" ry="5" width="150" height="15" />
    <rect x="178" y="92" rx="5" ry="5" width="128" height="14" />
    <rect x="340" y="51" rx="5" ry="5" width="54" height="17" />
    <rect x="419" y="86" rx="5" ry="5" width="0" height="1" />
    <rect x="340" y="70" rx="5" ry="5" width="70" height="17" />
    <rect x="340" y="93" rx="5" ry="5" width="166" height="15" />
    <rect x="0" y="0" rx="4" ry="4" width="162" height="162" />
    <rect x="535" y="68" rx="5" ry="5" width="150" height="15" />
    <rect x="535" y="45" rx="5" ry="5" width="150" height="14" />
    <rect x="1092" y="17" rx="5" ry="5" width="65" height="18" />
    <rect x="914" y="108" rx="5" ry="5" width="241" height="41" />
  </ContentLoader>
)

export default CutawaySkeleton
