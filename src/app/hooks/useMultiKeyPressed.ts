import * as React from 'react';

export default function useMultiKeyPress() {
  const [keysPressed, setKeyPressed] = React.useState<Set<string>>(new Set([]));

  function downHandler({ key }: {key: string}) {
    setKeyPressed((prevKeyPressed) => {
      return new Set([...prevKeyPressed, key]);
    });
  }

  const upHandler = ({ key }: {key: string}) => {
    setKeyPressed((prevKeyPressed) => {
      return new Set([...prevKeyPressed].filter((item) => item !== key));
    });
  };

  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keysPressed;
}