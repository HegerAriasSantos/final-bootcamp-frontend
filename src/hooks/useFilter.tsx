export default function useFilter(services: any, search: any) {
  const result = services.filter((service: any) => {
    return `${service.name} ${service.price}`
      .toLowerCase()
      .includes(search.toLowerCase());
  });
  return result;
}
