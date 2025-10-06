# Dispositivos-Moveis-3Bim-Atv02
# Alunos: João Pedro Guesser e Gabriel Albuquerque da Silva

## 🏦 App “Abrir Conta Bancária”
Aplicativo desenvolvido em React Native (Expo) com o objetivo de simular a abertura de uma conta bancária, coletando informações do usuário por meio de um formulário interativo e validando os dados antes de confirmar a criação da conta.


## 🧩 Componentização
O projeto foi dividido em componentes para melhor organização e reuso:

- CampoNome.tsx
- CampoIdade.tsx
- CampoSexo.tsx
- CampoLimite.tsx
- CampoEstudante.tsx

O estado principal (dados, erros e controle do botão) é gerenciado no componente App.tsx.

## 🖥️ Tecnologias Utilizadas

- React Native (Typescript)
- Expo (para execução multiplataforma)
- Componentes nativos: TextInput, Picker, Slider, Switch, Button, Alert

## 🧠 Lógica de Validação

Antes de permitir o envio:

- Verifica se todos os campos foram preenchidos.
- Garante que a idade seja maior ou igual a 18.
- Atualiza o estado de erro e o status do botão.

## 📱 Execução
Clonar o projeto
```bash
git clone (https://github.com/FilhoFavorito/Dispositivos-Moveis-3Bim-Atv02.git
cd Dispositivos-Moveis-3Bim-Atv02
```

Instalar dependências
```bash
npm install
```

Executar com Expo - Funciona em plataformas móveis e web
```bash
npx expo start
```


Exemplo de Saída:
```
Conta criada com sucesso!

Nome: João da Silva
Idade: 25
Sexo: Masculino
Limite: R$ 4.500
Estudante: Sim
```
