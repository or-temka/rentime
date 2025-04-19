type PlayTriangleProps = React.SVGProps<SVGSVGElement>

export const PlayTriangle = ({ ...rest }: PlayTriangleProps) => {
  return (
    <svg
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <path
        d="M8.4375 5.2535L0.230766 9.99166L0.230766 0.515344L8.4375 5.2535Z"
        fill="white"
      />
    </svg>
  )
}
