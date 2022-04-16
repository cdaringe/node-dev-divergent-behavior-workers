# node-dev divergent behavior with worker

## demo

1. `npm install`
2. run without node-dev: `npm run start-without-node-dev`
   1. this demonstrates the expected `stdio` output

```
[demo]: running worker method (type: function)
[demo]: error - logged without node-dev, not logged with node-dev Error: bummer, i'm caught in index.ts
[demo]: event - logged without node-dev, not logged with node-dev. Error: bummer, i'm caught in index.ts
```

3. run with node-dev: `npm start`
   1. observe only messaging present:

```
[demo]: running worker method (type: function)
```
