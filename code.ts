// CMYK Exporter Plugin Core Code
// This script runs in the Figma sandbox and interacts with the document.

// Show the plugin UI with specific dimensions matching Figma's native panels
figma.showUI(__html__, { width: 320, height: 360, themeColors: true });

// Function to notify the UI about the current selection state
function updateSelection() {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    figma.ui.postMessage({ type: 'selection-change', selected: false, name: '' });
  } else {
    // We export the first selected node
    const node = selection[0];
    figma.ui.postMessage({ type: 'selection-change', selected: true, name: node.name });
  }
}

// Watch for selection changes
figma.on('selectionchange', updateSelection);

// Trigger immediately on load to set initial state
updateSelection();

// Handle messages sent from the UI (ui.html)
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'export') {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({ type: 'error', message: 'Please select a layer to export.' });
      return;
    }

    const node = selection[0];
    
    try {
      // Export the selected node as PNG bytes at the user-specified scale
      const bytes = await node.exportAsync({
        format: 'PNG',
        constraint: { type: 'SCALE', value: msg.scale || 1 }
      });
      
      // Send the exported bytes back to the UI for color space conversion
      figma.ui.postMessage({
        type: 'export-result',
        bytes: bytes,
        name: node.name
      });
    } catch (error) {
      console.error(error);
      figma.ui.postMessage({
        type: 'error',
        message: 'Failed to export selected layer: ' + (error instanceof Error ? error.message : String(error))
      });
    }
  } else if (msg.type === 'notify') {
    figma.notify(msg.message);
  } else if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

