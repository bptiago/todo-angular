export interface Todo {
  id?: Number;
  content: string | null;
  isComplete: boolean;
  createdAt?: string;
  updatedAt?: string;
  UserId?: Number
}
