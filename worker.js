module.exports = {
  fails: async () => {
    await new Promise((res) => setTimeout(res, 5));
    throw new Error("bummer, i'm caught in index.ts");
  },
};
