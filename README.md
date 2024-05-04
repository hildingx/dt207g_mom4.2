# Om webbapplikationen
## Av Alexander Hilding

Syftet med den här webbapplikationen är att hantera användarautentisering och registrering.
I applikationen kan användaren registrera ett konto med användarnamn, lösenord, förnamn och efternamn, och sedan logga in och visa skyddad användardata endast tillgänglig efter lyckad inloggning.
Datan valideras och lagras i en MongoDB-databas och hostas på MognoDB Atlas.

Vid inloggning autentiseras användaren mot lagradet uppgifter i databasen och utfärdar en JWT (JSON Web token) som används för att ge åtkomst till skyddade resurser. JWT'n är giltig under 1 timme.
Vid inloggat läge hämtas för- och efternamn med hjälp av decodad payload i JWT (användarnamn i detta fall pga unikt) för att hitta rätt användardata i backend och skrivs sedan ut i DOM.
Vid utloggning raderas JWT'n. Kontroller för JWT'ns giltighet är satta över hela applikationen för att dels hantera åtkomst till de skyddade resurserna men också för att dynamiskt hantera UI-element baserat på inloggat/utloggat läge.

HTML, SCSS och Javascript har använts för att bygga användargränssnittet. Applikationen är deployad på Netlify.

### URL till applikationen
Webbapplikationen är publicerad och tillgänglig på https://darling-taffy-4b820e.netlify.app/