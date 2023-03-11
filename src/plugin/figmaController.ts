import { MESSAGE_CHANGE_PROPERTIES } from '../common/constants';
import { TMessage } from '../common/types';
import { onSelectionChange } from './events/onSelectionHandler';
import { onSortMessage } from './events/onSortMessageHandler';

figma.showUI(__html__, { width: 400, height: 665 });

figma.on('selectionchange', () => {
  const msg = onSelectionChange(figma.currentPage);

  (Array.isArray(msg) ? msg : [msg]).forEach((item) => {
    if (item.type === MESSAGE_CHANGE_PROPERTIES) {
      const sortMsg = onSortMessage(figma.currentPage, item.payload);

      if (sortMsg) {
        figma.ui.postMessage(sortMsg);
      }
    }
    figma.ui.postMessage(item);
  });
});

figma.on('run', () => {
  const msg = onSelectionChange(figma.currentPage);

  (Array.isArray(msg) ? msg : [msg]).forEach((item) => {
    if (item.type === MESSAGE_CHANGE_PROPERTIES) {
      const sortMsg = onSortMessage(figma.currentPage, item.payload);

      if (sortMsg) {
        figma.ui.postMessage(sortMsg);
      }
    }
    figma.ui.postMessage(item);
  });
});

figma.ui.onmessage = (msg: TMessage) => {
  if (msg.type === MESSAGE_CHANGE_PROPERTIES) {
    const sortMsg = onSortMessage(figma.currentPage, msg.payload);

    if (sortMsg) {
      figma.ui.postMessage(sortMsg);
    }
  }
};
