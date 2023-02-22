import * as React from 'react';
import { TMessage } from './../../common/types';

export default function useMessage(messageHandlers = {}) {
  const postMessage = React.useCallback((message: TMessage) => {
    parent.postMessage({pluginMessage: message}, '*');
  }, []);

  React.useEffect(() => {
    window.onmessage = (event: {data: {pluginMessage: TMessage}}) => {
      const {type, payload} = event.data.pluginMessage;

      if (typeof messageHandlers?.[type] === 'function') {
        messageHandlers?.[type].call(null, payload);
      }
    };

    return () => {
      delete window.onmessage;
    }
  }, []);

  return postMessage;
}