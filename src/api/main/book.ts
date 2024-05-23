// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/service';

/** 创建 POST /book */
export async function createBook(body: API.CreateBookDto, options?: { [key: string]: any }) {
  return request<API.ResultVo & { records?: API.Book[] }>('/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单个查询 GET /book/${param0} */
export async function findOneBook(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findOneBookParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVo & { records?: API.Book[] }>(`/book/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 DELETE /book/${param0} */
export async function removeBook(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeBookParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVo & { records?: API.Book[] }>(`/book/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改 PATCH /book/${param0} */
export async function updateBook(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateBookParams,
  body: API.CreateBookDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVo & { records?: API.Book[] }>(`/book/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 GET /book/paginate */
export async function paginateBook(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.paginateBookParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultVo & { data?: API.PaginationVo }>('/book/paginate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
