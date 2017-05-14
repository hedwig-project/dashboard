export const getErrorMessageFromCode = (code) => {
  switch (code) {
    case 'auth/invalid-email': return 'E-mail inválido'
    case 'auth/wrong-password': return 'Senha incorreta'
    case 'auth/user-not-found': return 'Usuário não encontrado'
    default: return 'Erro desconhecido'
  }
}
