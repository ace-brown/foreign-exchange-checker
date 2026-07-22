const chartEl = document.getElementById("chart");

const chart = LightweightCharts.createChart(chartEl, {
  layout: {
    background: { color: "transparent" },
    textColor: "#9c9c9c",
  },
  grid: {
    vertLines: { color: "#2e2e2e" },
    horzLines: { color: "#2e2e2e" },
  },
  timeScale: {
    borderColor: "#2e2e2e",
  },
  rightPriceScale: {
    borderColor: "#2e2e2e",
  },
});

// const candleSelineries = chart.addCandlestickSeries({
//   upColor: "#22c55e",
//   downColor: "#ef4444",
//   borderVisible: false,
//   wickUpColor: "#22c55e",
//   wickDownColor: "#ef4444",
// });

// Fixed mock data — no randomization yet, just to see it render
// const mockData = [
//   { time: "2026-07-15", open: 0.89, high: 0.895, low: 0.885, close: 0.893 },
//   { time: "2026-07-16", open: 0.893, high: 0.9, low: 0.89, close: 0.898 },
//   { time: "2026-07-17", open: 0.898, high: 0.902, low: 0.891, close: 0.894 },
//   { time: "2026-07-18", open: 0.894, high: 0.899, low: 0.888, close: 0.897 },
//   { time: "2026-07-19", open: 0.897, high: 0.905, low: 0.895, close: 0.902 },
//   { time: "2026-07-20", open: 0.902, high: 0.908, low: 0.898, close: 0.899 },
//   { time: "2026-07-21", open: 0.899, high: 0.904, low: 0.893, close: 0.901 },
// ];

// candleSeries.setData(mockData);
// chart.timeScale().fitContent();

const areaSeries = chart.addAreaSeries({
  lineColor: "#c6f135",
  lineWidth: 2,
  topColor: "rgba(198, 241, 53, 0.4)",
  bottomColor: "rgba(198, 241, 53, 0.0)",
});

// Mock data with more pronounced peaks/valleys — looks like a mountain range
const mockData = [
  { time: "2026-07-10", value: 0.86 },
  { time: "2026-07-11", value: 0.878 },
  { time: "2026-07-12", value: 0.865 },
  { time: "2026-07-13", value: 0.91 },
  { time: "2026-07-14", value: 0.895 },
  { time: "2026-07-15", value: 0.93 },
  { time: "2026-07-16", value: 0.905 },
  { time: "2026-07-17", value: 0.94 },
  { time: "2026-07-18", value: 0.92 },
  { time: "2026-07-19", value: 0.96 },
  { time: "2026-07-20", value: 0.935 },
  { time: "2026-07-21", value: 0.955 },
];

areaSeries.setData(mockData);
chart.timeScale().fitContent();

window.addEventListener("resize", () => {
  chart.applyOptions({ with: chartEl.clientWidth });
});
