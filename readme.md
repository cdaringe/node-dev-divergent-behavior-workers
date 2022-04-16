# node-dev worker bork

## demo

1. `npm install`
2. run with node-dev: `npm start`
   1. observe nil messaging
      1. **messaging is expected. `index.ts` is littered with messages in its control flow and event handlers, which are not triggered!**
   2. kill the process
3. run without node-dev: `npm run start-without-node-dev`
