
import styles from  './spinner.module.scss';

type SpinnerProps = {
  size?: number;
};

export default function Spinner({ size = 50 }: SpinnerProps) {
  return (
    <div data-testid="spinner" className={styles.spinner}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width={size}
        height={size}
        style={{
          shapeRendering: 'auto',
          display: 'block',
          background: 'transparent',
        }}
      >
        <g>
          <circle
            strokeDasharray="169.64600329384882 58.548667764616276"
            r="36"
            strokeWidth="10"
            stroke="#f3ded7"
            fill="none"
            cy="50"
            cx="50"
          >
            <animateTransform
              keyTimes="0;1"
              values="0 50 50;360 50 50"
              dur="1.25s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            />
          </circle>
          <g />
        </g>
      </svg>
    </div>
  );
}
