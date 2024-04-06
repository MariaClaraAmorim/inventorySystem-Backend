export async function logout(): Promise<void> {
  try {
    return Promise.resolve();
  } catch (error) {
    console.error("Erro durante o logout:", error);
    throw new Error("Erro durante o logout");
  }
}
