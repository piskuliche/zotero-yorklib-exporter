var YorklibExporter;

function log(message) {
  Zotero.debug(`Yorklib Exporter: ${message}`);
}

function install() {}

async function startup({ id, version, rootURI }) {
  log(`Starting ${version}`);
  Services.scriptloader.loadSubScript(rootURI + "yorklib-exporter.js");
  YorklibExporter.init({ id, version, rootURI });
  YorklibExporter.addToAllWindows();
}

function onMainWindowLoad({ window }) {
  YorklibExporter.addToWindow(window);
}

function onMainWindowUnload({ window }) {
  YorklibExporter.removeFromWindow(window);
}

function shutdown() {
  log("Shutting down");
  if (YorklibExporter) {
    YorklibExporter.removeFromAllWindows();
    YorklibExporter = undefined;
  }
}

function uninstall() {}
