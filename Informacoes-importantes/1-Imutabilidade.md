### imutabilidade - Não pode alterar diretamente o conteudo de uma variavel, mais sim dar um novo valor

    usuarios = ['Andre', 'AdnreL', 'Paulo'] 
    usuarios.push('teste')
  
O problema dessa abordagem acima é que estamos realizando uma mutação no valor original da variavel usuarios
  
Usando a imutabilidade do React faremos da seguinte maneira
  
    novoUsuarios = [...usuarios, 'nomenovousuario']

Dessa forma criamos um espaço novo na memória contendo a nova informação evitando alterar uma informação que ja esta salva na memoria
Com isso temos uma melhor performance
