export interface ServiceMetrics {
  uptimeSeconds: number;
  timestamp: string;
}

export function getServiceMetrics(): ServiceMetrics {
  return {
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  };
}
