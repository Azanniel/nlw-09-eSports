# Backend 🧙‍♂️
> Explicações do Instrutor Diego Fernandes sobre a montagem do backend da aplicação

## Entidades

### Game

- id
- title
- bannerUrl

### Ad

- id
- gameId
- name
- yearsPlaying
- discord
- weekDays
- hourStart
- hourEnd
- useVoiceChannel
- createdAt

Prefira salvar no banco de dados do que o anterior

1:30h -> 90 minutos

R$ 179,89 -> 17989

## Casos de uso
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio

# Tipos de parâmetros enviados ao backend

- Query:
  - Usados quando precisamos persistir estado
  - Usados para informações não sensíveis
  - Ficam disponíveis na url
  - São nomeados
- Route:
  - Parâmetros não nomeados da URL
  - Intrinsecamente reconhecidos na URL
  - Servem para identificar um recurso
- Body:
  - Quando enviamos várias informações para o backend/API
  - Utilizado para informações sensíveis