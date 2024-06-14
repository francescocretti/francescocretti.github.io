type SvgProps = {
  color?: string
  viewBox?: string
  width?: number
  height?: number
  children: React.ReactNode
}

export const Svg = ({
  color = "#fff",
  viewBox = "0 0 200 200",
  width = 100,
  height = 100,
  children,
}: SvgProps) => (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox={viewBox}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
  >
    {children}
  </svg>
)