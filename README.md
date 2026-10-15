# Botinhos

Jogo para duas pessoas no mesmo celular. Um boto rosa e um boto caramelo nadam por dez cidades, cada um do seu lado da tela, até se encontrarem no meio.

## Como jogar

- Celular na horizontal; cada pessoa toca no seu lado para o seu boto nadar para cima.
- Bater num obstáculo custa um coração (são três por fase, divididos entre os dois).
- Tocar ao mesmo tempo vale um beijinho; 5 beijinhos devolvem um coração.
- Cada rodada recebe uma nota interna de 0 a 1000, nunca mostrada: sincronia até 400 (proporcional), tempo até 300 (cheio até 80% do limite da fase, zero a partir de 140%) e dano até 300 (menos 100 por batida). Estrelas pelos cortes 400, 650 e 800; a fase guarda a melhor nota.
- Na vitória, uma barrinha enche com aceleração e freio até onde a nota chegou; cada estrela acende quando a barra passa por ela (a terceira toca o "Yay"). As estrelas ficam em 30%, 60% e 90% da barra; a barra cheia é a nota máxima.
- Desbloqueio no estilo Overcooked, com trava suave: além de concluir a fase anterior, a fase de número p (contando de 0) pede floor(1,5 × p) estrelas no total (fase 2 pede 1, fase 5 pede 6, fase 10 pede 13). O mapa mostra o pedido de cada fase trancada; na vitória, o botão da próxima fase vira "Faltam N ★" e leva ao mapa.
- Três conquistas por fase, com selos próprios (coração = nenhuma batida, os dois botinhos = sincronia de 60% ou mais, relógio = tempo dentro do limite), separadas da nota e das estrelas: ficam coloridas para sempre depois da primeira vez, em qualquer rodada. Na vitória, ✓ marca o que saiu nesta rodada e "Novo!" o que saiu pela primeira vez. Os selos aparecem também no mapa de fases e na abertura da fase.
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
