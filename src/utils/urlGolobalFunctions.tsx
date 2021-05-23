export const urlPagination = (query: URLSearchParams, selected: any, history: any) => {
  const forPage = 'page'
  if (!query.has(forPage) && selected !== 0) {
    query.append(forPage, selected + 1)
    history.push(`?${query.toString()}`)
  } else if (query.has(forPage) && selected !== 0) {
    query.set(forPage, selected + 1)
    history.push(`?${query.toString()}`)
  } else {
    query.delete(forPage)
    history.push(`?${query.toString()}`)
  }
}

export const urlSearch = (query: URLSearchParams, history: any, searchText: string) => {
  const forSearch = 'searchText'
  if (!query.has(forSearch) && searchText) {
    query.append(forSearch, searchText)
    history.push(`?${query.toString()}`)
  } else if (query.has(forSearch) && searchText) {
    query.set(forSearch, searchText)
    history.push(`?${query.toString()}`)
  } else {
    query.delete(forSearch)
    history.push(`?${query.toString()}`)
  }
}