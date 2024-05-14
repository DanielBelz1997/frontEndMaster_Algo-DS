type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

export default class Queue<T> {
  public length;
}
