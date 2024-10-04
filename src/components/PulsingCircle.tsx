import { css, cva } from '../../styled-system/css';

const circle = cva({
  base: {
    borderRadius: '9999px',
  },
  variants: {
    variant: {
      default: {
        '--bg-color': 'token(colors.blue.500)',
        '--bg-color-30': 'token(colors.blue.500/30)',
      },
      error: {
        '--bg-color': 'token(colors.red.500)',
        '--bg-color-30': 'token(colors.red.500/30)',
      },
      warning: {
        '--bg-color': 'token(colors.yellow.500)',
        '--bg-color-30': 'token(colors.yellow.500/30)',
      },
      success: {
        '--bg-color': 'token(colors.emerald.500)',
        '--bg-color-30': 'token(colors.emerald.500/30)',
      },
      normal: {
        '--bg-color': 'token(colors.purple.500)',
        '--bg-color-30': 'token(colors.purple.500/30)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function PulsingCircle({
  variant,
}: {
  variant?: 'default' | 'error' | 'warning' | 'success' | 'normal';
}) {
  return (
    <span
      className={css(
        {
          backgroundColor: 'var(--bg-color-30)',
          padding: '.25rem',
          flexShrink: '0',
          animation: 'pulse 2s cubic-bezier(.4,0,.6,1) infinite',
        },
        circle.raw({ variant: variant })
      )}
    >
      <span
        className={css(
          {
            backgroundColor: 'var(--bg-color)',
            height: '0.5rem',
            width: '0.5rem',
            display: 'block',
          },
          circle.raw({ variant: variant })
        )}
      ></span>
    </span>
  );
}

export default PulsingCircle;
