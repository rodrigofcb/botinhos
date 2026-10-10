# Botinhos

Jogo para duas pessoas no mesmo celular. Um boto rosa e um boto caramelo nadam por dez cidades, cada um do seu lado da tela, até se encontrarem no meio.

## Como jogar

- Celular na horizontal; cada pessoa toca no seu lado para o seu boto nadar para cima.
- Bater num obstáculo custa um coração (são três por fase, divididos entre os dois).
- Tocar ao mesmo tempo vale um beijinho; 5 beijinhos devolvem um coração.
- Estrelas por fase: nenhuma batida, sincronia de 60% ou mais e tempo dentro do limite.
- A cada 2 estrelas novas (contando a melhor marca de cada fase), um presente é aberto na tela de vitória, na ordem da linha do tempo. As 30 estrelas completam os 15 presentes do álbum.
- Sons gravados: "Gurl" quando os corações acabam e "Yay" nas 3 estrelas (pasta `sons/`, já cortados e com volume igualado).
- Cada fase começa com uma contagem 3, 2, 1, que também aparece ao sair da pausa.

## Idiomas

Português e espanhol (rioplatense). As bandeirinhas do Brasil e da Argentina ficam na tela inicial, abaixo do Álbum, e em Opções. Na primeira abertura, o jogo segue o idioma do aparelho; depois, a escolha fica salva.

## Pausa e opções

- O botão ⏸ ao lado da barra de progresso pausa a fase: Continuar, Reiniciar fase ou Fases.
- A fase também pausa sozinha quando o app vai para segundo plano (ligação, notificação) e com o botão voltar do Android, que antes fechava o jogo.
- Em **Opções**, na tela inicial: som e vibração liga/desliga e **Recomeçar a jornada**, que apaga fases, estrelas e álbum depois de uma confirmação.
- No álbum, cada presente já ganho tem **Abrir de novo**, que repete a animação da caixa.

## Fases

1. Salvador, manhã
2. Maranhão, meio-dia
3. Amazônia, chuva
4. São Paulo, garoa
5. Cidade do México, tarde
6. Buenos Aires, primavera
7. Rio de Janeiro, fim de tarde
8. Salvador, noite de lua
9. São Paulo, noite neon
10. Cataratas do Iguaçu, amanhecer

## Instalar no Android

1. Abra o endereço do jogo no Chrome (não no navegador interno de outro app).
2. Menu ⋮ > **Instalar app** (ou **Adicionar à tela inicial**).
3. O ícone aparece na gaveta de apps. O jogo abre em tela cheia, travado na horizontal, e funciona sem internet depois da primeira abertura.

Progresso, estrelas e álbum ficam salvos só no aparelho.

## Publicação

O workflow `.github/workflows/pages.yml` publica o site no GitHub Pages a cada push na branch `main`. Tudo é um único `index.html`, sem build; sons e desenhos são gerados por código.
