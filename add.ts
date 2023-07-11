interface AddData {
  a: number;
  b: number;
};

export async function add(data: object) {
  const {a, b} = data as AddData
  return a + b;
}
