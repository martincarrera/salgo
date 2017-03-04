module.exports = {
  map(list) {
    return {
      text: list.text,
      createdBy: {
        team: {
          id: list.team_id,
          domain: list.team_domain,
        },
        user: {
          id: list.user_id,
          name: list.user_name,
        },
        channel: {
          id: list.channel_id,
          name: list.channel_name,
        },
      },
    };
  },
};
