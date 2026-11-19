//Paginacion de la API

export interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface PaginationLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
  links: PaginationLinks;
}
