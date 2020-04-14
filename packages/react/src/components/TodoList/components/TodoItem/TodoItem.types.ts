type Props = {
  id: number;
  name: string;
  isDone: boolean;
  onDelete: (id: number, e: Event) => void;
  onNameChange: (id: number, e: Event) => void;
  onStatusChange: (id: number, e: Event) => void;
  last: boolean;
}

export default Props;
