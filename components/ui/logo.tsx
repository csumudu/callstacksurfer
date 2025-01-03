import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <svg width="250" height="75" xmlns="http://www.w3.org/2000/svg">
        <g className="layer">
          <title>Layer 1</title>
          <g className="layer" id="svg_4">
            <text
              fill="#000000"
              fontFamily="Monospace"
              fontSize="30"
              id="svg_1"
              stroke="#000000"
              strokeWidth="0"
              textAnchor="middle"
              x="41.5"
              y="46.40625"
            >
              call
            </text>
            <text
              fill="#333333"
              fontFamily="Fantasy"
              fontSize="26"
              fontStyle="normal"
              fontWeight="bold"
              id="svg_2"
              stroke="#a32323"
              strokeWidth="0"
              textAnchor="middle"
              x="105.75"
              y="46.40625"
            >
              STACK
            </text>
            <text
              fill="#000000"
              fontFamily="serif"
              fontSize="24"
              fontStyle="italic"
              id="svg_3"
              stroke="#000000"
              strokeWidth="0"
              textAnchor="middle"
              x="191"
              y="46.90625"
            >
              surfer.com
            </text>
          </g>
        </g>
      </svg>
    </Link>
  );
}
