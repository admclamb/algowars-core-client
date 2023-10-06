export interface PaginationModel<T> {
  results: T[];
  page: number;
  size: number;
  totalPages: number;
}
