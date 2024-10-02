import { useState } from 'react';
import { css, cva } from '../styled-system/css';
import { container, stack } from '../styled-system/patterns';

const styles = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '3rem',
  padding: '10px 15px',
  textAlign: 'center',
});

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

//className={stack({ gap: '6', padding: '4', align: 'center' })}

function App() {
  return (
    <>
      <div
        className={css({
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <div
          className={css({
            position: 'absolute',
            inset: '0',
            height: '100%',
            width: '100%',
            backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px),
              linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          })}
        >
          <div className={container({ maxWidth: '3xl' })}>
            <div>
              <h2
                className={css({
                  fontSize: '3xl',
                  fontWeight: '700',
                  color: 'gray.900',
                  mt: '4',
                })}
              >
                Pulse Circle
              </h2>
              <p
                className={css({ fontSize: 'lg', color: 'gray.700', mt: '2' })}
              >
                Cool pulsing circle
              </p>
              <div
                className={css({
                  display: 'block',
                  width: '100%',
                  borderTopWidth: '1px',
                  borderColor: 'gray.500',
                  mt: '2',
                  mb: '12',
                })}
              ></div>
              <div
                className={css({
                  padding: '2.5rem',
                  backgroundColor: 'white',
                  borderWidth: '1px',
                  borderRadius: '.375rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    gap: '4',
                    justifyContent: 'center',
                  })}
                >
                  <PulsingCircle />
                  <PulsingCircle variant="warning" />
                  <PulsingCircle variant="error" />
                  <PulsingCircle variant="success" />
                  <PulsingCircle variant="normal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
