export const setDefaultImage = (students) =>
  students.map((student) => ({
    ...student,
    avatarUrl: student.avatarUrl || '/avatar.svg',
  }))
