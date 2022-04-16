import * as jw from "jest-worker";
import path from "path";

const log = (msg: string) => console.log(`[demo]: ${msg}`);

process.on("unhandledRejection", (err) => {
  log(`event - logged without node-dev, not logged with node-dev. ${err}`);
  process.exit(3);
});

async function go() {
  const workerModuleFilename = path.resolve(__dirname, "worker.js");
  const worker = new jw.Worker(workerModuleFilename);
  const fn = (worker as any).fails as () => Promise<void>;
  log(`running worker method (type: ${typeof fn})`);
  /**
   * This is where it breaks down.
   * `.fails()` is a method on the worker with a promise interface.
   * However, node-dev
   */
  await fn().catch((err: unknown) => {
    log(`error - logged without node-dev, not logged with node-dev ${err}`);
    throw err;
  });
}

go();
