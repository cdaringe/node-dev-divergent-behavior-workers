import * as jw from "jest-worker";
import path from "path";

const log = (msg: string) => console.log(`${__filename}: ${msg}`);

process.on("unhandledRejection", (err) => {
  log(`im not emitted with node-dev, but expected to be. ${err}`);
  process.exit(3);
});

async function go() {
  const workerModuleFilename = path.resolve(__dirname, "worker.js");
  const worker = new jw.Worker(workerModuleFilename);
  log(`about to run method (${typeof (worker as any).fails})`);

  /**
   * This is where it breaks down.
   * `.fails()` is a method on the worker with a promise interface.
   * However, node-dev
   */
  const result = await (worker as any).fails().catch((err: unknown) => {
    log(
      `this is logged when not using node-dev, but is not logged with node-dev ${err}`
    );
    throw err;
  });
}

go();
