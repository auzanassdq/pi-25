export const MOCK_DATA = {
  users: [
    {
      id: 1,
      name: "James",
      email: "james@mail.com",
      level: 2,
      xp: 120,
      streak: 3,
      badges: ["🔥 3 Days Streak", "💪 First Challenge Done"]
    }
  ],
  challenges: [
    {
      id: 101,
      title: "30 Push-up Hari Ini",
      type: "daily",
      target: 30,
      unit: "reps",
      reward_xp: 10,
      description: "Selesaikan 30 push-up untuk dapat 10 XP",
      category: "Lower Body",
      duration: "15 mins"
    },
    {
      id: 102,
      title: "Lari 5 KM Minggu Ini",
      type: "weekly",
      target: 5,
      unit: "km",
      reward_xp: 50,
      description: "Selesaikan lari 5KM untuk dapat 50 XP",
      category: "Cardio",
      duration: "30 mins"
    }
  ],
  progress: [
    {
      user_id: 1,
      challenge_id: 101,
      progress: 20,
      status: "in_progress"
    },
    {
      user_id: 1,
      challenge_id: 102,
      progress: 2,
      status: "in_progress"
    }
  ]
}