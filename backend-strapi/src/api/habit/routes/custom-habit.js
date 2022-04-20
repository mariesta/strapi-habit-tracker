'use strict';

module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/get-habits-with-logs",
      "handler": "custom-habit.getHabitWithLogs",
      "config": {
        "policies": []
      }
    },
  ]
};
