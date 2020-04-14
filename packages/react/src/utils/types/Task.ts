/* eslint-disable no-underscore-dangle */
class Task {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _id: number,
    private _name: string,
    private _isDone: boolean,
  ) {}

  public get id(): number {
    return this._id;
  }

  public get isDone(): boolean {
    return this._isDone;
  }

  public set isDone(value: boolean) {
    this._isDone = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}

export default Task;
