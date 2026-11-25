import { healthService } from "../services/health.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";

class HealthController {
  getHealth = async (req, res, next) => {
    try {
      const data = healthService.getHealthStatus();
      return new ApiResponse(200, data, "Server is healthy").send(res);
    } catch (error) {
      next(error);
    }
  };
}

export const healthController = new HealthController();
