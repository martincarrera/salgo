module.exports = {
  map(order) {
    return {
      text: order.text,
      createdBy: {
        team: {
          id: order.team_id,
          domain: order.team_domain,
        },
        user: {
          id: order.user_id,
          name: order.user_name,
        },
        channel: {
          id: order.channel_id,
          name: order.channel_name,
        },
      },
    };
  },
};
