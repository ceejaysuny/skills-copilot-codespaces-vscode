function skillsMember() {
  var member = new Member();
  member.skills = [
    new Skill('JavaScript', 5),
    new Skill('Angular', 4),
    new Skill('React', 3),
    new Skill('Node.js', 2),
    new Skill('MongoDB', 2),
  ];
  return member;
}