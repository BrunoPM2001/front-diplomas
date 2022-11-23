export default function BackIcon ( props ) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" 
      viewBox="0 0 24 24" stroke-width="2.5"
      stroke-linecap="round" stroke-linejoin="round"
      width="25" height="25" stroke="#333333" fill="none"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="11" y2="18" />
      <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  )
}