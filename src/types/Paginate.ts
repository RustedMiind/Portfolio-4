export interface Paginate<T> {
  data: T[];
  pages: number;
  page: number;
  limit: number;
  items: number;
}
