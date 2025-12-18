import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Auth0 SECURITY RULE:
 * - Allowed: http://localhost
 * - Allowed: https://*
 * - NOT allowed: http://IP_ADDRESS
 *
 * So we ENABLE Auth0 only on localhost.
 */
const isLocalhost = window.location.hostname === "localhost";

const root = createRoot(document.getElementById("root"));

root.render(
  isLocalhost ? (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  ) : (
    <>
      {/* Auth0 disabled for IP/mobile access */}
      <App />
    </>
  )
);

// Optional: keep or remove
reportWebVitals();