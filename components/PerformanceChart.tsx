'use client';

import { useEffect, useRef } from 'react';

interface Metrics {
  lcp: number;
  fid: number;
  cls: number;
}

interface PerformanceChartProps {
  beforeMetrics: Metrics;
  afterMetrics: Metrics;
}

export default function PerformanceChart({ beforeMetrics, afterMetrics }: PerformanceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Chart dimensions
    const chartWidth = canvas.width - 60;
    const chartHeight = canvas.height - 60;
    const startX = 50;
    const startY = canvas.height - 30;

    // Data
    const metrics: Array<{ name: string; before: number; after: number; max: number }> = [
      { name: 'LCP', before: beforeMetrics.lcp, after: afterMetrics.lcp, max: 5000 },
      { name: 'FID', before: beforeMetrics.fid, after: afterMetrics.fid, max: 200 },
      { name: 'CLS', before: beforeMetrics.cls * 100, after: afterMetrics.cls * 100, max: 50 }
    ];

    const barWidth = chartWidth / metrics.length / 3;
    const gap = barWidth / 2;

    // Draw bars
    metrics.forEach((metric, index) => {
      const x = startX + index * (barWidth * 3 + gap);

      // Before bar
      const beforeHeight = (metric.before / metric.max) * chartHeight;
      ctx.fillStyle = '#ff6b4a';
      ctx.fillRect(x, startY - beforeHeight, barWidth, beforeHeight);

      // After bar
      const afterHeight = (metric.after / metric.max) * chartHeight;
      ctx.fillStyle = '#22d3ee';
      ctx.fillRect(x + barWidth + 5, startY - afterHeight, barWidth, afterHeight);

      // Labels
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(metric.name, x + barWidth, startY + 20);

      // Values
      ctx.fillStyle = '#ff6b4a';
      ctx.fillText(metric.before.toFixed(0), x + barWidth / 2, startY - beforeHeight - 5);
      ctx.fillStyle = '#22d3ee';
      ctx.fillText(metric.after.toFixed(0), x + barWidth * 2.5, startY - afterHeight - 5);
    });

    // Draw axes
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + chartWidth, startY);
    ctx.stroke();

    // Legend
    ctx.fillStyle = '#ff6b4a';
    ctx.fillRect(startX, 10, 15, 15);
    ctx.fillStyle = '#cbd5e1';
    ctx.textAlign = 'left';
    ctx.fillText('Before', startX + 20, 22);

    ctx.fillStyle = '#22d3ee';
    ctx.fillRect(startX + 100, 10, 15, 15);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('After', startX + 120, 22);

  }, [beforeMetrics, afterMetrics]);

  return (
    <div style={{ padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📈 Performance Impact Visualization</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={250}
        style={{ width: '100%', height: 'auto' }}
      />
      <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
        <div style={{ padding: 12, borderRadius: 8, background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500 }}>🚀 Overall Performance Improvement</div>
          <div style={{ color: '#cbd5e1', fontSize: 12, marginTop: 4 }}>
            LCP: {((beforeMetrics.lcp - afterMetrics.lcp) / beforeMetrics.lcp * 100).toFixed(0)}% faster |
            FID: {((beforeMetrics.fid - afterMetrics.fid) / beforeMetrics.fid * 100).toFixed(0)}% faster |
            CLS: {((beforeMetrics.cls - afterMetrics.cls) / beforeMetrics.cls * 100).toFixed(0)}% better
          </div>
        </div>
      </div>
    </div>
  );
}
