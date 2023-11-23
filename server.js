const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil !');
});

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lafamille12.',
    database: 'base_de_donees',
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM utilisateurs WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur serveur');
        }
    
        if (results.length > 0) {
            const user = results[0];
    
            bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
                if (bcryptErr) {
                    console.error(bcryptErr);
                    return res.status(500).send('Erreur serveur');
                }
    
                if (bcryptResult) {
                    // L'utilisateur est authentifié avec succès
                    res.send('Connexion réussie en tant qu\'administrateur.');
                } else {
                    // Mot de passe incorrect
                    res.status(401).send('Mot de passe incorrect');
                }
            });
        } else {
            // Aucun utilisateur trouvé avec le nom d'utilisateur spécifié
            res.status(404).send('Aucun utilisateur trouvé avec ce nom d\'utilisateur');
        }
    });
    
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Gestionnaire pour les erreurs 404
app.use((req, res) => {
    res.status(404).send('Page non trouvée');
});
