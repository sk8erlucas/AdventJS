function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lastMerged = merged[merged.length - 1];

    if (intervals[i][0] > lastMerged[1]) {
      merged.push(intervals[i]);
    } else {
      lastMerged[1] = Math.max(lastMerged[1], intervals[i][1]);
    }
  }

  return merged;
}

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); // [[1, 2], [3, 4], [5, 6]]
