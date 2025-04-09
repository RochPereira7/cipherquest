
        const challenges = {
            beginner: [
                {
                    level: 1,
                    encryptedMessage: "Khoor",
                    hint: "This is a Caesar Cipher, where each letter in the alphabet is shifted by a fixed number. Here, the shift is 3 positions forward (A becomes D, B becomes E, etc.). To decrypt, shift each letter back by 3. For example, K (11th letter) becomes H (8th letter). Try it with the whole word! Check the 'Learn' section for more on Caesar Ciphers.",
                    solution: "Hello",
                    cipherType: "Caesar"
                },
                {
                    level: 2,
                    encryptedMessage: ".... . .-.. .-.. ---",
                    hint: "This is Morse Code, where letters are represented by dots (·) and dashes (−). A space separates each letter, and a slash (/) separates words. Look at the sequence: ···· is H, · is E, ·−·· is L, etc. Use the Morse Code chart in the 'Learn' section to decode each part step-by-step.",
                    solution: "HELLO",
                    cipherType: "Morse"
                },
                {
                    level: 3,
                    encryptedMessage: "SVOOL",
                    hint: "This is an Atbash Cipher, a simple substitution where the alphabet is reversed (A becomes Z, B becomes Y, etc.). To decrypt, replace each letter with its opposite: S (19th from A) becomes H (8th from Z), V becomes E, and so on. Try mapping it out or use the 'Tools' section to test it!",
                    solution: "HELLO",
                    cipherType: "Atbash"
                },
                {
                    level: 4,
                    encryptedMessage: "Rpmmx",
                    hint: "This is another Caesar Cipher. The shift here is 5 positions forward (A becomes F, B becomes G, etc.). To decrypt, shift each letter back by 5. For example, R (18th letter) becomes M (13th letter). Work through each letter, and refer to the Caesar Cipher tool in 'Tools' if needed.",
                    solution: "Hello",
                    cipherType: "Caesar"
                },
                {
                    level: 5,
                    encryptedMessage: "Qefp fp x tfkpib",
                    hint: "This is a Caesar Cipher with a shift of 1 position forward (A becomes B, B becomes C, etc.). To decrypt, shift each letter back by 1. Start with 'Qefp': Q becomes P, E becomes D, etc. Spaces are preserved, so decode each word separately. See the 'Learn' section for a full alphabet shift example.",
                    solution: "This is a cipher",
                    cipherType: "Caesar"
                }
            ],
            intermediate: [
                {
                    level: 1,
                    encryptedMessage: "Vszzc Kcfzr",
                    hint: "This is a Vigenère Cipher, which uses a keyword to shift letters variably. The key here is 'key'. Repeat 'key' to match the message length (K-E-Y-K-E-Y), then shift each letter by the corresponding key letter's position (K=10, E=4, Y=24). For V, subtract 10 (K) from 21 (V) to get 11 (L), and continue. Check 'Learn' for Vigenère details!",
                    solution: "Hello World",
                    cipherType: "Vigenère"
                },
                {
                    level: 2,
                    encryptedMessage: "Qefp fp x tfkpib",
                    hint: "This is a Caesar Cipher, but the shift isn't given. Notice 'fp' appears twice—it's a common word like 'is'. If 'fp' is 'is', F (6th) shifts to I (9th), a shift of 3 forward. Decrypt by shifting back 3: Q becomes N, E becomes B, etc. Test with the Caesar tool in 'Tools' to confirm.",
                    solution: "This is a cipher",
                    cipherType: "Caesar"
                },
                {
                    level: 3,
                    encryptedMessage: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
                    hint: "This is Morse Code. Each group of dots and dashes represents a letter, with a space between letters and a slash (/) between words. Decode step-by-step: ···· is H, · is E, ·−·· is L, etc. The second word starts with ·−− (W). Use the Morse chart in 'Learn' to map it out.",
                    solution: "HELLO WORLD",
                    cipherType: "Morse"
                },
                {
                    level: 4,
                    encryptedMessage: "QSBKHO WZQKW",
                    hint: "This combines Atbash and Caesar Ciphers. First, apply Atbash (A ↔ Z): Q becomes J, S becomes H, etc., giving 'JHYPGL DZJDZ'. Then, shift back by 3 (Caesar, reverse of forward 3): J becomes G, H becomes E, etc. Result is two words. Try the 'Tools' section to experiment with both steps.",
                    solution: "HELLO WORLD",
                    cipherType: "Atbash + Caesar"
                },
                {
                    level: 5,
                    encryptedMessage: "Rbd bofq cloob",
                    hint: "This is a Vigenère Cipher with the key 'fun'. Repeat 'fun' (F=5, U=20, N=13) over the message. For 'Rbd': R (17) - F (5) = 12 (M), B (2) - U (20) + 26 = 8 (I), D (4) - N (13) + 26 = 17 (R). Decode each letter this way. See 'Learn' for a Vigenère example.",
                    solution: "You made cipher",
                    cipherType: "Vigenère"
                },
                {
                    level: 6,
                    encryptedMessage: "Pbqf fp x qfob",
                    hint: "This is a Caesar Cipher with a shift of 4 forward (A becomes E, B becomes F, etc.). To decrypt, shift each letter back by 4. For 'Pbqf': P (16) becomes L (12), B (2) becomes X (24), etc. Work through each word, and use the 'Tools' Caesar Cipher tool if stuck.",
                    solution: "This is a test",
                    cipherType: "Caesar"
                },
                {
                    level: 7,
                    encryptedMessage: ".... --- / .-.. . .- .-. -.",
                    hint: "This is Morse Code. Each sequence represents a letter, separated by spaces, with a slash (/) for words. Decode: ···· (H), −−− (O), ·−·· (W), etc. It's a short phrase. Refer to the Morse Code chart in 'Learn' and piece it together step-by-step.",
                    solution: "HOW LEARN",
                    cipherType: "Morse"
                },
                {
                    level: 8,
                    encryptedMessage: "Gsv hvxivg rh",
                    hint: "This is an Atbash Cipher, flipping the alphabet (A ↔ Z, B ↔ Y). For 'Gsv': G (7th from A) becomes T (7th from Z), S becomes H, V becomes E. Decode each word this way. Check the 'Tools' Atbash tool to verify your work.",
                    solution: "The secret is",
                    cipherType: "Atbash"
                },
                {
                    level: 9,
                    encryptedMessage: "Wkh txlfn eurzq",
                    hint: "This is a Caesar Cipher with an unknown shift. It's a common phrase ('The quick brown'). Guess the shift: if 'Wkh' is 'The', W (23) to T (20) is a shift of 3 forward. Shift back 3: W becomes T, K becomes H, etc. Use frequency (E is common) or the 'Tools' section.",
                    solution: "The quick brown",
                    cipherType: "Caesar"
                },
                {
                    level: 10,
                    encryptedMessage: "Rovvyc Vszzc",
                    hint: "This is a Vigenère Cipher. The key is 'pass' (P=15, A=0, S=18, S=18). Repeat it over the message. For 'Rovvyc': R (17) - P (15) = 2 (C), O (14) - A (0) = 14 (O), etc. Decode both words. See 'Learn' for Vigenère steps and examples.",
                    solution: "Welcome Hello",
                    cipherType: "Vigenère"
                }
            ],
            advanced: [
                {
                    level: 1,
                    encryptedMessage: "Rbd pelria qefp",
                    hint: "This is a Vigenère Cipher with the key 'secret' (S=18, E=4, C=2, R=17, E=4, T=19). Repeat the key over the message. For 'Rbd': R (17) - S (18) + 26 = 25 (Y), B (2) - E (4) + 26 = 24 (X), etc. Decrypt each letter carefully, and check 'Learn' for Vigenère guidance.",
                    solution: "You cracked this",
                    cipherType: "Vigenère"
                },
                {
                    level: 2,
                    encryptedMessage: "Wkh txlfn eurzq ira mxpsv",
                    hint: "This is a Caesar Cipher. The shift isn't given, but it's a familiar phrase. Look for 'Wkh' as 'The' (shift of 3 forward). Shift back 3: W to T, K to H, etc. Use frequency analysis (E is common) or the 'Tools' section to test your shift.",
                    solution: "The quick brown fox jumps",
                    cipherType: "Caesar"
                },
                {
                    level: 3,
                    encryptedMessage: ".... --- / .-.. . .- .-. -. / - --- / -.-. --- -.. .",
                    hint: "This is Morse Code. Each group of dots and dashes is a letter, separated by spaces, with a slash (/) between words. Start with ···· (H), −−− (O), ·−·· (W), etc. It's a phrase about programming. Use the 'Learn' Morse chart to decode it.",
                    solution: "HOW LEARN TO CODE",
                    cipherType: "Morse"
                },
                {
                    level: 4,
                    encryptedMessage: "ELQWK QEB TLOIA",
                    hint: "This combines Caesar and Atbash. First, shift back by 3 (Caesar reverse): E (5) becomes B (2), L becomes I, etc., giving 'BINTH NBY QILGX'. Then apply Atbash (A ↔ Z): B becomes Y, I becomes R, etc. Work through both steps—use 'Tools' to test.",
                    solution: "BREAK THE WORLD",
                    cipherType: "Caesar + Atbash"
                },
                {
                    level: 5,
                    encryptedMessage: "Hble Kxobqfslb",
                    hint: "This is a Vigenère Cipher with key 'puzzle' (P=15, U=20, Z=25, Z=25, L=11, E=4). Repeat the key. For 'Hble': H (8) - P (15) + 26 = 19 (T), B (2) - U (20) + 26 = 8 (I), etc. Decode carefully, and see 'Learn' for Vigenère help.",
                    solution: "Code Complexity",
                    cipherType: "Vigenère"
                },
                {
                    level: 6,
                    encryptedMessage: "48656c6c6f20576f726c64",
                    hint: "This is hexadecimal encoding. Each pair of characters represents one ASCII character. Convert each pair to decimal, then to its ASCII character. For example, 48 → 72 → 'H', 65 → 101 → 'e', etc. Use an ASCII table or online converter for help.",
                    solution: "Hello World",
                    cipherType: "Hexadecimal"
                },
                {
                    level: 7,
                    encryptedMessage: "72 101 108 108 111 32 87 111 114 108 100",
                    hint: "These are decimal ASCII codes. Convert each number to its corresponding ASCII character. For example, 72 → 'H', 101 → 'e', etc. The space is represented by 32. Use an ASCII table for reference.",
                    solution: "Hello World",
                    cipherType: "Decimal ASCII"
                },
                {
                    level: 8,
                    encryptedMessage: "aGVsbG8gd29ybGQ=",
                    hint: "This is Base64 encoding. Decode it using a Base64 decoder (available in the 'Tools' section). The result will be a familiar phrase. Base64 is commonly used for encoding binary data as text.",
                    solution: "hello world",
                    cipherType: "Base64"
                },
                {
                    level: 9,
                    encryptedMessage: "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100",
                    hint: "This is binary encoding. Each 8-digit sequence represents one ASCII character. Convert each binary sequence to decimal, then to its ASCII character. For example, 01001000 → 72 → 'H'.",
                    solution: "Hello World",
                    cipherType: "Binary"
                },
                {
                    level: 10,
                    encryptedMessage: "H3ll0 W0rld",
                    hint: "This is leetspeak (1337), where letters are replaced with similar-looking numbers/symbols. Decode by recognizing number substitutions: 3 → E, 0 → O, etc. The result is a common greeting.",
                    solution: "Hello World",
                    cipherType: "Leetspeak"
                },
                {
                    level: 11,
                    encryptedMessage: "H-e-l-l-o -W-o-r-l-d",
                    hint: "This is a simple pattern cipher with dashes separating letters. Remove the dashes to reveal the message. The challenge is recognizing the pattern rather than complex encryption.",
                    solution: "Hello World",
                    cipherType: "Pattern"
                },
                {
                    level: 12,
                    encryptedMessage: "HxExLxLxOx xWxOxRxLxD",
                    hint: "This is another pattern cipher with 'x's separating letters. Remove the 'x's to reveal the message. The pattern is consistent throughout the text.",
                    solution: "HELLO WORLD",
                    cipherType: "Pattern"
                },
                {
                    level: 13,
                    encryptedMessage: "uryyb jbeyq",
                    hint: "This is ROT13 cipher, a special case of Caesar cipher where letters are rotated by 13 positions. Apply ROT13 again to decode (since 26 letters means applying twice returns original).",
                    solution: "hello world",
                    cipherType: "ROT13"
                },
                {
                    level: 14,
                    encryptedMessage: "H3110 W0R1D",
                    hint: "This is another leetspeak variation with more substitutions. Decode: 3 → E, 1 → L, 0 → O. The result is a common greeting phrase.",
                    solution: "HELLO WORLD",
                    cipherType: "Leetspeak"
                },
                {
                    level: 15,
                    encryptedMessage: "H*E*L*L*O *W*O*R*L*D",
                    hint: "This is a pattern cipher with asterisks separating letters. Remove the asterisks to reveal the message. The pattern is consistent throughout the text.",
                    solution: "HELLO WORLD",
                    cipherType: "Pattern"
                }
            ],
            expert: [
                {
                    level: 1,
                    encryptedMessage: "Vszzc Pelria Qeb Tlria",
                    hint: "This is a Vigenère Cipher with a 6-letter key (hint: try 'secret', S=18, E=4, C=2, R=17, E=4, T=19). Repeat 'secret' over the message. For 'Vszzc': V (21) - S (18) = 3 (D), S (18) - E (4) = 14 (O), etc. Decode each word, adjusting for spaces. See 'Learn' for Vigenère tips.",
                    solution: "Hello Cracked The World",
                    cipherType: "Vigenère"
                },
                {
                    level: 2,
                    encryptedMessage: "Qefp fp x qbpq tfqe x obxi zexiibkdb",
                    hint: "This is a Caesar Cipher with an unknown shift. It's a longer text, so look for patterns like 'fp' ('is'?). If F to I (shift 3 forward), shift back 3: Q becomes N, E becomes B, etc. Use the 'Tools' Caesar tool and frequency analysis (E is common) to find the shift.",
                    solution: "This is a test with a real challenge",
                    cipherType: "Caesar"
                },
                {
                    level: 3,
                    encryptedMessage: ".... --- / .-.. . .- .-. -. / - --- / -.-. --- -.. . / .-- .. - .... / -.-. --- -- .--. .-.. . -..- .. - -.--",
                    hint: "This is Morse Code with multiple words. Each sequence is a letter (space-separated), and slashes (/) mark word breaks. Start with ···· (H), −−− (O), ·−·· (W), etc. It's a long phrase—use the 'Learn' Morse chart to decode step-by-step.",
                    solution: "HOW LEARN TO CODE WITH COMPLEXITY",
                    cipherType: "Morse"
                },
                {
                    level: 4,
                    encryptedMessage: "QEB TFII TLH QEBOEB",
                    hint: "This uses Caesar (shift 3 forward) and transposition. First, shift back 3: Q (17) becomes N (14), E becomes B, etc., giving 'NBY QFCC QHK NBYBY'. Then, unscramble the transposition (e.g., columnar with 3 columns) to reorder letters. Test in 'Tools' and adjust.",
                    solution: "THE HILL WORK THERE",
                    cipherType: "Caesar + Transposition"
                },
                {
                    level: 5,
                    encryptedMessage: "Pbob cloob qexq",
                    hint: "This is a Vigenère Cipher with key 'enigma' (E=4, N=13, I=8, G=6, M=12, A=0). Repeat the key. For 'Pbob': P (16) - E (4) = 12 (M), B (2) - N (13) + 26 = 15 (P), etc. Decode each word carefully—refer to 'Learn' for Vigenère steps.",
                    solution: "Here comes that",
                    cipherType: "Vigenère"
                },
                {
                    level: 6,
                    encryptedMessage: "0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100",
                    hint: "This is continuous binary without spaces. Split into 8-bit chunks (01001000, 01100101, etc.), convert each to decimal, then to ASCII characters. The result is a common greeting phrase.",
                    solution: "Hello World",
                    cipherType: "Binary"
                },
                {
                    level: 7,
                    encryptedMessage: "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==",
                    hint: "This is Base64 encoded. Decode it using a Base64 decoder to reveal a well-known pangram (a sentence containing every letter of the alphabet).",
                    solution: "The quick brown fox jumps over the lazy dog",
                    cipherType: "Base64"
                },
                {
                    level: 8,
                    encryptedMessage: "48 65 6C 6C 6F 20 57 6F 72 6C 64",
                    hint: "This is hexadecimal with spaces. Convert each pair to decimal, then to ASCII. For example, 48 → 72 → 'H', 65 → 101 → 'e', etc. The result is a common greeting.",
                    solution: "Hello World",
                    cipherType: "Hexadecimal"
                },
                {
                    level: 9,
                    encryptedMessage: "1A 1B 1C 1C 1F 27 1F 22 1C 14",
                    hint: "This is hexadecimal shifted by +10. First, convert each pair from hex to decimal (1A → 26), then subtract 10 (26-10=16 → ASCII 16 is non-printable). Instead, treat as positions in alphabet (1=A, 2=B, etc.), so 1A → 26 → Z, 1B → 27 → (no 27th letter), so likely just subtract 10 from hex value to get letter position (26-10=16 → P, 27-10=17 → Q, etc.).",
                    solution: "HELLOWORLD",
                    cipherType: "Hex+Shift"
                },
                {
                    level: 10,
                    encryptedMessage: "V2VsY29tZSB0byBDaXBoZXJRdWVzdA==",
                    hint: "This is Base64 encoded. Decode it to reveal a welcoming message to this platform.",
                    solution: "Welcome to CipherQuest",
                    cipherType: "Base64"
                },
                {
                    level: 11,
                    encryptedMessage: "5A 5F 5C 5C 5F 67 5F 62 5C 5E",
                    hint: "This is hexadecimal with Caesar shift. First, convert hex to decimal (5A → 90), then subtract 65 (A's ASCII) to get alphabet position (90-65=25 → Z). Then apply Caesar shift back by 5: Z (25) → U (20), etc.",
                    solution: "HELLOWORLD",
                    cipherType: "Hex+Caesar"
                },
                {
                    level: 12,
                    encryptedMessage: "VGhpcyBpcyB0aGUgZW5kIG9mIHRoZSBnYW1l",
                    hint: "This is Base64 encoded. Decode it to reveal a message about completing challenges.",
                    solution: "This is the end of the game",
                    cipherType: "Base64"
                },
                {
                    level: 13,
                    encryptedMessage: "8D 80 83 83 86 98 86 93 83 85",
                    hint: "This is hexadecimal with reverse shift. Convert hex to decimal (8D → 141), subtract 65 (A's ASCII) to get alphabet position (141-65=76). Since alphabet has 26 letters, modulo 26 (76%26=24 → Y). Then reverse alphabet (A=Z, B=Y, etc.): Y (24) → B (1), etc.",
                    solution: "HELLOWORLD",
                    cipherType: "Hex+Reverse"
                },
                {
                    level: 14,
                    encryptedMessage: "WW91J3ZlIHJlYWNoZWQgdGhlIGZpbmFsIGxldmVs",
                    hint: "This is Base64 encoded. Decode it to reveal a congratulatory message for reaching this level.",
                    solution: "You've reached the final level",
                    cipherType: "Base64"
                },
                {
                    level: 15,
                    encryptedMessage: "9E 91 94 94 97 89 97 82 94 96",
                    hint: "This is hexadecimal with pattern shift. Convert hex to decimal (9E → 158), subtract 65 (A's ASCII) to get alphabet position (158-65=93). Modulo 26 (93%26=15 → P). Then apply pattern shift: subtract position (first letter subtract 1, second subtract 2, etc.): P (15) -1 → O (14), etc.",
                    solution: "HELLOWORLD",
                    cipherType: "Hex+Pattern"
                },
                {
                    level: 16,
                    encryptedMessage: "Q29uZ3JhdHVsYXRpb25zIG9uIHNvbHZpbmcgYWxsIGNoYWxsZW5nZXM=",
                    hint: "This is Base64 encoded. Decode it to reveal a congratulatory message for completing all challenges.",
                    solution: "Congratulations on solving all challenges",
                    cipherType: "Base64"
                },
                {
                    level: 17,
                    encryptedMessage: "AF AG AD AD AI BT AI BP AD AR",
                    hint: "This is hexadecimal in a different format. Treat each pair as hexadecimal (AF → 175), subtract 65 (A's ASCII) to get alphabet position (175-65=110). Modulo 26 (110%26=6 → G). Then apply Atbash (A=Z, B=Y, etc.): G (6) → T (19), etc.",
                    solution: "HELLOWORLD",
                    cipherType: "Hex Variant"
                },
                {
                    level: 18,
                    encryptedMessage: "H|E|L|L|O| |W|O|R|L|D",
                    hint: "This is a pattern cipher with pipes separating letters. Remove the pipes to reveal the message. The pattern is consistent throughout the text.",
                    solution: "HELLO WORLD",
                    cipherType: "Pattern"
                },
                {
                    level: 19,
                    encryptedMessage: "H=E=L=L=O =W=O=R=L=D",
                    hint: "This is a pattern cipher with equals signs separating letters. Remove the equals signs to reveal the message. The pattern is consistent throughout the text.",
                    solution: "HELLO WORLD",
                    cipherType: "Pattern"
                },
                {
                    level: 20,
                    encryptedMessage: "H+E+L+L+O +W+O+R+L+D",
                    hint: "This is a pattern cipher with plus signs separating letters. Remove the plus signs to reveal the message. The pattern is consistent throughout the text.",
                    solution: "HELLO WORLD",
                    cipherType: "Pattern"
                }
            ]
        };

        let currentLevel = 0;
        let currentUser = "";
        let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        let currentDifficulty = 'beginner';
        let currentChallengeSet = challenges.beginner;

        function selectDifficulty(difficulty) {
            currentDifficulty = difficulty;
            currentChallengeSet = challenges[difficulty];
            currentLevel = localStorage.getItem(`currentLevel-${difficulty}`) ? 
                parseInt(localStorage.getItem(`currentLevel-${difficulty}`)) : 0;
            
            // Update active button
            document.querySelectorAll('.difficulty-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.toLowerCase().includes(difficulty)) {
                    btn.classList.add('active');
                }
            });
            
            displayChallenge();
        }

        function startGame() {
            const usernameInput = document.getElementById("username");
            if (!usernameInput.value.trim()) {
                alert("Please enter your name.");
                return;
            }
            currentUser = usernameInput.value.trim();
            displayChallenge();
        }

        function displayChallenge() {
            updateProgressBar();
            const challengeDiv = document.getElementById('challenge');
            const hintArea = document.getElementById('hint-area');
            const hintText = document.getElementById('hint-text');
            
            if (currentLevel < currentChallengeSet.length) {
                const challenge = currentChallengeSet[currentLevel];
                challengeDiv.innerHTML = `
                    <h2>${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)} Level ${challenge.level} - ${challenge.cipherType} Cipher</h2>
                    <p>Encrypted: <strong>${challenge.encryptedMessage}</strong></p>
                    <input type="text" id="answer" placeholder="Your answer">
                    <button onclick="checkAnswer()">Submit</button>
                    <p id="feedback"></p>
                `;
                hintArea.style.display = 'block';
                hintText.textContent = '';
            } else {
                challengeDiv.innerHTML = `
                    <h2>Congratulations, ${currentUser || 'Player'}!</h2>
                    <p>You've completed all ${currentChallengeSet.length} ${currentDifficulty} levels.</p>
                    <button onclick="resetProgress()">Play Again</button>
                `;
                hintArea.style.display = 'none';
                updateLeaderboard(currentUser, currentChallengeSet.length, currentDifficulty);
            }
        }

        function updateProgressBar() {
            const progress = (currentLevel / currentChallengeSet.length) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;
        }

        function checkAnswer() {
            const answerInput = document.getElementById('answer');
            const feedback = document.getElementById('feedback');
            const userAnswer = answerInput.value.trim().toUpperCase();
            const correctAnswer = currentChallengeSet[currentLevel].solution.toUpperCase();

            if (userAnswer === correctAnswer) {
                feedback.textContent = "Success! Moving to the next level.";
                feedback.className = "success";
                
                // Add to leaderboard
                leaderboard.push({
                    name: currentUser || "Anonymous",
                    level: currentLevel + 1,
                    difficulty: currentDifficulty,
                    timestamp: new Date().toLocaleString()
                });
                localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
                
                currentLevel++;
                localStorage.setItem(`currentLevel-${currentDifficulty}`, currentLevel);
                setTimeout(displayChallenge, 1500);
            } else {
                feedback.textContent = "Incorrect. Try again.";
                feedback.className = "error";
            }
        }

        function showHint() {
            const hintText = document.getElementById('hint-text');
            hintText.textContent = currentChallengeSet[currentLevel].hint;
        }

        function resetProgress() {
            if (confirm("Are you sure you want to reset your progress for this difficulty?")) {
                currentLevel = 0;
                localStorage.setItem(`currentLevel-${currentDifficulty}`, currentLevel);
                displayChallenge();
            }
        }

	// Binary Cipher Functions
	function applyBinaryCipher() {
  	  const input = document.getElementById('binary-input').value;
	    const action = document.getElementById('binary-action').value;
 	   const output = action === 'encrypt' ? textToBinary(input) : binaryToText(input);
  	  document.getElementById('binary-output').textContent = output;
	}

	function textToBinary(text) {
	    return text.split('').map(char => {
	        // Handle spaces separately for readability
	        if (char === ' ') return '00100000';
	        return char.charCodeAt(0).toString(2).padStart(8, '0');
	    }).join(' ');
	}

	function binaryToText(binary) {
	    // Remove extra spaces and split into 8-bit chunks
	    const binaryArray = binary.replace(/\s+/g, ' ').trim().split(' ');
    
	    return binaryArray.map(bin => {
	        // Skip invalid binary strings
	        if (!/^[01]{8}$/.test(bin)) return '';
	        return String.fromCharCode(parseInt(bin, 2));
	    }).join('');
	}

        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            
            if (sectionId === 'challenges') {
                selectDifficulty(currentDifficulty);
            } else if (sectionId === 'leaderboard') {
                updateLeaderboard();
            }
        }

        function updateLeaderboard() {
            const entriesDiv = document.getElementById('leaderboard-entries');
            entriesDiv.innerHTML = '<h3>Top Solvers</h3>';
            
            if (leaderboard.length === 0) {
                entriesDiv.innerHTML += '<p>No entries yet. Be the first to solve a challenge!</p>';
                return;
            }
            
            // Sort by difficulty (custom order), then level (descending), then timestamp (ascending)
            const difficultyOrder = {expert: 4, advanced: 3, intermediate: 2, beginner: 1};
            leaderboard.sort((a, b) => {
                if (difficultyOrder[b.difficulty] !== difficultyOrder[a.difficulty]) {
                    return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
                }
                if (b.level !== a.level) return b.level - a.level;
                return new Date(a.timestamp) - new Date(b.timestamp);
            });
            
            // Display top 10
            const top10 = leaderboard.slice(0, 10);
            top10.forEach((entry, index) => {
                const entryDiv = document.createElement('div');
                entryDiv.className = 'leaderboard-entry';
                entryDiv.innerHTML = `
                    <span>${index + 1}. ${entry.name}</span>
                    <span>${entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)} Level ${entry.level} - ${entry.timestamp}</span>
                `;
                entriesDiv.appendChild(entryDiv);
            });
        }

        // Cipher Tools Functions
        function applyCaesarCipher() {
            const input = document.getElementById('caesar-input').value;
            const shift = parseInt(document.getElementById('caesar-shift').value);
            const output = caesarCipher(input, shift);
            document.getElementById('caesar-output').textContent = output;
        }

        function caesarCipher(text, shift) {
            return text.replace(/[a-zA-Z]/g, function(c) {
                const base = c < 'a' ? 65 : 97;
                return String.fromCharCode((c.charCodeAt(0) - base + shift + 26) % 26 + base);
            });
        }

        function applyVigenereCipher() {
            const input = document.getElementById('vigenere-input').value;
            const key = document.getElementById('vigenere-key').value;
            const output = vigenereCipher(input, key);
            document.getElementById('vigenere-output').textContent = output;
        }

        function vigenereCipher(text, key) {
            let result = '';
            key = key.toLowerCase();
            for (let i = 0, j = 0; i < text.length; i++) {
                const c = text.charAt(i);
                if (/[a-zA-Z]/.test(c)) {
                    const base = c < 'a' ? 65 : 97;
                    const keyChar = key.charCodeAt(j % key.length) - 97;
                    result += String.fromCharCode((c.charCodeAt(0) - base + keyChar + 26) % 26 + base);
                    j++;
                } else {
                    result += c;
                }
            }
            return result;
        }

        function applyAtbashCipher() {
            const input = document.getElementById('atbash-input').value;
            const output = atbashCipher(input);
            document.getElementById('atbash-output').textContent = output;
        }

        function atbashCipher(text) {
            return text.replace(/[a-zA-Z]/g, function(c) {
                const base = c < 'a' ? 65 : 97;
                const offset = c.toLowerCase().charCodeAt(0) - 97;
                return String.fromCharCode(25 - offset + base);
            });
        }

        // Learn Section Interactive Examples
        function demoCaesar() {
            const text = document.getElementById('caesar-original').textContent;
            const shift = parseInt(document.getElementById('caesar-learn-shift').value);
            document.getElementById('caesar-result').textContent = caesarCipher(text, shift);
        }
        
        function demoVigenere() {
            const text = document.getElementById('vigenere-original').textContent;
            const key = document.getElementById('vigenere-learn-key').value;
            document.getElementById('vigenere-result').textContent = vigenereCipher(text, key);
        }
        
        function demoMorse() {
            const text = document.getElementById('morse-input').value.toUpperCase();
            const morseMap = {
                'A': '┬иРѕњ', 'B': 'Рѕњ┬и┬и┬и', 'C': 'Рѕњ┬иРѕњ┬и', 'D': 'Рѕњ┬и┬и', 'E': '┬и', 'F': '┬и┬иРѕњ┬и',
                'G': 'РѕњРѕњ┬и', 'H': '┬и┬и┬и┬и', 'I': '┬и┬и', 'J': '┬иРѕњРѕњРѕњ', 'K': 'Рѕњ┬иРѕњ', 'L': '┬иРѕњ┬и┬и',
                'M': 'РѕњРѕњ', 'N': 'Рѕњ┬и', 'O': 'РѕњРѕњРѕњ', 'P': '┬иРѕњРѕњ┬и', 'Q': 'РѕњРѕњ┬иРѕњ', 'R': '┬иРѕњ┬и',
                'S': '┬и┬и┬и', 'T': 'Рѕњ', 'U': '┬и┬иРѕњ', 'V': '┬и┬и┬иРѕњ', 'W': '┬иРѕњРѕњ', 'X': 'Рѕњ┬и┬иРѕњ',
                'Y': 'Рѕњ┬иРѕњРѕњ', 'Z': 'РѕњРѕњ┬и┬и',
                '1': '┬иРѕњРѕњРѕњРѕњ', '2': '┬и┬иРѕњРѕњРѕњ', '3': '┬и┬и┬иРѕњРѕњ', '4': '┬и┬и┬и┬иРѕњ', '5': '┬и┬и┬и┬и┬и',
                '6': 'Рѕњ┬и┬и┬и┬и', '7': 'РѕњРѕњ┬и┬и┬и', '8': 'РѕњРѕњРѕњ┬и┬и', '9': 'РѕњРѕњРѕњРѕњ┬и', '0': 'РѕњРѕњРѕњРѕњРѕњ',
                ' ': '/'
            };
            
            let result = '';
            for (let char of text) {
                result += (morseMap[char] || char) + ' ';
            }
            document.getElementById('morse-result').textContent = result.trim();
        }

        window.onload = function() {
            showSection('home');
            updateLeaderboard();
            selectDifficulty('beginner');
        };
    