export type PeopleRole = 'student' | 'professor';

export interface Person {
  name: string;
  role: PeopleRole;
}

export const mockPeople: Person[] = [
  { name: 'Ava Thompson', role: 'student' },
  { name: 'Ben Carter', role: 'student' },
  { name: 'Cara Mitchell', role: 'student' },
  { name: 'Daniel Reed', role: 'student' },
  { name: 'Ella Johnson', role: 'student' },
  { name: 'Finn Parker', role: 'student' },
  { name: 'Grace Lee', role: 'student' },
  { name: 'Hannah Scott', role: 'student' },
  { name: 'Isaac Miller', role: 'student' },
  { name: 'Jade Wilson', role: 'student' },
  { name: 'Kieran Brooks', role: 'student' },
  { name: 'Lina Perez', role: 'student' },
  { name: 'Mason Hall', role: 'student' },
  { name: 'Nora Adams', role: 'student' },
  { name: 'Oliver Nguyen', role: 'student' },
  { name: 'Parker Ellis', role: 'student' },
  { name: 'Priya Shah', role: 'student' },
  { name: 'Quinn Foster', role: 'student' },
  { name: 'Riley Bennett', role: 'student' },
  { name: 'Sofia Ramirez', role: 'student' },
  { name: 'Theo Kim', role: 'student' },
  { name: 'Uma Patel', role: 'student' },
  { name: 'Victor Gomez', role: 'student' },
  { name: 'Willow Clark', role: 'student' },
  { name: 'Xavier Diaz', role: 'student' },
  { name: 'Yara Ahmed', role: 'student' },
  { name: 'Zoe Martin', role: 'student' },
  { name: 'Luca Bennett', role: 'student' },
  { name: 'Mia Collins', role: 'student' },
  { name: 'Diego Alvarez', role: 'student' },
  { name: 'Professor', role: 'professor' }
];