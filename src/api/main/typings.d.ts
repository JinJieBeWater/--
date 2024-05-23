declare namespace API {
  type Book = {
    id: number;
    name: string;
    author: string;
    desc: string;
    firstEdition: string;
    stock: number;
    price: Record<string, any>;
    createdAt: string;
  };

  type CreateBookDto = {
    /** 书籍名称 */
    name: string;
    /** 作者 */
    author: string;
    /** 书籍描述 */
    desc?: string;
    /** 书籍价格 */
    price: number;
    /** 库存 */
    stock: number;
    /** 出版日期 */
    firstEdition: string;
  };

  type findOneBookParams = {
    id: number;
  };

  type paginateBookParams = {
    /** 当前页码 */
    page: number;
    /** 每页条数 */
    limit: number;
    /** 名称 */
    name?: string;
    /** 作者 */
    author?: string;
    /** 排序方式(根据出版日期) */
    sortMethod?: 'asc' | 'desc';
  };

  type PaginationVo = {
    /** 数据 */
    records: string[];
    /** 每页条数 */
    limit: number;
    /** 当前页码 */
    page: number;
    /** 总条数数 */
    count: number;
    /** 是否超过总条数数 */
    exceedCount: boolean;
    /** 是否超过总页数 */
    exceedTotalPages: boolean;
  };

  type removeBookParams = {
    id: number;
  };

  type ResultVo = {
    /** 状态码 */
    code: number;
    /** 状态描述 */
    msg: string;
  };

  type updateBookParams = {
    id: number;
  };
}
