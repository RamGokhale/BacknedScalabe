class HealthService {
  getHealthStatus() {
    return {
      status: "UP",
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    };
  }
}

export const healthService = new HealthService();
