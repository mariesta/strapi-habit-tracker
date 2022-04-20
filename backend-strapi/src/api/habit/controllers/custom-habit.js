'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const habitModel = "api::habit.habit";
const habitLogModel = 'api::habit-log.habit-log';

module.exports = createCoreController(habitModel, ({ strapi }) => ({
  async getHabitWithLogs(ctx, next) {
    const { calendarDate, type } = ctx.request.query
    try {
      // Query all the habits of a particular type (say morning)
      const habits = await strapi.db.query(habitModel).findMany({
        where: {
          type: {
            $eq: type,
          }
        },
      });

      const habits_with_completed = habits.map(async (habit, i) => {
        // For each habit, query the logs
        // to see if there were completed that day
        let entries_logs = await strapi.db.query(habitLogModel).findMany({
          where: {
            $and: [
              {
                habit: habit.id,
              },
              {
                completionDate: { $eq: calendarDate },
              },
            ],
          },
        });
        // Add a completed key based on the logs found for that day
        return {
          completed: entries_logs.length > 0,
          ...habit
        }
      });
      ctx.body = await Promise.all(habits_with_completed);
    } catch (err) {
      ctx.body = err;
    }
  }
}));
