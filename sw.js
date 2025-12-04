self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Rien de spécial pour l'instant
});

self.addEventListener("fetch", (event) => {
  // On laisse tout passer vers le réseau sans cache compliqué
  return;
});
