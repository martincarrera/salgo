module.exports = {
  map(back) {
    return {
      text: back.text,
      createdBy: {
        team: {
          id: back.team_id,
          domain: back.team_domain,
        },
        user: {
          id: back.user_id,
          name: back.user_name,
        },
        channel: {
          id: back.channel_id,
          name: back.channel_name,
        },
      },
    };
  },
};
