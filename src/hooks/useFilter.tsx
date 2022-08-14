export default function useFilter(clientes: any, search: any) {
  const result = clientes.filter((cliente: any) => {
    return `${cliente.Name} ${cliente.Price}`
      .toLowerCase()
      .includes(search.toLowerCase());
  });
  return result;
}
