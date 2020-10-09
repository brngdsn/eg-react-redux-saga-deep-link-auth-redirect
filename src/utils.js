const useQuery = (useLocation) => {
  return new URLSearchParams(useLocation().search)
}

module.exports = {
  useQuery
}