module.exports = {
  map(out) {
    return {
      text: out.text,
      createdBy: {
        team: {
          id: out.team_id,
          domain: out.team_domain,
        },
        user: {
          id: out.user_id,
          name: out.user_name,
        },
        channel: {
          id: out.channel_id,
          name: out.channel_name,
        },
      },
    };
  },
};
