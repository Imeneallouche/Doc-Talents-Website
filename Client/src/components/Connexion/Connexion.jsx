import "./Connexion.css";
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="Connexion">
      <h1 className="Connexion-title">Connexion</h1>
      <p className="Connexion-subtitle">
        Connectez-vous et commencez à gérer vos doctorants
      </p>

      <form className="Connexion-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Entrez votre email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div className="Connexion-authentifications">
          <div className="Connexion-SeSouvenir">
            <a href="">Mot de passe oublié?</a>

            <label htmlFor="SeSouvenir">Se souvenir</label>
            <input
              type="checkbox"
              id="SeSouvenir"
              name="SeSouvenir"
              value="Se souvenir"
            />
          </div>
        </div>
        <button type="submit" className="Connexion-passwordForgotten">
          Connexion
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
