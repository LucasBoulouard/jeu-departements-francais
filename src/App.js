import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Base de données des départements français
  const departements = [
    { nom: "Ain", numero: "01", prefecture: "Bourg-en-Bresse" },
    { nom: "Aisne", numero: "02", prefecture: "Laon" },
    { nom: "Allier", numero: "03", prefecture: "Moulins" },
    { nom: "Alpes-de-Haute-Provence", numero: "04", prefecture: "Digne-les-Bains" },
    { nom: "Hautes-Alpes", numero: "05", prefecture: "Gap" },
    { nom: "Alpes-Maritimes", numero: "06", prefecture: "Nice" },
    { nom: "Ardèche", numero: "07", prefecture: "Privas" },
    { nom: "Ardennes", numero: "08", prefecture: "Charleville-Mézières" },
    { nom: "Ariège", numero: "09", prefecture: "Foix" },
    { nom: "Aube", numero: "10", prefecture: "Troyes" },
    { nom: "Aude", numero: "11", prefecture: "Carcassonne" },
    { nom: "Aveyron", numero: "12", prefecture: "Rodez" },
    { nom: "Bouches-du-Rhône", numero: "13", prefecture: "Marseille" },
    { nom: "Calvados", numero: "14", prefecture: "Caen" },
    { nom: "Cantal", numero: "15", prefecture: "Aurillac" },
    { nom: "Charente", numero: "16", prefecture: "Angoulême" },
    { nom: "Charente-Maritime", numero: "17", prefecture: "La Rochelle" },
    { nom: "Cher", numero: "18", prefecture: "Bourges" },
    { nom: "Corrèze", numero: "19", prefecture: "Tulle" },
    { nom: "Corse-du-Sud", numero: "2A", prefecture: "Ajaccio" },
    { nom: "Haute-Corse", numero: "2B", prefecture: "Bastia" },
    { nom: "Côte-d'Or", numero: "21", prefecture: "Dijon" },
    { nom: "Côtes-d'Armor", numero: "22", prefecture: "Saint-Brieuc" },
    { nom: "Creuse", numero: "23", prefecture: "Guéret" },
    { nom: "Dordogne", numero: "24", prefecture: "Périgueux" },
    { nom: "Doubs", numero: "25", prefecture: "Besançon" },
    { nom: "Drôme", numero: "26", prefecture: "Valence" },
    { nom: "Eure", numero: "27", prefecture: "Évreux" },
    { nom: "Eure-et-Loir", numero: "28", prefecture: "Chartres" },
    { nom: "Finistère", numero: "29", prefecture: "Quimper" },
    { nom: "Gard", numero: "30", prefecture: "Nîmes" },
    { nom: "Haute-Garonne", numero: "31", prefecture: "Toulouse" },
    { nom: "Gers", numero: "32", prefecture: "Auch" },
    { nom: "Gironde", numero: "33", prefecture: "Bordeaux" },
    { nom: "Hérault", numero: "34", prefecture: "Montpellier" },
    { nom: "Ille-et-Vilaine", numero: "35", prefecture: "Rennes" },
    { nom: "Indre", numero: "36", prefecture: "Châteauroux" },
    { nom: "Indre-et-Loire", numero: "37", prefecture: "Tours" },
    { nom: "Isère", numero: "38", prefecture: "Grenoble" },
    { nom: "Jura", numero: "39", prefecture: "Lons-le-Saunier" },
    { nom: "Landes", numero: "40", prefecture: "Mont-de-Marsan" },
    { nom: "Loir-et-Cher", numero: "41", prefecture: "Blois" },
    { nom: "Loire", numero: "42", prefecture: "Saint-Étienne" },
    { nom: "Haute-Loire", numero: "43", prefecture: "Le Puy-en-Velay" },
    { nom: "Loire-Atlantique", numero: "44", prefecture: "Nantes" },
    { nom: "Loiret", numero: "45", prefecture: "Orléans" },
    { nom: "Lot", numero: "46", prefecture: "Cahors" },
    { nom: "Lot-et-Garonne", numero: "47", prefecture: "Agen" },
    { nom: "Lozère", numero: "48", prefecture: "Mende" },
    { nom: "Maine-et-Loire", numero: "49", prefecture: "Angers" },
    { nom: "Manche", numero: "50", prefecture: "Saint-Lô" },
    { nom: "Marne", numero: "51", prefecture: "Châlons-en-Champagne" },
    { nom: "Haute-Marne", numero: "52", prefecture: "Chaumont" },
    { nom: "Mayenne", numero: "53", prefecture: "Laval" },
    { nom: "Meurthe-et-Moselle", numero: "54", prefecture: "Nancy" },
    { nom: "Meuse", numero: "55", prefecture: "Bar-le-Duc" },
    { nom: "Morbihan", numero: "56", prefecture: "Vannes" },
    { nom: "Moselle", numero: "57", prefecture: "Metz" },
    { nom: "Nièvre", numero: "58", prefecture: "Nevers" },
    { nom: "Nord", numero: "59", prefecture: "Lille" },
    { nom: "Oise", numero: "60", prefecture: "Beauvais" },
    { nom: "Orne", numero: "61", prefecture: "Alençon" },
    { nom: "Pas-de-Calais", numero: "62", prefecture: "Arras" },
    { nom: "Puy-de-Dôme", numero: "63", prefecture: "Clermont-Ferrand" },
    { nom: "Pyrénées-Atlantiques", numero: "64", prefecture: "Pau" },
    { nom: "Hautes-Pyrénées", numero: "65", prefecture: "Tarbes" },
    { nom: "Pyrénées-Orientales", numero: "66", prefecture: "Perpignan" },
    { nom: "Bas-Rhin", numero: "67", prefecture: "Strasbourg" },
    { nom: "Haut-Rhin", numero: "68", prefecture: "Colmar" },
    { nom: "Rhône", numero: "69", prefecture: "Lyon" },
    { nom: "Haute-Saône", numero: "70", prefecture: "Vesoul" },
    { nom: "Saône-et-Loire", numero: "71", prefecture: "Mâcon" },
    { nom: "Sarthe", numero: "72", prefecture: "Le Mans" },
    { nom: "Savoie", numero: "73", prefecture: "Chambéry" },
    { nom: "Haute-Savoie", numero: "74", prefecture: "Annecy" },
    { nom: "Paris", numero: "75", prefecture: "Paris" },
    { nom: "Seine-Maritime", numero: "76", prefecture: "Rouen" },
    { nom: "Seine-et-Marne", numero: "77", prefecture: "Melun" },
    { nom: "Yvelines", numero: "78", prefecture: "Versailles" },
    { nom: "Deux-Sèvres", numero: "79", prefecture: "Niort" },
    { nom: "Somme", numero: "80", prefecture: "Amiens" },
    { nom: "Tarn", numero: "81", prefecture: "Albi" },
    { nom: "Tarn-et-Garonne", numero: "82", prefecture: "Montauban" },
    { nom: "Var", numero: "83", prefecture: "Toulon" },
    { nom: "Vaucluse", numero: "84", prefecture: "Avignon" },
    { nom: "Vendée", numero: "85", prefecture: "La Roche-sur-Yon" },
    { nom: "Vienne", numero: "86", prefecture: "Poitiers" },
    { nom: "Haute-Vienne", numero: "87", prefecture: "Limoges" },
    { nom: "Vosges", numero: "88", prefecture: "Épinal" },
    { nom: "Yonne", numero: "89", prefecture: "Auxerre" },
    { nom: "Territoire de Belfort", numero: "90", prefecture: "Belfort" },
    { nom: "Essonne", numero: "91", prefecture: "Évry" },
    { nom: "Hauts-de-Seine", numero: "92", prefecture: "Nanterre" },
    { nom: "Seine-Saint-Denis", numero: "93", prefecture: "Bobigny" },
    { nom: "Val-de-Marne", numero: "94", prefecture: "Créteil" },
    { nom: "Val-d'Oise", numero: "95", prefecture: "Cergy" },
    { nom: "Guadeloupe", numero: "971", prefecture: "Basse-Terre" },
    { nom: "Martinique", numero: "972", prefecture: "Fort-de-France" },
    { nom: "Guyane", numero: "973", prefecture: "Cayenne" },
    { nom: "La Réunion", numero: "974", prefecture: "Saint-Denis" },
    { nom: "Mayotte", numero: "976", prefecture: "Mamoudzou" }
  ];

  // États du jeu
  const [modeSelection, setModeSelection] = useState("nom"); // "nom", "numero", "prefecture"
  const [selectedNom, setSelectedNom] = useState("");
  const [selectedNumero, setSelectedNumero] = useState("");
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Générer une nouvelle question
  const genererNouvelleQuestion = () => {
    const randomDept = departements[Math.floor(Math.random() * departements.length)];
    setCurrentQuestion(randomDept);
    
    // Réinitialiser les sélections précédentes
    setSelectedNom("");
    setSelectedNumero("");
    setSelectedPrefecture("");
    
    // Définir la valeur du champ qui sera affiché
    if (modeSelection === "nom") {
      setSelectedNom(randomDept.nom);
    } else if (modeSelection === "numero") {
      setSelectedNumero(randomDept.numero);
    } else {
      setSelectedPrefecture(randomDept.prefecture);
    }
    
    setAnswered(false);
    setFeedback("");
  };

  // Vérifier la réponse
  const verifierReponse = () => {
    if (!currentQuestion) return;
    
    let correct = true;
    
    if (modeSelection !== "nom" && selectedNom !== currentQuestion.nom) correct = false;
    if (modeSelection !== "numero" && selectedNumero !== currentQuestion.numero) correct = false;
    if (modeSelection !== "prefecture" && selectedPrefecture !== currentQuestion.prefecture) correct = false;
    
    if (correct) {
      setScore(score + 1);
      setFeedback("Correct ! Bravo !");
    } else {
      setFeedback("Incorrect. La bonne réponse était: " + 
        (modeSelection !== "nom" ? `Département: ${currentQuestion.nom}` : "") + 
        (modeSelection !== "numero" ? `${modeSelection !== "nom" ? ", " : ""}Numéro: ${currentQuestion.numero}` : "") +
        (modeSelection !== "prefecture" ? `${modeSelection !== "nom" || modeSelection !== "numero" ? ", " : ""}Préfecture: ${currentQuestion.prefecture}` : ""));
    }
    
    setAnswered(true);
  };

  // Gérer le changement de mode
  const handleChangeModeSelection = (mode) => {
    setModeSelection(mode);
    setCurrentQuestion(null);
    setSelectedNom("");
    setSelectedNumero("");
    setSelectedPrefecture("");
    setFeedback("");
    setAnswered(false);
  };

  // Effet pour générer une question au chargement
  useEffect(() => {
    genererNouvelleQuestion();
  }, [modeSelection]);

  return (
    <div className="container">
      <div className="game-container">
        <h1 className="title">Jeu des Départements Français</h1>
        
        <div className="mode-selector">
          <p className="mode-label">Choisis le mode de jeu:</p>
          <div className="button-group">
            <button 
              className={`mode-button ${modeSelection === "nom" ? "selected" : "unselected"}`}
              onClick={() => handleChangeModeSelection("nom")}
            >
              Par Nom
            </button>
            <button 
              className={`mode-button ${modeSelection === "numero" ? "selected" : "unselected"}`}
              onClick={() => handleChangeModeSelection("numero")}
            >
              Par Numéro
            </button>
            <button 
              className={`mode-button ${modeSelection === "prefecture" ? "selected" : "unselected"}`}
              onClick={() => handleChangeModeSelection("prefecture")}
            >
              Par Préfecture
            </button>
          </div>
        </div>
        
        <div className="form-area">
          <div className="form-group">
            <div className="form-row">
              <label className="form-label">Département:</label>
              {modeSelection === "nom" ? (
                <div className="form-value">{selectedNom}</div>
              ) : (
                <select 
                  className="form-select" 
                  value={selectedNom}
                  onChange={(e) => setSelectedNom(e.target.value)}
                  disabled={answered}
                >
                  <option value="">Sélectionner un département</option>
                  {departements.map(dept => (
                    <option key={dept.nom} value={dept.nom}>{dept.nom}</option>
                  ))}
                </select>
              )}
            </div>
            
            <div className="form-row">
              <label className="form-label">Numéro:</label>
              {modeSelection === "numero" ? (
                <div className="form-value">{selectedNumero}</div>
              ) : (
                <select 
                  className="form-select" 
                  value={selectedNumero}
                  onChange={(e) => setSelectedNumero(e.target.value)}
                  disabled={answered}
                >
                  <option value="">Sélectionner un numéro</option>
                  {departements.map(dept => (
                    <option key={dept.numero} value={dept.numero}>{dept.numero}</option>
                  ))}
                </select>
              )}
            </div>
            
            <div className="form-row">
              <label className="form-label">Préfecture:</label>
              {modeSelection === "prefecture" ? (
                <div className="form-value">{selectedPrefecture}</div>
              ) : (
                <select 
                  className="form-select" 
                  value={selectedPrefecture}
                  onChange={(e) => setSelectedPrefecture(e.target.value)}
                  disabled={answered}
                >
                  <option value="">Sélectionner une préfecture</option>
                  {departements.map(dept => (
                    <option key={dept.prefecture} value={dept.prefecture}>{dept.prefecture}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
        
        <div className="button-container">
          <button 
            className="verify-button"
            onClick={verifierReponse}
            disabled={answered || !currentQuestion}
          >
            Vérifier
          </button>
          
          <button 
            className="next-button"
            onClick={genererNouvelleQuestion}
          >
            Nouvelle question
          </button>
        </div>
        
        {feedback && (
          <div className={`feedback ${feedback.startsWith("Correct") ? "feedback-correct" : "feedback-incorrect"}`}>
            {feedback}
          </div>
        )}
        
        <div className="score">
          Score: {score}
        </div>
      </div>
    </div>
  );
};

export default App;