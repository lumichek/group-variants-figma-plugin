import { MESSAGE_CHANGE_PROPERTIES } from '../common/constants';
import { TMessage } from '../common/types';
import { onSelectionChange } from './events/onSelectionHandler';
import { onSortMessage } from './events/onSortMessageHandler';

figma.showUI(__html__, { width: 480, height: 520 });

figma.on('selectionchange', () => {
  const msg = onSelectionChange(figma.currentPage);

  (Array.isArray(msg) ? msg : [msg]).forEach((item) => {
    if (item.type === MESSAGE_CHANGE_PROPERTIES) {
      onSortMessage(
        figma.currentPage,
        item.payload.properties,
        item.payload.directions,
        item.payload.gaps
      );
    }
    figma.ui.postMessage(item);
  });
});

figma.on('run', () => {
  const msg = onSelectionChange(figma.currentPage);

  (Array.isArray(msg) ? msg : [msg]).forEach((item) => {
    if (item.type === MESSAGE_CHANGE_PROPERTIES) {
      onSortMessage(
        figma.currentPage,
        item.payload.properties,
        item.payload.directions,
        item.payload.gaps
      );
    }
    figma.ui.postMessage(item);
  });
});

figma.ui.onmessage = (msg: TMessage) => {
  console.log('figma message', msg);
  if (msg.type === MESSAGE_CHANGE_PROPERTIES) {
    onSortMessage(
      figma.currentPage,
      msg.payload.properties,
      msg.payload.directions,
      msg.payload.gaps
    );
  }
};
