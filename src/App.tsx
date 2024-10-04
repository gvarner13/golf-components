// import { useState } from 'react';
import { css } from '../styled-system/css';
import { container } from '../styled-system/patterns';
import PulsingCircle from './components/PulsingCircle';

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
