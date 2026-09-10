self.onmessage = (e) => {
  const n = e.data;
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.sqrt(i);
  }
  postMessage(total);
};