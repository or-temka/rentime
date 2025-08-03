type BottomArrowSVGProps = React.SVGProps<SVGSVGElement>

export const BottomArrowSVG = ({ ...rest }: BottomArrowSVGProps) => {
  return (
    <svg
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <path
        d="M5.21745 13.8242L5.21745 1.17578M5.21745 13.8242L9.43359 9.60807M5.21745 13.8242L1.0013 9.60807"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
