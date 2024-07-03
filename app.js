let currentPlayer = 1;
        const totalPlayers = 4;
        const playerPositions = [0, 0, 0, 0]; // Starting positions for all players

        document.getElementById('roll-dice-btn').addEventListener('click', rollDice);

        function rollDice() {
            const diceResult = Math.floor(Math.random() * 6) + 1;
            document.getElementById('dice-result').innerText = `Player ${currentPlayer} rolled: ${diceResult}`;
            movePlayer(currentPlayer, diceResult);
            checkWin(currentPlayer);
            nextPlayer();
        }

        function movePlayer(player, steps) {
            playerPositions[player - 1] += steps;
            console.log(`Player ${player} moves to position ${playerPositions[player - 1]}`);
            // Add code to update the UI with the player's new position
        }

        function nextPlayer() {
            currentPlayer = (currentPlayer % totalPlayers) + 1;
            console.log(`Next player: Player ${currentPlayer}`);
        }

        function checkWin(player) {
            if (playerPositions[player - 1] >= 100) { // Assuming 100 is the winning position
                alert(`Player ${player} wins!`);
                resetGame();
            }
        }

        function resetGame() {
            currentPlayer = 1;
            for (let i = 0; i < totalPlayers; i++) {
                playerPositions[i] = 0;
            }
            document.getElementById('dice-result').innerText = '';
            console.log('Game reset');
            // Add code to reset the UI
        }